function sintaticoExecuta(tokens) {

  console.log('---------------INICIOU O SINTÁTICO---------------')

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
    valor: 32 //atualizado aqui
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
      code: 1,
      sentence: [2, 10, 36, 49, 50, 51, 35]
    }, {
      code: 2,
      sentence: [7, 52, 38, 53, 37, 54]
    }, {
      code: 3,
      sentence: [15]
    }, {
      code: 4,
      sentence: [15]
    }, {
      code: 5,
      sentence: [40, 7, 52]
    }, {
      code: 6,
      sentence: [12]
    }, {
      code: 7,
      sentence: [17]
    }, {
      code: 8,
      sentence: [3]
    }, {
      code: 9,
      sentence: [23]
    }, {
      code: 10,
      sentence: [15]
    }, {
      code: 11,
      sentence: [55, 38, 53, 37, 54]
    }, {
      code: 12,
      sentence: [7, 52]
    }, {
      code: 13,
      sentence: [56, 7, 57, 36, 49, 50, 51, 4, 43, 58, 42, 35, 50]
    }, {
      code: 14,
      sentence: [12]
    }, {
      code: 15,
      sentence: [2]
    }, {
      code: 16,
      sentence: [23]
    }, {
      code: 17,
      sentence: [17]
    }, {
      code: 18,
      sentence: [3]
    }, {
      code: 19,
      sentence: [15]
    }, {
      code: 20,
      sentence: [5]
    }, {
      code: 21,
      sentence: [6]
    }, {
      code: 22,
      sentence: [7]
    }, {
      code: 23,
      sentence: [8]
    }, {
      code: 24,
      sentence: [9]
    }, {
      code: 25,
      sentence: [15]
    }, {
      code: 26,
      sentence: [15]
    }, {
      code: 27,
      sentence: [43, 59, 42]
    }, {
      code: 28,
      sentence: [53, 60]
    }, {
      code: 29,
      sentence: [37, 53, 60]
    }, {
      code: 30,
      sentence: [15]
    }, {
      code: 31,
      sentence: [13, 61, 37, 62, 18]
    }, {
      code: 32,
      sentence: [15]
    }, {
      code: 33,
      sentence: [61, 37, 62]
    }, {
      code: 34,
      sentence: [7, 29, 63]
    }, {
      code: 35,
      sentence: [9, 29, 63]
    }, {
      code: 36,
      sentence: [8, 29, 63]
    }, {
      code: 37,
      sentence: [63, 29, 63]
    }, {
      code: 38,
      sentence: [15, 7]
    }, {
      code: 39,
      sentence: [24, 7, 64]
    }, {
      code: 40,
      sentence: [15]
    }, {
      code: 41,
      sentence: [43, 65, 66, 42]
    }, {
      code: 42,
      sentence: [15]
    }, {
      code: 43,
      sentence: [40, 65, 66]
    }, {
      code: 44,
      sentence: [5]
    }, {
      code: 45,
      sentence: [9]
    }, {
      code: 46,
      sentence: [6]
    }, {
      code: 47,
      sentence: [8]
    }, {
      code: 48,
      sentence: [7]
    }, {
      code: 49,
      sentence: [14, 43, 7, 67, 42, 36, 61, 37, 62, 35, 68] // atualizado aqui
    }, {
      code: 50,
      sentence: [19, 36, 61, 37, 62, 35]
    }, {
      code: 51,
      sentence: [15]
    }, {
      code: 52,
      sentence: [1, 43, 7, 67, 42, 36, 61, 37, 62, 35]
    }, {
      code: 53,
      sentence: [28, 69]
    }, {
      code: 54,
      sentence: [45, 69]
    }, {
      code: 55,
      sentence: [27, 69]
    }, {
      code: 56,
      sentence: [26, 69]
    }, {
      code: 57,
      sentence: [32, 69]
    }, {
      code: 58,
      sentence: [30, 69]
    }, {
      code: 59,
      sentence: [5]
    }, {
      code: 60,
      sentence: [6]
    }, {
      code: 61,
      sentence: [9]
    }, {
      code: 62,
      sentence: [8]
    }, {
      code: 63,
      sentence: [7]
    }, {
      code: 64,
      sentence: [16, 43, 7, 29, 69, 37, 7, 67, 37, 70, 42, 36, 61, 37, 62, 35]
    }, {
      code: 63,
      sentence: [33, 5]
    }, {
      code: 64,
      sentence: [46, 5]
    }, {
      code: 65,
      sentence: [20, 36, 61, 37, 62, 35, 1, 43, 7, 67, 42]
    }, {
      code: 66,
      sentence: [22, 25, 7]
    }, {
      code: 67,
      sentence: [21, 31, 11, 71]
    }, {
      code: 68,
      sentence: [15]
    }, {
      code: 69,
      sentence: [31, 7, 72, 71]
    }, {
      code: 70,
      sentence: [31, 11, 71]
    }, {
      code: 71,
      sentence: [15]
    }, {
      code: 72,
      sentence: [40, 7, 72]
    }, {
      code: 73,
      sentence: [73, 74]
    }, {
      code: 74,
      sentence: [24, 7, 64]
    }, {
      code: 75,
      sentence: [34, 73, 74]
    }, {
      code: 76,
      sentence: [47, 73, 74]
    }, {
      code: 77,
      sentence: [15]
    }, {
      code: 78,
      sentence: [75, 7, 6, 8]
    }, {
      code: 79,
      sentence: [15]
    }, {
      code: 80,
      sentence: [41, 75, 76]
    }, {
      code: 81,
      sentence: [39, 75, 76]
    }, {
      code: 82,
      sentence: [5]
    }, {
      code: 83,
      sentence: [6]
    }, {
      code: 84,
      sentence: [7]
    }, {
      code: 85,
      sentence: [9]
    }, {
      code: 86,
      sentence: [8]
    }, {
      code: 87,
      sentence: [43, 63, 42]
    }],
    // lista de terminais
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
    ];

  var codigos = []

  for (var a = 0; a < tokens.length; a++) {
    codigos.push(tokens[a].code)
    console.log(codigos[a])
  }

  var x, a
  var stack = []
  var repeat = true

  stack.push(44) // final de arquivo
  stack.push(tabelaParse[0].p1) // 48 - primeiro elemento

  console.log('Códigos[sintáxico]: ' + codigos)
  console.log(stack)

  while (stack != 44 && !stack) {
    x = stack[stack.length - 1]
    a = codigos[0]

    do {
      if (!!x && x == 15) { // se for null, NaN ou undefined, então é falso - antes estava if(top != null)
        stack.pop() // remove o último elemento da pilha (último adicionado)
        x = stack[stack.length - 1] // recebe o topo da pilha (último elemento)
      } else {
        if (isTerminal(x)) { // se for terminal
          if (x === a) { // termina
            stack.pop();
            x = stack[stack.length - 1] // recebe o topo da pilha (último elemento)
          }
          //senão erro
          console.log('errow');
          return; // retorna a função e não executa mais nada
        } else {
          // se não for terminal
          var regra = findTabela(x, a);
          if (!!regra) {
            stack.pop(); // remove elemento do topo da stack
            // coloque o conteudo na stack
            producoes.forEach((value) => {
              if(value.code == regra){
                for (var i = value.sentence.length - 1; i >= 0; i--){
                  stack.push(value.sentence[i])
                }
              }
            })
            x = stack[stack.length - 1] // recebe o topo da pilha (último elemento)
          } else {
            // erro encerra programa
            console.log('errow');
            return; // retorna a função e não executa mais nada
          }
        }
      } // FIM ELSE
    } while (repeat) // 
  } // FIM while(!stack)

  function findTabela(x, a) {
    tabelaParse.forEach((value) => {
      if (value.p1 === x && value.p2 === a) {
        return value.valor;
      }
    });
    return null;
  }

  function isTerminal(element) {
    tokList.forEach((value) => {
      if (value.code === element) {
        return true;
      }
    });
    return false;
  }

}

module.exports.sintatico = function (application, req, res, tokens) {
  //Utilizado pela Web - 4 parametros
  sintaticoExecuta(tokens)
}

module.exports.sintaticoJava = function (application, req, res) {
  //Utilizado na requisição do Java - 3 parametros

}