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


  var Token = function (linha, token, messageError, code) {
    this.linha = linha;
    this.token = token;
    this.messageError = messageError;
    this.code = code;
  }

  var text = textOriginal = textaux = req.body.textarea;
  var validacao = {}, tokens = [], posicao = 0;
  var literal = false, literalOpen = 0;
  var number = false, numberOpen = 0, numAcumula = "";
  // remove espaço em branco
  // @deprecated text = text.replace(/(\r\n|\n|\r)/gm, "");
  // text = text.replace(/\s/g, '');

  var lines = text.split('\n');

  for (var a = 0; a < lines.length; a++) {
    lines[a] = lines[a].replace(/\s/g, '');
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
          // << cin
          if (next.match(/[<]+/g)) {
            tok = "<<";
            tokens.push(new Token(a, tok, null, 0));
          } else {
            // <= menor ou igual que
            if (next.match(/[=]+/g)) {
              tok = "<=";
              tokens.push(new Token(a, tok, null, 0));
            }
          }

          b += 1;
        } else {

          if (l.match(/[>]+/g)) {
            // >> cin
            if (next.match(/[>]+/g)) {
              tok = ">>";
              tokens.push(new Token(a, tok, OPERADOR_IO_MSG, false));

            } else {
              // <= maior ou igual que
              if (next.match(/[=]+/g)) {
                tok = ">=";
                tokens.push(new Token(a, tok, OPERADOR_LOG_MSG, false));
              } else {
                tok = "=";
                msg = "Esperava \">=\" entrava inválida";
                tokens.push(new Token(a, tok, msg, true));
                continue;
              }
            }
            b += 1;
          } else {

            // != diferente
            if (l.match(/[!]+/g)) {
              if (next.match(/[=]+/g)) {
                tok = "!=";
                tokens.push(new Token(a, tok, OPERADOR_LOG_MSG, false));
              } else {
                tok = "!";
                msg = "Esperava \"!=\" entrava inválida";
                tokens.push(new Token(a, tok, msg, true));
                continue;
              }

              b += 1;
            } else {
              // == igual
              if (l.match(/[=]+/g)) {

                if (next.match(/[=]+/g)) {
                  tok = "==";
                  tokens.push(new Token(a, tok, null, 0));
                } else {
                  msg = "Esperava \"==\" entrava inválida";
                  tokens.push(new Token(a, null, msg, null));
                  continue;
                }

                b += 1;

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

  console.log(tokens);

  res.render('index', { validacao: validacao, tokens: tokens, dadosForm: textOriginal });
}