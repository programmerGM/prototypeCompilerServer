module.exports.index = (application, req, res) => {
  res.render('index', { validacao: {}, dadosForm: '', tokens: {} });
}

module.exports.validar = (application, req, res) => {

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
  var validacao = {}, tokens = [], posicao = 0;
  var literal = false, literalOpen = 0;
  var number = false, numberOpen = 0, numAcumula = "";
  var wordAux = "", firstLetter = false;
  //var hasNext = false, hasNextNext=false;
  // remove espaço em branco
  // @deprecated text = text.replace(/(\r\n|\n|\r)/gm, "");
  // text = text.replace(/\s/g, '');

  var lines = text.split('\n');

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

      // verifica se não é fechamento de literal
      if (literal && !(l.match(/[\"]+/g))) {
        continue;
      }

      // verifica alguns single character
      switch (true) {
        // } - 35
        case /[}]+/g.test(l):
          tokens.push(new Token(a, l, null, 35));
          continue;
        // { - 36
        case /[{]+/g.test(l):
          tokens.push(new Token(a, l, null, 36));
          continue;
        // ; - 37
        case /[;]+/g.test(l):
          tokens.push(new Token(a, l, null, 37));
          continue;
        // : - 38
        case /[:]+/g.test(l):
          tokens.push(new Token(a, l, null, 38));
          continue;
        // , - 40
        case /[,]+/g.test(l):
          tokens.push(new Token(a, l, null, 40));
          continue;
        // ) - 42
        case /[)]+/g.test(l):
          tokens.push(new Token(a, l, null, 42));
          continue;
        // , - 43
        case /[(]+/g.test(l):
          tokens.push(new Token(a, l, null, 43));
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

          //verifica qual palavra é
          switch (true) {
            // while - 1
            case /while+/g.test(temp):
              tokens.push(new Token(a, "while", null, 1));
              continue;
            // void - 2
            case /void+/g.test(temp):
              tokens.push(new Token(a, "void", null, 2));
              continue;
            // string - 3
            case /string+/g.test(temp):
              tokens.push(new Token(a, "string", null, 3));
              continue;
            // return - 4
            case /return+/g.test(temp):
              tokens.push(new Token(a, "return", null, 4));
              continue;
            // main - 10
            case /main+/g.test(temp):
              tokens.push(new Token(a, "while", null, 10));
              continue;
            // inicio - 13
            case /inicio+/g.test(temp):
              tokens.push(new Token(a, "inicio", null, 13));
              continue;
            // if - 14
            case /if+/g.test(temp):
              tokens.push(new Token(a, "if", null, 14));
              continue;
            // for - 16
            case /for+/g.test(temp):
              tokens.push(new Token(a, "for", null, 16));
              continue;
            // fim - 18
            case /fim+/g.test(temp):
              tokens.push(new Token(a, "fim", null, 18));
              continue;
            // integer - 12
            case /integer+/g.test(temp):
              tokens.push(new Token(a, "integer", null, 12));
              continue;
            // else - 19
            case /else+/g.test(temp):
              tokens.push(new Token(a, "else", null, 19));
              continue;
            // do - 20
            case /do+/g.test(temp):
              tokens.push(new Token(a, "do", null, 20));
              continue;
            // cout - 21
            case /cout+/g.test(temp):
              tokens.push(new Token(a, "cout", null, 21));
              continue;
            // cin - 22
            case /cin+/g.test(temp):
              tokens.push(new Token(a, "cin", null, 22));
              continue;
            // callfuncao - 24
            case /callfuncao+/g.test(temp):
              tokens.push(new Token(a, "callfuncao", null, 24));
              continue;

          }




        }
      }




      // verifica char
      if (l.match(/[']+/g)) {
        // se o segundo após l for "'"então é pq é char
        if (nextnext.match(/[']+/g)) {
          // é char - 23
          tokens.push(new Token(a, "char", null, 23));
          b += 2;
        } else {
          tokens.push(new Token(a, null, CHAR_MSG, null));
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
              tokens.push(new Token(a, "float", null, 17));
            } else {
              // msg erro
              tokens.push(new Token(a, null, FLOAT_ERROR_MSG, null));
            }
          } else {
            // senão é integer - 11
            tokens.push(new Token(a, "integer", null, 12));
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
              tokens.push(new Token(a, l + next, null, 33));
              b += 1;
            } else {
              // + 34
              tokens.push(new Token(a, l, null, 34));
            }
            continue;
          case /[-]+/g.test(l):
            if (next.match(/[-]+/g)) {
              // -- 46
              tokens.push(new Token(a, l + next, null, 46));
              b += 1;
            } else {
              // - 47
              tokens.push(new Token(a, l, null, 47));
            }
            continue;
          case /[*]+/g.test(l):
            // * - 41
            tokens.push(new Token(a, l, null, 41));
            continue;
          case /[/]+/g.test(l):
            // / - 39
            tokens.push(new Token(a, l, null, 39));
            continue;
        }
      }

      // se é operador de comparação
      if (l.match(/[<>!=]+/g)) {
        if (l.match(/[<]+/g)) {
          // << cin -  31
          if (next.match(/[<]+/g)) {
            tokens.push(new Token(a, "<<", null, 31));
          } else {
            // <= menor ou igual que - 30
            if (next.match(/[=]+/g)) {
              tokens.push(new Token(a, "<=", null, 30));
            }
          }

          b += 1;
        } else {

          if (l.match(/[>]+/g)) {
            // >> cin - 25
            if (next.match(/[>]+/g)) {
              tokens.push(new Token(a, ">>", null, 25));
              b += 1;
            } else {
              // >= maior ou igual que 26
              if (next.match(/[=]+/g)) {
                tokens.push(new Token(a, ">=", null, 26));
                b += 1;
              }

            }
          } else {

            // != diferente - 45
            if (l.match(/[!]+/g)) {
              if (next.match(/[=]+/g)) {
                tokens.push(new Token(a, "!=", null, 45));
                b += 1;
              } else {
                msg = "Esperava \"!=\" entrava inválida";
                tokens.push(new Token(a, null, msg, null));
                continue;
              }
            } else {
              // == igual
              if (l.match(/[=]+/g)) {
                // == - 28
                if (next.match(/[=]+/g)) {
                  tokens.push(new Token(a, "==", null, 28));
                  b += 1;
                  continue;
                }
                // se for = - 29
                tokens.push(new Token(a, "=", null, 29));
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
          tokens.push(new Token(a, "literal", null, 1));
        }
        literal = !literal;
      }
    }
  }
  //se não fechar o literal
  if (literal) {
    tokens.push(new Token(literalOpen, null, LITERAL_CLOSE_MSG, null));
  }

  // fim de arquivo $ - 44
  tokens.push(new Token(a, "$", null, 44));

  console.log(tokens);

  res.send(tokens);
  // res.render('index', { validacao: validacao, tokens: tokens, dadosForm: textOriginal });
}