export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-26 12:09:13',
    description: 'desc',
    get products () { return products }
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-10-27 12:09:23',
    description: 'desc',
    get products () { return products }
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-28 12:09:33',
    description: 'desc',
    get products () { return products },
  },
  {
    id: 4,
    title: 'Order 4',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products },
  }
]

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 101, symbol: 'USD', isDefault: 0},
      {value: 2601, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 2',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 102, symbol: 'USD', isDefault: 0},
      {value: 2602, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 3',
    type: 'Laptops',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 103, symbol: 'USD', isDefault: 0},
      {value: 2603, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 4',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 104, symbol: 'USD', isDefault: 0},
      {value: 2604, symbol: 'UAH', isDefault: 1}
    ],
    order: 4,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 5',
    type: 'Tablets',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 105, symbol: 'USD', isDefault: 0},
      {value: 2606, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 6,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 6',
    type: 'Laptops',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 107, symbol: 'USD', isDefault: 0},
      {value: 2607, symbol: 'UAH', isDefault: 1}
    ],
    order: 3,
    date: '2017-06-29 12:09:33'
  }
]