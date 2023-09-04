const boardArray = [
  { position: 1, input: '', content: '3', answer: '3'},
  { position: 2, input: '', content: '', answer: '7'},
  { position: 3, input: '', content: '', answer: '4'},
  { position: 4, input: '', content: '', answer: '6'},
  { position: 5, input: '', content: '', answer: '5'},
  { position: 6, input: '', content: '', answer: '1'},
  { position: 7, input: '', content: '9', answer: '9'},
  { position: 8, input: '', content: '8', answer: '8'},
  { position: 9, input: '', content: '', answer: '2'},
  { position: 10, input: '', content: '', answer: '9'},
  { position: 11, input: '', content: '', answer: '6'},
  { position: 12, input: '', content: '2', answer: '2'},
  { position: 13, input: '', content: '7', answer: '7'},
  { position: 14, input:'', content: '', answer: '3'},
  { position: 15, input: '', content: '', answer: '8'}, 
  { position: 16, input: '', content: '4', answer: '4'},
  { position: 17, input: '', content: '5', answer: '5'},
  { position: 18, input: '', content: '', answer: '1'},
  { position: 19, input: '', content: '1', answer: '1'},
  { position: 20, input: '', content: '', answer: '8'},
  { position: 21, input: '', content: '5', answer: '5'},
  { position: 22, input: '', content: '2', answer: '2'},
  { position: 23, input: '', content: '4', answer: '4'},
  { position: 24, input: '', content: '9', answer: '9'},
  { position: 25, input: '', content: '', answer: '7'},
  { position: 26, input: '', content: '', answer: '3'},
  { position: 27, input: '', content: '', answer: '6'},
  {
    position: 28,
    input: '',
    content: '',
    answer: '5'
  },
  {
    position: 29,
    input: '',
    content: '',
    answer: '3'
  },
  {
    position: 30,
    input: '',
    content: '',
    answer: '1'
  },
  {
    position: 31,
    input: '',
    content: '8',
    answer: '8'
  },
  {
    position: 32,
    input: '',
    content: '9',
    answer: '9'
  },
  {
    position: 33,
    input: '',
    content: '',
    answer: '4'
  },
  {
    position: 34,
    input: '',
    content: '6',
    answer: '6'
  },
  {
    position: 35,
    input: '',
    content: '',
    answer: '2'
  },
  {
    position: 36,
    input: '',
    content: '',
    answer: '7'
  },
  {
    position: 37,
    input: '',
    content: '',
    answer: '6'
  },
  {
    position: 38,
    input: '',
    content: '4',
    answer: '4'
  },
  {
    position: 39,
    input: '',
    content: '9',
    answer: '9'
  },
  {
    position: 40,
    input: '',
    content: '',
    answer: '5'
  },
  {
    position: 41,
    input: '',
    content: '2',
    answer: '2'
  },
  {
    position: 42,
    input: '',
    content: '',
    answer: '7'
  },
  {
    position: 43,
    input: '',
    content: '',
    answer: '8'
  },
  {
    position: 44,
    input: '',
    content: '',
    answer: '1'
  },
  {
    position: 45,
    input: '',
    content: '',
    answer: '3'
  },
  {
    position: 46,
    input: '',
    content: '8',
    answer: '8'
  },
  {
    position: 47,
    input: '',
    content: '',
    answer: '2'
  },
  {
    position: 48,
    input: '',
    content: '',
    answer: '7'
  },
  {
    position: 49,
    input: '',
    content: '1',
    answer: '1'
  },
  {
    position: 50,
    input: '',
    content: '',
    answer: '6'
  },
  {
    position: 51,
    input: '',
    content: '3',
    answer: '3'
  },
  {
    position: 52,
    input: '',
    content: '',
    answer: '5'
  },
  {
    position: 53,
    input: '',
    content: '',
    answer: '9'
  },
  {
    position: 54,
    input: '',
    content: '',
    answer: '4'
  },
  {
    position: 55,
    input: '',
    content: '',
    answer: '4'
  },
  {
    position: 56,
    input: '',
    content: '',
    answer: '9'
  },
  {
    position: 57,
    input: '',
    content: '',
    answer: '6'
  },
  {
    position: 58,
    input: '',
    content: '3',
    answer: '3'
  },
  {
    position: 59,
    input: '',
    content: '',
    answer: '8'
  },
  {
    position: 60,
    input: '',
    content: '2',
    answer: '2'
  },
  {
    position: 61,
    input: '',
    content: '',
    answer: '1'
  }, 
  {
    position: 62,
    input: '',
    content: '',
    answer: '7'
  }, 
  {
    position: 63,
    input: '',
    content: '',
    answer: '5'
  }, 
  {
    position: 64,
    input: '',
    content: '2',
    answer: '2'
  }, 
  {
    position: 65,
    input: '',
    content: '1',
    answer: '1'
  }, 
  {
    position: 66,
    input: '',
    content: '8',
    answer: '8'
  }, 
  {
    position: 67,
    input: '',
    content: '',
    answer: '4'
  }, 
  {
    position: 68,
    input: '',
    content: '',
    answer: '7'
  }, 
  {
    position: 69,
    input: '',
    content: '',
    answer: '5'
  }, 
  {
    position: 70,
    input: '',
    content: '',
    answer: '3'
  }, 
  {
    position: 71,
    input: '',
    content: '6',
    answer: '6'
  }, 
  {
    position: 72,
    input: '',
    content: '',
    answer: '9'
  },
  {
    position: 73,
    input: '',
    content: '',
    answer: '7'
  },
  {
    position: 74,
    input: '',
    content: '',
    answer: '5'
  },
  {
    position: 75,
    input: '',
    content: '',
    answer: '3'
  },
  {
    position: 76,
    input: '',
    content: '9',
    answer: '9'
  },
  {
    position: 77,
    input: '',
    content: '',
    answer: '1'
  },
  {
    position: 78,
    input: '',
    content: '6',
    answer: '6'
  },
  {
    position: 79,
    input: '',
    content: '',
    answer: '2'
  },
  {
    position: 80,
    input: '',
    content: '4',
    answer: '4'
  },
  {
    position: 81,
    input: '',
    content: '',
    answer: '8'
  }
]
export default boardArray;