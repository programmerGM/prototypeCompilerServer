module.exports.index = (application, req, res) => {
  res.render('index', { validacao: {}, dadosForm: '', tokens: {} });
}

module.exports.validar = (application, req, res) => {

  var tokList = [
    { nome: 'while', code: 1 },
    { nome: 'void', code: 2 },
    { nome: 'string', code: 3 },
    { nome: 'return', code: 4 },
    { nome: 'numerointeiro', code: 5 },
    { nome: 'numerofloat', code: 6 },
    { nome: 'nomevariavel', code: 7 },
    { nome: 'nomechar', code: 8 },
    { nome: 'nomestring', code: 9 },
    { nome: 'main', code: 10 },
    { nome: 'literal', code: 11 },
    { nome: 'integer', code: 12 },
    { nome: 'inicio', code: 13 },
    { nome: 'if', code: 14 },
    { nome: 'for', code: 16 },
    { nome: 'float', code: 17 },
    { nome: 'fim', code: 18 },
    { nome: 'else', code: 19 },
    { nome: 'do', code: 20 },
    { nome: 'cout', code: 21 },
    { nome: 'cin', code: 22 },
    { nome: 'char', code: 23 },
    { nome: 'callfuncao', code: 24 },
    { nome: '>>', code: 25 },
    { nome: '>=', code: 26 },
    { nome: '>', code: 27 },
    { nome: '==', code: 28 },
    { nome: '=', code: 29 },
    { nome: '<=', code: 30 },
    { nome: '<<', code: 31 },
    { nome: '<', code: 32 },
    { nome: '++', code: 33 },
    { nome: '+', code: 34 },
    { nome: '}', code: 35 },
    { nome: '{', code: 36 },
    { nome: ';', code: 37 },
    { nome: ':', code: 38 },
    { nome: '/', code: 39 },
    { nome: ',', code: 40 },
    { nome: '*', code: 41 },
    { nome: ')', code: 42 },
    { nome: '(', code: 43 },
    { nome: '$', code: 44 },
    { nome: '!=', code: 45 },
    { nome: '--', code: 46 },
    { nome: '-', code: 47 },
  ],
    errList = [
      { nome: 'literal', msg: 'Erro ao fechar o literal' },
      { nome: 'float', msg: 'Float não foi inserido corretamente' },
      { nome: 'char', msg: 'Char esperado' },
      { nome: 'diff', msg: 'Esperava "!=" entrava inválida' }
    ];

  // ??????????????????? const TOKEN_VAZIO = 15; ????????????????????

  //const OPERADOR_MAT_MSG = "Erro ao informar o operador matemático";
  // const OPERADOR_LOG_MSG = "Erro ao informar o operador lógico";
  //const OPERADOR_IO_MSG = "Erro ao informar o operador de entrada e saída ou lógico";


  var Token = function (line, token, messageError, code) {
    this.line = line;
    this.token = token;
    this.messageError = messageError;
    this.code = code;
  }

  var text = textOriginal = textaux = req.body.textarea;
  var typeClient = req.body.typeclient;
  if (!typeClient) { typeClient = 0 }
  var validacao = {}, tokens = [], posicao = 0;
  var literal = false, literalOpen = 0;
  var number = false, numberOpen = 0, numAcumula = "";
  var wordAux = "", firstLetter = false;
  var commentBlock = false;


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

      // verifica se não é fechamento de literal
      if (literal && !(l.match(/[\"]+/g))) {
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
          firstLetter = !firstLetter;
          //console.log(wordAux);
          temp = wordAux;
          wordAux = "";
          find = false;


          /*
          //testar essa cosis aqui+
          +*/
          tokList.forEach((value) => {
            if (value.nome.match(temp)) {
              tok(temp);
              console.log('aee');
            }
          });



          /* //verifica qual palavra é
          switch (true) {
            // while - 1
            case /while+/g.test(temp):
              tok("while");
              continue;
            // void - 2
            case /void+/g.test(temp):
              tok('void');
              continue;
            // string - 3
            case /string+/g.test(temp):
              tok('string');
              continue;
            // return - 4
            case /return+/g.test(temp):
              tok('return');
              continue;
            // main - 10
            case /main+/g.test(temp):
              tok('main');
              continue;
            // inicio - 13
            case /inicio+/g.test(temp):
              tok('inicio');
              continue;
            // if - 14
            case /if+/g.test(temp):
              tok('if');
              continue;
            // for - 16
            case /for+/g.test(temp):
              tok('for');
              continue;
            // fim - 18
            case /fim+/g.test(temp):
              tok('fim');
              continue;
            // integer - 12
            case /integer+/g.test(temp):
              tok('integer');
              continue;
            // else - 19
            case /else+/g.test(temp):
              tok('else');
              continue;
            // do - 20
            case /do+/g.test(temp):
              tok('do');
              continue;
            // cout - 21
            case /cout+/g.test(temp):
              tok('cout');
              continue;
            // cin - 22
            case /cin+/g.test(temp):
              tok('cin');
              continue;
            // callfuncao - 24
            case /callfuncao+/g.test(temp):
              tok('callfuncao');
              continue;
          }*/
        }
      }

      // verifica char
      if (l.match(/[']+/g)) {
        // se o segundo após l for "'"então é pq é char
        if (nextnext.match(/[']+/g)) {
          // é char - 23
          tok('char');
          b += 2;
        } else {
          error('char');
          break;
        }
      }
      /*








            VER A PARADA DO FLOAT SE É PARA RETORNAR NUMEROFLOAT, E TEM QUE ARRUMAR ELE NÃO TÁ LENDO O QUE TÁ DEPOIS DO ".", BOA SORTE <3










      */
      // se for numero ou virgula
      if (l.match(/[0-9]+/g) || l.match(/[.]+/g)) {
        floatCycle = true;
        // se os proximos não foram parte da parada seta boolean

        numAcumula += "" + l;
        // se o proximo n for numero nem virgula tem que criar token e setar false
        if (!(next.match(/[0-9]+/g)) && (!next.match(/[.]+/g))) {
          // se tem ponto é float - 17
          if (numAcumula.match(/[.]+/g)) {
            // se não tiver +2 . no valor não tem erro
            if (!(numAcumula.match(/([.])+/g).length > 1)) {
              // sucesso
              tok('float');
            } else {
              // msg erro
              error('float');
            }
          } else {
            // senão é integer - 11
            tok('integer');
          }
          if (next.match(/[0-9]+/g) || next.match(/[.]+/g)) {
            floatCycle = false;
            numAcumula = "";
          }
          continue;
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
        console.log("achou");
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
      if (l.match(/[\"]+/g)) {
        if (prev.match(/[=]+/g)) {

        }

        if (!literal) {
          literalOpen = a;
        } else {
          // lietarl - 11
          tok("literal");
        }
        literal = !literal;
      }
    }
  } // Fim FOR
  //se não fechar o literal
  if (literal) {
    error('literal');
  }

  // fim de arquivo $ - 44
  tok('$');

  console.log(tokens);

  if (typeClient == 1) { // App JavaFx
    res.send(tokens);
  } else { // Página web
    res.render('index', { validacao: validacao, tokens: tokens, dadosForm: textOriginal });
  }

  function tok(nome) {
    tokens.push(new Token(a, nome, null, tokList.find(x => x.nome === nome).code));
  }
  function error(nome) {
    tokens.push(new Token(a, null, errList.find(x => x.nome === nome).msg, null));
  }

}
