module.exports.index = (application, req, res) => {
  res.render('index', {
    validacao: {},
    dadosForm: '',
    tokens: {}
  });
}

module.exports.validar = (application, req, res) => {
  var tabelaParse = [{
        p1: 48,
        p2: 2,
        valor: 1
      },
      {
        p1: 49,
        p2: 2,
        valor: 3
      },
      {
        p1: 49,
        p2: 3,
        valor: 3
      },
      {
        p1: 49,
        p2: 7,
        valor: 2
      },
      {
        p1: 49,
        p2: 12,
        valor: 3
      },
      {
        p1: 49,
        p2: 13,
        valor: 3
      },
      {
        p1: 49,
        p2: 17,
        valor: 3
      },
      {
        p1: 49,
        p2: 23,
        valor: 3
      },
      {
        p1: 49,
        p2: 44,
        valor: 3
      },
      {
        p1: 50,
        p2: 2,
        valor: 13
      },
      {
        p1: 50,
        p2: 3,
        valor: 13
      },
      {
        p1: 50,
        p2: 12,
        valor: 13
      },
      {
        p1: 50,
        p2: 13,
        valor: 19
      },
      {
        p1: 50,
        p2: 17,
        valor: 13
      },
      {
        p1: 50,
        p2: 23,
        valor: 13
      },
      {
        p1: 51,
        p2: 13,
        valor: 31
      },
      {
        p1: 52,
        p2: 38,
        valor: 4
      },
      {
        p1: 52,
        p2: 40,
        valor: 5
      },
      {
        p1: 53,
        p2: 3,
        valor: 8
      },
      {
        p1: 53,
        p2: 12,
        valor: 6
      },
      {
        p1: 53,
        p2: 17,
        valor: 7
      },
      {
        p1: 53,
        p2: 23,
        valor: 9
      },
      {
        p1: 54,
        p2: 2,
        valor: 10
      },
      {
        p1: 54,
        p2: 3,
        valor: 10
      },
      {
        p1: 54,
        p2: 7,
        valor: 11
      },
      {
        p1: 54,
        p2: 12,
        valor: 10
      },
      {
        p1: 54,
        p2: 13,
        valor: 10
      },
      {
        p1: 54,
        p2: 17,
        valor: 10
      },
      {
        p1: 54,
        p2: 23,
        valor: 10
      },
      {
        p1: 54,
        p2: 44,
        valor: 10
      },
      {
        p1: 55,
        p2: 7,
        valor: 12
      },
      {
        p1: 56,
        p2: 2,
        valor: 15
      },
      {
        p1: 56,
        p2: 3,
        valor: 18
      },
      {
        p1: 56,
        p2: 12,
        valor: 14
      },
      {
        p1: 56,
        p2: 17,
        valor: 17
      },
      {
        p1: 56,
        p2: 23,
        valor: 16
      },
      {
        p1: 57,
        p2: 36,
        valor: 26
      },
      {
        p1: 57,
        p2: 43,
        valor: 27
      },
      {
        p1: 58,
        p2: 5,
        valor: 20
      },
      {
        p1: 58,
        p2: 6,
        valor: 21
      },
      {
        p1: 58,
        p2: 7,
        valor: 22
      },
      {
        p1: 58,
        p2: 8,
        valor: 23
      },
      {
        p1: 58,
        p2: 9,
        valor: 24
      },
      {
        p1: 58,
        p2: 42,
        valor: 25
      },
      {
        p1: 59,
        p2: 3,
        valor: 28
      },
      {
        p1: 59,
        p2: 12,
        valor: 28
      },
      {
        p1: 59,
        p2: 17,
        valor: 28
      },
      {
        p1: 59,
        p2: 23,
        valor: 28
      },
      {
        p1: 60,
        p2: 37,
        valor: 29
      },
      {
        p1: 60,
        p2: 42,
        valor: 30
      },
      {
        p1: 61,
        p2: 1,
        valor: 52
      },
      {
        p1: 61,
        p2: 5,
        valor: 37
      },
      {
        p1: 61,
        p2: 6,
        valor: 37
      },
      {
        p1: 61,
        p2: 7,
        valor: 37
      },
      {
        p1: 61,
        p2: 8,
        valor: 37
      },
      {
        p1: 61,
        p2: 9,
        valor: 37
      },
      {
        p1: 61,
        p2: 14,
        valor: 49
      },
      {
        p1: 61,
        p2: 16,
        valor: 64
      },
      {
        p1: 61,
        p2: 20,
        valor: 67
      },
      {
        p1: 61,
        p2: 21,
        valor: 69
      },
      {
        p1: 61,
        p2: 22,
        valor: 68
      },
      {
        p1: 61,
        p2: 24,
        valor: 39
      },
      {
        p1: 61,
        p2: 37,
        valor: 38
      },
      {
        p1: 61,
        p2: 43,
        valor: 37
      },
      {
        p1: 62,
        p2: 18,
        valor: 33
      },
      {
        p1: 62,
        p2: 35,
        valor: 33
      },
      {
        p1: 63,
        p2: 5,
        valor: 75
      },
      {
        p1: 63,
        p2: 6,
        valor: 75
      },
      {
        p1: 63,
        p2: 7,
        valor: 75
      },
      {
        p1: 63,
        p2: 8,
        valor: 75
      },
      {
        p1: 63,
        p2: 9,
        valor: 75
      },
      {
        p1: 63,
        p2: 24,
        valor: 76
      },
      {
        p1: 63,
        p2: 43,
        valor: 75
      },
      {
        p1: 64,
        p2: 29,
        valor: 40
      },
      {
        p1: 64,
        p2: 37,
        valor: 40
      },
      {
        p1: 64,
        p2: 42,
        valor: 40
      },
      {
        p1: 64,
        p2: 43,
        valor: 41
      },
      {
        p1: 65,
        p2: 5,
        valor: 44
      },
      {
        p1: 65,
        p2: 6,
        valor: 46
      },
      {
        p1: 65,
        p2: 7,
        valor: 48
      },
      {
        p1: 65,
        p2: 8,
        valor: 47
      },
      {
        p1: 65,
        p2: 9,
        valor: 45
      },
      {
        p1: 66,
        p2: 40,
        valor: 43
      },
      {
        p1: 66,
        p2: 42,
        valor: 42
      },
      {
        p1: 67,
        p2: 26,
        valor: 56
      },
      {
        p1: 67,
        p2: 27,
        valor: 55
      },
      {
        p1: 67,
        p2: 28,
        valor: 53
      },
      {
        p1: 67,
        p2: 30,
        valor: 58
      },
      {
        p1: 67,
        p2: 32,
        valor: 57
      },
      {
        p1: 67,
        p2: 45,
        valor: 54
      },
      {
        p1: 68,
        p2: 19,
        valor: 50
      },
      {
        p1: 68,
        p2: 37,
        valor: 51
      },
      {
        p1: 69,
        p2: 5,
        valor: 59
      },
      {
        p1: 69,
        p2: 6,
        valor: 60
      },
      {
        p1: 69,
        p2: 7,
        valor: 63
      },
      {
        p1: 69,
        p2: 8,
        valor: 62
      },
      {
        p1: 69,
        p2: 9,
        valor: 61
      },
      {
        p1: 70,
        p2: 33,
        valor: 65
      },
      {
        p1: 70,
        p2: 46,
        valor: 66
      },
      {
        p1: 71,
        p2: 31,
        valor: 72
      },
      {
        p1: 71,
        p2: 37,
        valor: 70
      },
      {
        p1: 72,
        p2: 31,
        valor: 73
      },
      {
        p1: 72,
        p2: 37,
        valor: 73
      },
      {
        p1: 72,
        p2: 40,
        valor: 74
      },
      {
        p1: 73,
        p2: 5,
        valor: 80
      },
      {
        p1: 73,
        p2: 6,
        valor: 80
      },
      {
        p1: 73,
        p2: 7,
        valor: 80
      },
      {
        p1: 73,
        p2: 8,
        valor: 80
      },
      {
        p1: 73,
        p2: 9,
        valor: 80
      },
      {
        p1: 73,
        p2: 43,
        valor: 80
      },
      {
        p1: 74,
        p2: 29,
        valor: 79
      },
      {
        p1: 74,
        p2: 34,
        valor: 77
      },
      {
        p1: 74,
        p2: 37,
        valor: 79
      },
      {
        p1: 74,
        p2: 42,
        valor: 79
      },
      {
        p1: 74,
        p2: 47,
        valor: 78
      },
      {
        p1: 75,
        p2: 5,
        valor: 84
      },
      {
        p1: 75,
        p2: 6,
        valor: 85
      },
      {
        p1: 75,
        p2: 7,
        valor: 86
      },
      {
        p1: 75,
        p2: 8,
        valor: 88
      },
      {
        p1: 75,
        p2: 9,
        valor: 87
      },
      {
        p1: 75,
        p2: 43,
        valor: 89
      },
      {
        p1: 76,
        p2: 29,
        valor: 81
      },
      {
        p1: 76,
        p2: 34,
        valor: 81
      },
      {
        p1: 76,
        p2: 37,
        valor: 81
      },
      {
        p1: 76,
        p2: 39,
        valor: 83
      },
      {
        p1: 76,
        p2: 41,
        valor: 82
      },
      {
        p1: 76,
        p2: 42,
        valor: 81
      },
      {
        p1: 76,
        p2: 47,
        valor: 81
      }
    ],
    producoes = [{
      code: 48,
      sentence: [2, 10, 36, 49, 50, 51, 35]
    }, {
      code: 49,
      sentence: [7, 52, 38, 53, 37, 54]
    }, {
      code: 49,
      sentence: [15]
    }, {
      code: 52,
      sentence: [15]
    }, {
      code: 52,
      sentence: [40, 7, 52]
    }, {
      code: 53,
      sentence: [12]
    }, {
      code: 53,
      sentence: [17]
    }, {
      code: 53,
      sentence: [3]
    }, {
      code: 53,
      sentence: [23]
    }, {
      code: 54,
      sentence: [15]
    }, {
      code: 54,
      sentence: [55, 38, 53, 37, 54]
    }, {
      code: 55,
      sentence: [7, 52]
    }, {
      code: 50,
      sentence: [56, 7, 57, 36, 49, 50, 51, 4, 43, 58, 42, 35, 50]
    }, {
      code: 56,
      sentence: [12]
    }, {
      code: 56,
      sentence: [2]
    }, {
      code: 56,
      sentence: [23]
    }, {
      code: 56,
      sentence: [17]
    }, {
      code: 56,
      sentence: [3]
    }, {
      code: 50,
      sentence: [15]
    }, {
      code: 58,
      sentence: [5]
    }, {
      code: 58,
      sentence: [6]
    }, {
      code: 58,
      sentence: [7]
    }, {
      code: 58,
      sentence: [8]
    }, {
      code: 58,
      sentence: [9]
    }, {
      code: 58,
      sentence: [15]
    }, {
      code: 57,
      sentence: [15]
    }, {
      code: 57,
      sentence: [43, 59, 42]
    }, {
      code: 59,
      sentence: [53, 60]
    }, {
      code: 60,
      sentence: [37, 53, 60]
    }, {
      code: 60,
      sentence: [15]
    }, {
      code: 51,
      sentence: [13, 61, 37, 62, 18]
    }, {
      code: 62,
      sentence: [15]
    }, {
      code: 62,
      sentence: [61, 37, 62]
    }, {
      code: 61,
      sentence: [7, 29, 63]
    }, {
      code: 61,
      sentence: [9, 29, 63]
    }, {
      code: 61,
      sentence: [8, 29, 63]
    }, {
      code: 61,
      sentence: [63, 29, 63]
    }, {
      code: 61,
      sentence: [15, 7]
    }, {
      code: 61,
      sentence: [24, 7, 64]
    }, {
      code: 64,
      sentence: [15]
    }, {
      code: 64,
      sentence: [43, 65, 66, 42]
    }, {
      code: 66,
      sentence: [15]
    }, {
      code: 66,
      sentence: [40, 65, 66]
    }, {
      code: 65,
      sentence: [5]
    }, {
      code: 65,
      sentence: [9]
    }, {
      code: 65,
      sentence: [6]
    }, {
      code: 65,
      sentence: [8]
    }, {
      code: 65,
      sentence: [7]
    }, {
      code: 61,
      sentence: [14, 43, 7, 67, 36, 61, 37, 62, 35, 68]
    }, {
      code: 68,
      sentence: [19, 36, 61, 37, 62, 35]
    }, {
      code: 68,
      sentence: [15]
    }, {
      code: 61,
      sentence: [1, 43, 7, 67, 42, 36, 61, 37, 62, 35]
    }, {
      code: 67,
      sentence: [28, 69]
    }, {
      code: 67,
      sentence: [45, 69]
    }, {
      code: 67,
      sentence: [27, 69]
    }, {
      code: 67,
      sentence: [26, 69]
    }, {
      code: 67,
      sentence: [32, 69]
    }, {
      code: 67,
      sentence: [30, 69]
    }, {
      code: 69,
      sentence: [5]
    }, {
      code: 69,
      sentence: [6]
    }, {
      code: 69,
      sentence: [9]
    }, {
      code: 69,
      sentence: [8]
    }, {
      code: 69,
      sentence: [7]
    }, {
      code: 61,
      sentence: [16, 43, 7, 29, 69, 37, 7, 67, 37, 70, 42, 36, 61, 37, 62, 35]
    }, {
      code: 70,
      sentence: [33, 5]
    }, {
      code: 70,
      sentence: [46, 5]
    }, {
      code: 61,
      sentence: [20, 36, 61, 37, 62, 35, 1, 43, 7, 67, 42]
    }, {
      code: 61,
      sentence: [22, 25, 7]
    }, {
      code: 61,
      sentence: [21, 31, 11, 71]
    }, {
      code: 71,
      sentence: [15]
    }, {
      code: 71,
      sentence: [31, 7, 72, 71]
    }, {
      code: 71,
      sentence: [31, 11, 71]
    }, {
      code: 72,
      sentence: [15]
    }, {
      code: 72,
      sentence: [40, 7, 72]
    }, {
      code: 63,
      sentence: [73, 74]
    }, {
      code: 63,
      sentence: [24, 7, 64]
    }, {
      code: 74,
      sentence: [34, 73, 74]
    }, {
      code: 74,
      sentence: [47, 73, 74]
    }, {
      code: 74,
      sentence: [15]
    }, {
      code: 73,
      sentence: [75, 7, 6, 8]
    }, {
      code: 76,
      sentence: [15]
    }, {
      code: 76,
      sentence: [41, 75, 76]
    }, {
      code: 76,
      sentence: [39, 75, 76]
    }, {
      code: 75,
      sentence: [5]
    }, {
      code: 75,
      sentence: [6]
    }, {
      code: 75,
      sentence: [7]
    }, {
      code: 75,
      sentence: [9]
    }, {
      code: 75,
      sentence: [8]
    }, {
      code: 75,
      sentence: [43, 63, 42]
    }],

    //Lista de não terminais
    nterm = [{
        code: 48,
        nterm: ' BLOCO'
      },
      {
        code: 49,
        nterm: 'DCLVAR'
      },
      {
        code: 50,
        nterm: 'DCLFUNC'
      },
      {
        code: 51,
        nterm: 'CORPO'
      },
      {
        code: 52,
        nterm: 'REPIDENT'
      },
      {
        code: 53,
        nterm: 'TIPO'
      },
      {
        code: 54,
        nterm: 'LDVAR'
      },
      {
        code: 55,
        nterm: 'LID'
      },
      {
        code: 56,
        nterm: 'TIPO_RETORNO'
      },
      {
        code: 57,
        nterm: 'DEFPAR'
      },
      {
        code: 58,
        nterm: 'VALORRETORNO'
      },
      {
        code: 59,
        nterm: 'PARAM'
      },
      {
        code: 60,
        nterm: 'LPARAM'
      },
      {
        code: 61,
        nterm: 'COMANDO'
      },
      {
        code: 62,
        nterm: 'REPCOMANDO'
      },
      {
        code: 63,
        nterm: 'EXPRESSAO'
      },
      {
        code: 64,
        nterm: 'PARAMETROS'
      },
      {
        code: 65,
        nterm: 'TPARAM'
      },
      {
        code: 66,
        nterm: 'REPPAR'
      },
      {
        code: 67,
        nterm: 'COMPARACAO'
      },
      {
        code: 68,
        nterm: 'ELSEPARTE'
      },
      {
        code: 69,
        nterm: 'CONTCOMPARACAO'
      },
      {
        code: 70,
        nterm: 'INCREMENTO'
      },
      {
        code: 71,
        nterm: 'SEQCOUT'
      },
      {
        code: 72,
        nterm: 'SEQUENCIA'
      },
      {
        code: 73,
        nterm: 'TERMO'
      },
      {
        code: 74,
        nterm: 'REPEXP'
      },
      {
        code: 75,
        nterm: 'FATOR'
      },
      {
        code: 76,
        nterm: 'REPTERMO'
      },
      {
        code: 48,
        nterm: ' BLOCO'
      },
      {
        code: 49,
        nterm: 'DCLVAR'
      },
      {
        code: 50,
        nterm: 'DCLFUNC'
      },
      {
        code: 51,
        nterm: 'CORPO'
      },
      {
        code: 52,
        nterm: 'REPIDENT'
      },
      {
        code: 53,
        nterm: 'TIPO'
      },
      {
        code: 54,
        nterm: 'LDVAR'
      },
      {
        code: 55,
        nterm: 'LID'
      },
      {
        code: 56,
        nterm: 'TIPO_RETORNO'
      },
      {
        code: 57,
        nterm: 'DEFPAR'
      },
      {
        code: 58,
        nterm: 'VALORRETORNO'
      },
      {
        code: 59,
        nterm: 'PARAM'
      },
      {
        code: 60,
        nterm: 'LPARAM'
      },
      {
        code: 61,
        nterm: 'COMANDO'
      },
      {
        code: 62,
        nterm: 'REPCOMANDO'
      },
      {
        code: 63,
        nterm: 'EXPRESSAO'
      },
      {
        code: 64,
        nterm: 'PARAMETROS'
      },
      {
        code: 65,
        nterm: 'TPARAM'
      },
      {
        code: 66,
        nterm: 'REPPAR'
      },
      {
        code: 67,
        nterm: 'COMPARACAO'
      },
      {
        code: 68,
        nterm: 'ELSEPARTE'
      },
      {
        code: 69,
        nterm: 'CONTCOMPARACAO'
      },
      {
        code: 70,
        nterm: 'INCREMENTO'
      },
      {
        code: 71,
        nterm: 'SEQCOUT'
      },
      {
        code: 72,
        nterm: 'SEQUENCIA'
      },
      {
        code: 73,
        nterm: 'TERMO'
      },
      {
        code: 74,
        nterm: 'REPEXP'
      },
      {
        code: 75,
        nterm: 'FATOR'
      },
      {
        code: 76,
        nterm: 'REPTERMO'
      }
    ],
    // Lista de tokens
    tokList = [{
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
    ];

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
  if (!typeClient) {
    typeClient = 0
  }
  var validacao = {},
    tokens = [],
    posicao = 0;
  var literal = false,
    literalOpen = 0;
  var number = false,
    numberOpen = 0,
    numAcumula = "";
  var wordAux = "",
    firstLetter = false;


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
        retornar();
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
              tok('nomefuncao');
              continue;
            }
            if (next.match(/[{]+/g) || nextnext.match(/[{]+/g)) {
              tok('nomefuncao');
              continue;
            }
            //v verifica o anterior se é ( e anterior a ele se é return
            if (tokens[tokens.length - 1].code == tokList.find(x => x.nome === "(").code &&
              tokens[tokens.length - 2].code == tokList.find(x => x.nome === "return").code) {
              tok('string');
              continue;
            }

            if (temp.length > 512) {
              error('identifyinvalid');
              continue;
            }
            tok('nomevariavel');
            continue;
          }
        }
      }

      // verifica char ou string
      if (l.match(/[']+/g)) {
        // se o segundo após l for "'"então é pq é char
        if (nextnext.match(/[']+/g)) {
          // é char - 23
          tok('nomecht');
          b += 2;
        } else {
          /* FAZER A STRING AQUI, tem que ficar assim -> 'Isso é uma string' */
          error('stringchar');
          break;
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
                  tok('numeroflutuante');
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
                tok('numerointeiro');
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
      if (l.match(/[\"]+/g)) {
        if (!literal) {
          literalOpen = a;
        } else {
          //se tem igual é pq é variável recebendo string
          if (tokens[tokens.length - 1].code == tokList.find(x => x.nome === "=").code) {
            tok("nomedastring");
          } else {
            // literal - 11
            tok("literal");
          }
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

  retornar();

  function retornar() {
    console.log(tokens);

    if (typeClient == 1) { // App JavaFx
      res.send(tokens);
    } else { // Página web
      res.render('index', {
        validacao: validacao,
        tokens: tokens,
        dadosForm: textOriginal
      });
    }

  }

  function tok(nome) {
    console.log(nome);
    tokens.push(new Token(a, nome, null, tokList.find(x => x.nome === nome).code));
  }

  function error(nome) {
    tokens.push(new Token(a, null, errList.find(x => x.nome === nome).msg, null));
  }
}