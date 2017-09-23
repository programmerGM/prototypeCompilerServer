module.exports.index = (application, req, res) => {
  res.render('index', { validacao: {}, dadosForm: '', tokens: {} });
}

module.exports.validar = (application, req, res) => {

  const TOKEN_WHILE = 1;
  const TOKEN_VOID = 2;
  const TOKEN_STRING = 3;
  const TOKEN_RETURN = 4;
  const TOKEN_NUMERO_INTEIRO = 5;
  const TOKEN_NUMERO_FLOAT = 6;
  const TOKEN_NOME_VARIAVEL = 7;
  const TOKEN_NOME_DO_CHAR = 8;
  const TOKEN_NOME_DA_STRING = 9;
  const TOKEN_MAIN = 10;
  const TOKEN_LITERAL = 11;
  const TOKEN_INTEGER = 12;
  const TOKEN_INICIO = 13;
  const TOKEN_IF = 14;
  const TOKEN_VAZIO = 15;
  const TOKEN_FOR = 16;
  const TOKEN_FLOAT = 17;
  const TOKEN_FIM = 18;
  const TOKEN_ELSE = 19;
  const TOKEN_DO = 20;
  const TOKEN_COUT = 21;
  const TOKEN_CIN = 22;
  const TOKEN_CHAR = 23;
  const TOKEN_CALLFUNCAO = 24;
  const TOKEN_EXTRACAO = 25;
  const TOKEN_MAIOR_OU_IGUAL = 26;
  const TOKEN_MAIOR = 27;
  const TOKEN_IGUAL_IGUAL = 28;
  const TOKEN_IGUAL = 29;
  const TOKEN_MENOR_OU_IGUAL = 30;
  const TOKEN_INSERCAO = 31;
  const TOKEN_MENOR = 32;
  const TOKEN_INCREMENTO = 33;
  const TOKEN_ADICAO = 34;
  const TOKEN_FECHA_CHAVE = 35;
  const TOKEN_ABRE_CHAVE = 36;
  const TOKEN_PONTO_E_VIRGULA = 37;
  const TOKEN_DOIS_PONTOS = 38;
  const TOKEN_BARRA = 39;
  const TOKEN_VIRGULA = 40;
  const TOKEN_ASTERISCO = 41;
  const TOKEN_FECHA_PARENTESE = 42;
  const TOKEN_ABRE_PARENTESE = 43;
  const TOKEN_FIM_DE_ARQUIVO = 44;
  const TOKEN_DIFERENTE = 45;
  const TOKEN_DECREMENTO = 46;
  const TOKEN_SUBTRACAO = 47;

  const OPERADOR_MAT_MSG = "Erro ao informar o operador matemático";
  const LITERAL_CLOSE_MSG = "Erro ao fechar o literal"
  const FLOAT_ERROR_MSG = "Float inserido erradamente"
  const CHAR_MSG = "Char esperado";
  const OPERADOR_LOG_MSG = "Erro ao informar o operador lógico";
  const OPERADOR_IO_MSG = "Erro ao informar o operador de entrada e saída ou lógico";


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
  var tokList = [
    { nome: 'while', code: 1 },
    { nome: 'if', code: 14 }
    //etc
  ];


  // remove espaço em branco
  // @deprecated text = text.replace(/(\r\n|\n|\r)/gm, "");
  // text = text.replace(/\s/g, '');

  var lines = text.split('\n');

  nextLine:
  for (var a = 0; a < lines.length; a++) {
    //lines[a] = lines[a].replace(/\s/g, '');
    textaux = lines[a];
    for (var b = 0; b < textaux.length; b++) {
      var l = textaux[b];
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

      // Verifica comentário de linha, se existir vai para a próxima linha
      if (l.match(/[\/\/]+/g)) {
        continue nextLine;
      }

      // verifica se não é fechamento de literal
      if (literal && !(l.match(/[\"]+/g))) {
        continue;
      }

      // verifica alguns single character
      switch (true) {
        // } - 35
        case /[}]+/g.test(l):
          tokens.push(new Token((a + 1), l, null, TOKEN_FECHA_CHAVE));
          continue;
        // { - 36
        case /[{]+/g.test(l):
          tokens.push(new Token((a + 1), l, null, TOKEN_ABRE_CHAVE));
          continue;
        // ; - 37
        case /[;]+/g.test(l):
          tokens.push(new Token((a + 1), l, null, TOKEN_PONTO_E_VIRGULA));
          continue;
        // : - 38
        case /[:]+/g.test(l):
          tokens.push(new Token((a + 1), l, null, TOKEN_DOIS_PONTOS));
          continue;
        // , - 40
        case /[,]+/g.test(l):
          tokens.push(new Token((a + 1), l, null, TOKEN_VIRGULA));
          continue;
        // ) - 42
        case /[)]+/g.test(l):
          tokens.push(new Token((a + 1), l, null, TOKEN_ABRE_PARENTESE));
          continue;
        // , - 43
        case /[(]+/g.test(l):
          tokens.push(new Token((a + 1), l, null, TOKEN_FECHA_PARENTESE));
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
          console.log(wordAux);
          temp = wordAux;
          wordAux = "";
          find = false;


          /*
          //testar essa cosis aqui
          tokList.forEach((value) => {
            if (value.nome.match(temp)) {
              tokens.push(new Token((a + 1), value.nome, null, value.code));
              console.log('aee');
              find = true;
            }
          });
          if (!find) {
            //nome variavel
            tokens.push(new Token((a + 1), "nomevariavel", null, 0));
          }
          continue; */



          //verifica qual palavra é
          switch (true) {
            // while - 1
            case /while+/g.test(temp):
              tokens.push(new Token((a + 1), "while", null, TOKEN_WHILE));
              continue;
            // void - 2
            case /void+/g.test(temp):
              tokens.push(new Token((a + 1), "void", null, TOKEN_VOID));
              continue;
            // string - 3
            case /string+/g.test(temp):
              tokens.push(new Token((a + 1), "string", null, TOKEN_STRING));
              continue;
            // return - 4
            case /return+/g.test(temp):
              tokens.push(new Token((a + 1), "return", null, TOKEN_RETURN));
              continue;
            // main - 10
            case /main+/g.test(temp):
              tokens.push(new Token((a + 1), "main", null, TOKEN_MAIN));
              continue;
            // inicio - 13
            case /inicio+/g.test(temp):
              tokens.push(new Token((a + 1), "inicio", null, TOKEN_INICIO));
              continue;
            // if - 14
            case /if+/g.test(temp):
              tokens.push(new Token((a + 1), "if", null, TOKEN_IF));
              continue;
            // for - 16
            case /for+/g.test(temp):
              tokens.push(new Token((a + 1), "for", null, TOKEN_FOR));
              continue;
            // fim - 18
            case /fim+/g.test(temp):
              tokens.push(new Token((a + 1), "fim", null, TOKEN_FIM));
              continue;
            // integer - 12
            case /integer+/g.test(temp):
              tokens.push(new Token((a + 1), "integer", null, TOKEN_INTEGER));
              continue;
            // else - 19
            case /else+/g.test(temp):
              tokens.push(new Token((a + 1), "else", null, TOKEN_ELSE));
              continue;
            // do - 20
            case /do+/g.test(temp):
              tokens.push(new Token((a + 1), "do", null, TOKEN_DO));
              continue;
            // cout - 21
            case /cout+/g.test(temp):
              tokens.push(new Token((a + 1), "cout", null, TOKEN_COUT));
              continue;
            // cin - 22
            case /cin+/g.test(temp):
              tokens.push(new Token((a + 1), "cin", null, TOKEN_CIN));
              continue;
            // callfuncao - 24
            case /callfuncao+/g.test(temp):
              tokens.push(new Token((a + 1), "callfuncao", null, TOKEN_CALLFUNCAO));
              continue;

          }
        }
      }

      // verifica char
      if (l.match(/[']+/g)) {
        // se o segundo após l for "'"então é pq é char
        if (nextnext.match(/[']+/g)) {
          // é char - 23
          tokens.push(new Token((a + 1), "char", null, TOKEN_CHAR));
          b += 2;
        } else {
          tokens.push(new Token((a + 1), null, CHAR_MSG, null));
          break;
        }
      }

      // se for numero ou virgula
      if (l.match(/[0-9]+/g) || l.match(/[.]+/g)) {
        numAcumula += "" + l;
        // se o proximo n for numero nem virgula tem que criar token e setar false
        if (!(next.match(/[0-9]+/g)) && (!next.match(/[.]+/g))) {
          // se tem ponto é float - 17
          if (numAcumula.match(/[.]+/g)) {
            // se não tiver +2 . no valor não tem erro
            if (!(numAcumula.match(/([.])+/g).length > 1)) {
              // sucesso
              tokens.push(new Token((a + 1), "float", null, TOKEN_FLOAT));
            } else {
              // msg erro
              tokens.push(new Token((a + 1), null, FLOAT_ERROR_MSG, null));
            }
          } else {
            // senão é integer - 11
            tokens.push(new Token((a + 1), "integer", null, TOKEN_INTEGER));
          }
          numAcumula = "";
          continue;
        }

      }


      // se é operador matemático ou incrementação
      if (l.match(/[+\-*/]+/g)) {
        switch (true) {
          case /[+]+/g.test(l):
            if (next.match(/[+]+/g)) {
              // ++ 33
              tokens.push(new Token((a + 1), l + next, null, TOKEN_INCREMENTO));
              b += 1;
            } else {
              // + 34
              tokens.push(new Token((a + 1), l, null, TOKEN_ADICAO));
            }
            continue;
          case /[-]+/g.test(l):
            if (next.match(/[-]+/g)) {
              // -- 46
              tokens.push(new Token((a + 1), l + next, null, TOKEN_DECREMENTO));
              b += 1;
            } else {
              // - 47
              tokens.push(new Token((a + 1), l, null, TOKEN_SUBTRACAO));
            }
            continue;
          case /[*]+/g.test(l):
            // * - 41
            tokens.push(new Token((a + 1), l, null, TOKEN_ASTERISCO));
            continue;
          case /[/]+/g.test(l):
            // / - 39
            tokens.push(new Token((a + 1), l, null, TOKEN_BARRA));
            continue;
        }
      }

      // se é operador de comparação
      if (l.match(/[<>!=]+/g)) {
        if (l.match(/[<]+/g)) {
          // << cin -  31
          if (next.match(/[<]+/g)) {
            tokens.push(new Token((a + 1), "<<", null, TOKEN_INSERCAO));
          } else {
            // <= menor ou igual que - 30
            if (next.match(/[=]+/g)) {
              tokens.push(new Token((a + 1), "<=", null, TOKEN_MENOR_OU_IGUAL));
            }
          }

          b += 1;
        } else {

          if (l.match(/[>]+/g)) {
            // >> cin - 25
            if (next.match(/[>]+/g)) {
              tokens.push(new Token((a + 1), ">>", null, TOKEN_EXTRACAO));
              b += 1;
            } else {
              // >= maior ou igual que 26
              if (next.match(/[=]+/g)) {
                tokens.push(new Token((a + 1), ">=", null, TOKEN_MAIOR_OU_IGUAL));
                b += 1;
              }

            }
          } else {

            // != diferente - 45
            if (l.match(/[!]+/g)) {
              if (next.match(/[=]+/g)) {
                tokens.push(new Token((a + 1), "!=", null, TOKEN_DIFERENTE));
                b += 1;
              } else {
                msg = "Esperava \"!=\" entrava inválida";
                tokens.push(new Token((a + 1), null, msg, null));
                continue;
              }
            } else {
              // == igual
              if (l.match(/[=]+/g)) {
                // == - 28
                if (next.match(/[=]+/g)) {
                  tokens.push(new Token((a + 1), "==", null, TOKEN_IGUAL_IGUAL));
                  b += 1;
                  continue;
                }
                // se for = - 29
                tokens.push(new Token((a + 1), "=", null, TOKEN_IGUAL));
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
          tokens.push(new Token((a + 1), "literal", null, TOKEN_LITERAL));
        }
        literal = !literal;
      }
    }
  } // Fim FOR
  //se não fechar o literal
  if (literal) {
    tokens.push(new Token(literalOpen, null, LITERAL_CLOSE_MSG, null));
  }

  // fim de arquivo $ - 44
  tokens.push(new Token((lines.length), "$", null, TOKEN_FIM_DE_ARQUIVO));

  console.log(tokens);

  if (typeClient == 1) { // App JavaFx
    res.send(tokens);
  } else { // Página web
    res.render('index', { validacao: validacao, tokens: tokens, dadosForm: textOriginal });
  }
}