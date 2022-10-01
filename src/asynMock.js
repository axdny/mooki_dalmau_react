const cakes = [
  {
    id: '1',
    cake: 'Retro',
    price: 6500,
    img: '/Assets/torta01_retro.png',
  },
  {
    id: '2',
    cake: 'Happee Birthdae',
    price: 6400,
    img: '/Assets/torta02_harry.png',
  },
  {
    id: '3',
    cake: 'Perli',
    price: 5700,
    img: '/Assets/torta03_perli.png',
  },
  {
    id: '4',
    cake: 'Florinda',
    price: 7300,
    img: '/Assets/torta04_floreal.png',
  },
  {
    id: '5',
    cake: 'Chocolatoza',
    price: 6900,
    img: '/Assets/torta05_chocolate.png',
  },
  {
    id: '6',
    cake: 'Torta Oreo',
    price: 7600,
    img: '/Assets/torta06_oreo.png',
  },
];

const getCakes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cakes);
    }, 2000);
  });
};

export default getCakes;