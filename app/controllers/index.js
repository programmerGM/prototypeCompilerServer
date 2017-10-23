var sintatico = require('./sintatico');

module.exports.index = (application, req, res) => {
  res.render('index', {
    validacao: {},
    dadosForm: '',
    tokens: {}
  });
}

module.exports.validar = (application, req, res) => {
  // Lista de tokens
  var tokList = [{
      nome: 'while',
      code: 1
    },
    {
      nome: 'void',
      code: 2
    },
    {
      nome: 'string',
      code: 3
    },
    {
      nome: 'return',
      code: 4
    },
    {
      nome: 'numerointeiro',
      code: 5
    },
    {
      nome: 'numeroflutuante',
      code: 6
    },
    {
      nome: 'nomevariavel',
      code: 7
    },
    {
      nome: 'nomecht',
      code: 8
    }, // Nome do char
    {
      nome: 'nomedastring',
      code: 9
    },
    {
      nome: 'main',
      code: 10
    },
    {
      nome: 'literal',
      code: 11
    },
    {
      nome: 'integer',
      code: 12
    },
    {
      nome: 'inicio',
      code: 13
    },
    {
      nome: 'if',
      code: 14
    },
    {
      nome: 'for',
      code: 16
    },
    {
      nome: 'float',
      code: 17
    },
    {
      nome: 'fim',
      code: 18
    },
    {
      nome: 'else',
      code: 19
    },
    {
      nome: 'do',
      code: 20
    },
    {
      nome: 'cout',
      code: 21
    },
    {
      nome: 'cin',
      code: 22
    },
    {
      nome: 'char',
      code: 23
    },
    {
      nome: 'callfuncao',
      code: 24
    },
    {
      nome: '>>',
      code: 25
    },
    {
      nome: '>=',
      code: 26
    },
    {
      nome: '>',
      code: 27
    },
    {
      nome: '==',
      code: 28
    },
    {
      nome: '=',
      code: 29
    },
    {
      nome: '<=',
      code: 30
    },
    {
      nome: '<<',
      code: 31
    },
    {
      nome: '<',
      code: 32
    },
    {
      nome: '++',
      code: 33
    },
    {
      nome: '+',
      code: 34
    },
    {
      nome: '}',
      code: 35
    },
    {
      nome: '{',
      code: 36
    },
    {
      nome: ';',
      code: 37
    },
    {
      nome: ':',
      code: 38
    },
    {
      nome: '/',
      code: 39
    },
    {
      nome: ',',
      code: 40
    },
    {
      nome: '*',
      code: 41
    },
    {
      nome: ')',
      code: 42
    },
    {
      nome: '(',
      code: 43
    },
    {
      nome: '$',
      code: 44
    },
    {
      nome: '!=',
      code: 45
    },
    {
      nome: '--',
      code: 46
    },
    {
      nome: '-',
      code: 47
    },
    {
      nome: 'nomefuncao',
      code: 0
    }
    ],
    errList = [{
      nome: 'literal',
      msg: 'Erro ao fechar o literal "'
    },
    {
      nome: 'float',
      msg: 'Float não foi inserido corretamente'
    },
    {
      nome: 'stringchar',
      msg: 'Falta de fechamento. Esperado uma string ou char.'
    },
    {
      nome: 'diff',
      msg: 'Esperava "!=" entrava inválida'
    },
    {
      nome: 'biginteger',
      msg: 'Número inteiro ultrapassa o limite de 1.048.576'
    },
    {
      nome: 'smallinteger',
      msg: 'Número inteiro menor que o limite de -1.048.576'
    },
    {
      nome: 'bigfloat',
      msg: 'Número float ultrapassa o limite de 1.073.741.824 para númuero inteiro'
    },
    {
      nome: 'smallfloat',
      msg: 'Número float menor o limite de -1.073.741.824'
    },
    {
      nome: 'invalidcomment',
      msg: 'Falta fechamento de comentário'
    },
    {
      nome: 'numberinvalido',
      msg: 'Entrada inválida para um inteiro'
    }, // falta esse erro. Exemplo: 123variavel123 - é uma variável inválida ou número inválido.
    {
      nome: 'identifyinvalid',
      msg: 'Tamanho inválido para o identificador. Limite: 512 caracteres'
    }
    ],
    Token = function (line, token, messageError, code) {
      this.line = line;
      this.token = token;
      this.messageError = messageError;
      this.code = code;
    },
    text = textOriginal = textaux = req.body.textarea,
    typeClient = req.body.typeclient,
    validacao = {},
    tokens = [],
    posicao = 0,
    literal = false,
    literalOpen = 0,
    number = false,
    numberOpen = 0,
    numAcumula = "",
    wordAux = "",
    firstLetter = false,
    hasChar = false,
    literalAux = "",
    charAux = "";

  if (!typeClient) {
    typeClient = 0
  }

  // remove espaço em branco
  // @deprecated text = text.replace(/(\r\n|\n|\r)/gm, "");
  // text = text.replace(/\s/g, '');
  //console.log(\/\*([\S\s]+?)\*\/.atc)

  // Verifica comentário de linha e bloco, se existir REMOVE
  text = text.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '');

  var lines = text.split('\n');
  for (var a = 0; a < lines.length; a++) {
    //lines[a] = lines[a].replace(/\s/g, '');
    textaux = lines[a];
    for (var b = 0; b < textaux.length; b++) {
      var l = textaux[b];
      if (l.match(/\s+/g)) {
        continue;
      }
      // seta proximo valor de next
      if (b <= textaux.length - 3) {
        var nextnext = textaux[b + 2];
      } else {
        var nextnext = "";
      }
      // seta proximo valor de l
      if (b != textaux.length - 1) {
        var next = textaux[b + 1];
      } else {
        var next = "";
      }
      // seta valor anterior de l
      if (b > 1) {
        var prev = textaux[b - 1];
      } else {
        var prev = "";
      }

      if (l.match(/[\/]/) && next.match(/\*/)) {
        error('invalidcomment');
      }

      // verifica se não é fechamento de literal
      if ((literal && !(l.match(/[\"]+/g))) || (hasChar && !(l.match(/[\']+/g)))) {
        if (literal) {
          literalAux += l;
        } else {
          if (hasChar) {
            charAux += l;
            console.log(charAux);
          }
        }
        continue;
      }

      // verifica alguns single character
      switch (true) {
        // } - 35
        case /[}]+/g.test(l):
          tok('}');
          continue;
        // { - 36
        case /[{]+/g.test(l):
          tok('{');
          continue;
        // ; - 37
        case /[;]+/g.test(l):
          tok(';');
          continue;
        // : - 38
        case /[:]+/g.test(l):
          tok(':');
          continue;
        // , - 40
        case /[,]+/g.test(l):
          tok(',');
          continue;
        // ) - 42
        case /[)]+/g.test(l):
          tok(')');
          continue;
        // , - 43
        case /[(]+/g.test(l):
          tok('(');
          continue;

      }

      if (l.match(/[a-z]+/g)) {
        // armazena a letra
        wordAux += l;

        /* se não tiver lendo uma sequencia de de letras
         então seta para true e reseta o auxiliar */
        if (!firstLetter) {
          firstLetter = !firstLetter;
        }
        // se o proximo não for uma letra então pode finalizar
        if (!(next.match(/[a-z]+/g))) {
          var finded = false;
          firstLetter = !firstLetter;
          //console.log(wordAux);
          temp = wordAux;
          wordAux = "";
          find = false;

          tokList.forEach((value) => {
            if (value.nome === temp) { //estava MATCH ai pegava NUM no match e dava PT
              finded = !finded;
              tok(temp);
            }
          });
          if (!finded) {
            //ANNN SE O PROXIMO FOR ( OU { É PQ TA CHAMANDO FUNCAO OU TA INICIANDO UMA CERTO? CERTO
            if (next.match(/[(]+/g) || nextnext.match(/[(]+/g)) {
              tokL(temp, tokList.find(x => x.nome === 'nomevariavel ').code);
              continue;
            }
            if (next.match(/[{]+/g) || nextnext.match(/[{]+/g)) {
              tokL(temp, tokList.find(x => x.nome === 'nomevariavel').code);
              continue;
            }
            //v verifica o anterior se é ( e anterior a ele se é return
            //+.+.+.+.+.+.+.+.+.+.+.+.  ARRUAMR STRING//+.+.+.+.+.+.+.+.+.+.+.+. 
            /* if (tokens[tokens.length - 1].code == tokList.find(x => x.nome === "(").code &&
              tokens[tokens.length - 2].code == tokList.find(x => x.nome === "return").code) {
              tok('string');
              continue;
            } */

            if (temp.length > 512) {
              error('identifyinvalid');
              continue;
            }
            console.log("asdasdasdas    " + temp)
            tokL(temp, tokList.find(x => x.nome === 'nomevariavel').code);
            continue;
          }
        }
      }

      // verifica char ou string
      if (l.match(/[']+/g)) {
        // se o segundo após l for "'"então é pq é char
        b += 1;
        if (nextnext.match(/[']+/g)) {
          // é char - 23
          tokL(next, tokList.find(x => x.nome === 'nomecht').code);
          b += 1;
          continue;
        } else {
          /* FAZER A STRING AQUI, tem que ficar assim -> 'Isso é uma string' */
          if (hasChar) {
            tokL(charAux, tokList.find(x => x.nome === 'nomedastring').code);
            charAux = "";
          } else {
            console.log("MERDA " + next);
            charAux = next;
          }
          hasChar = !hasChar;
          continue;
        }
      }

      // se for numero ou virgula
      if (l.match(/[0-9]+/g) || l.match(/[.]+/g)) {
        floatCycle = true;
        // se os proximos não foram parte da parada seta boolean
        numAcumula += "" + l;
        // se o proximo n for numero nem virgula tem que criar token e setar false
        if (!(l.match(/[.]+/g) && !next.match(/[0-9]+/g))) {
          if (!(next.match(/[0-9]+/g)) && (!next.match(/[.]+/g))) {
            // se tem ponto é float - 17
            if (numAcumula.match(/[.]+/g)) {
              // se não tiver +2 . no valor não tem erro
              if (!(numAcumula.match(/([.])+/g).length > 1)) {
                // sucesso
                if (numAcumula >= 0 && numAcumula > 1073741824) {
                  error('bigfloat');
                } else if (numAcumula < 0 && numAcumula < -1073741824) {
                  error('smallfloat');
                } else {
                  tokL(numAcumula, tokList.find(x => x.nome === 'numeroflutuante').code);
                  numAcumula = '';
                }
              } else {
                // msg erro
                error('float');
              }
            } else {
              // senão é numerointeiro - 5
              if (numAcumula >= 0 && numAcumula > 1048576) {
                error('biginteger');
              } else if (numAcumula < 0 && numAcumula < -1048576) {
                error('smallinteger');
              } else {
                tokL(numAcumula, tokList.find(x => x.nome === 'numerointeiro').code);
                numAcumula = '';
              }
            }
            if (next.match(/[0-9]+/g) || next.match(/[.]+/g)) {
              floatCycle = false;
              numAcumula = "";
            }
            continue;
          }
        } else {
          error('float');
        }
      }

      // se é operador matemático ou incrementação
      if (l.match(/[+\-*/]+/g)) {
        switch (true) {
          case /[+]+/g.test(l):
            if (next.match(/[+]+/g)) {
              // ++ 33
              tok('++');
              b += 1;
            } else {
              // + 34
              tok('+');
            }
            continue;
          case /[-]+/g.test(l):
            if (next.match(/[-]+/g)) {
              // -- 46
              tok('--');
              b += 1;
            } else {
              // - 47
              tok('-');
            }
            continue;
          case /[*]+/g.test(l):
            // * - 41
            tok('*');
            continue;
          case /[/]+/g.test(l):
            // / - 39
            tok('/');
            continue;
        }
      }

      // se é operador de comparação
      if (l.match(/[<>!=]+/g)) {
        if (l.match(/[<]+/g)) {
          // << cin -  31
          if (next.match(/[<]+/g)) {
            tok('<<');
          } else if (next.match(/[=]+/g)) { // <= menor ou igual que - 30
            tok('<=');
          } else {
            tok('<');
          }
          b += 1;
        } else {
          if (l.match(/[>]+/g)) {
            // >> cin - 25
            if (next.match(/[>]+/g)) {
              tok('>>');
              b += 1;
            } else if (next.match(/[=]+/g)) { // >= maior ou igual que 26
              tok('>=');
              b += 1;
            } else {
              tok('>');
            }
          } else {

            // != diferente - 45
            if (l.match(/[!]+/g)) {
              if (next.match(/[=]+/g)) {
                tok('!=');
                b += 1;
              } else {
                error('diff');
                continue;
              }
            } else {
              // == igual
              if (l.match(/[=]+/g)) {
                // == - 28
                if (next.match(/[=]+/g)) {
                  tok('==');
                  b += 1;
                  continue;
                }
                // se for = - 29
                tok("=");
                continue;

              }
            }
          }
        }
      }

      //verifica '""
      if (l.match(/[\"]+/g) || l.match(/[\']+/g)) {
        if (!literal && l.match(/[\"]+/g)) {
          literalOpen = a;
          literal = !literal;
        } else {
          if (l.match(/[\"]+/g)) {
            /* //se tem igual é pq é variável recebendo string
            if (tokens[tokens.length - 1].code == tokList.find(x => x.nome === "=").code) {
              tok("nomedastring");
            } else { */
            // literal - 11
            tok("literal");
            literalAux = "";
            literal = !literal;
          } else if (hasChar && l.match(/[\']+/g)) {
            hasChar = !hasChar;
          } else {
            tok("while");
            charAux = "";
          }
        }
      }
    }
  } // Fim FOR
  //se não fechar o literal
  if (literal) {
    error('literal');
  }

  // fim de arquivo $ - 44
  tok('$');

  retornar();

  function findTabela(top, entrada) {
    tabelaParse.forEach((value) => {
      if (value.p1 === top && value.p2 === entrada) {
        return value.valor;
      }
    });
    return 0;
  }

  function isTerminal(element) {
    tokList.forEach((value) => {
      if (value.code === element) {
        return true;
      }
    });
    return false;
  }

  function retornar() {
    console.log(tokens);

    if (typeClient == 1) { // App JavaFx
      res.send(tokens);
    } else { // Página web
      res.render('index', {
        validacao: validacao,
        tokens: tokens,
        dadosForm: textOriginal,
        sintatico: sintatico.sintatico(application, req, res, tokens)
      });
    }
  }

  function tok(nome) {
    console.log(nome);
    tokens.push(new Token(a, tokList.find(x => x.nome === nome).nome, null, tokList.find(x => x.nome === nome).code));
  }
  function tokL(word, code) {
    tokens.push(new Token(a, word, null, code));
  }

  function error(nome) {
    tokens.push(new Token(a, null, errList.find(x => x.nome === nome).msg, null));
    retornar();
  }
}