const products = [
  {
    id: '1',
    name: 'Torta Retro',
    category: 'cakes',
    price: 6500,
    stock: 10,
    img: '/Assets/torta01_retro.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus quibusdam quae, a assumenda ratione ducimus doloremque soluta ut sit in reiciendis consequuntur suscipit corrupti perspiciatis dignissimos dolorum? Quos, dolores.'
  },
  {
    id: '2',
    name: 'Torta Birthdae',
    category: 'cakes',
    price: 6400,
    stock: 8,
    img: '/Assets/torta02_harry.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus quibusdam quae, a assumenda ratione ducimus doloremque soluta ut sit in reiciendis consequuntur suscipit corrupti perspiciatis dignissimos dolorum? Quos, dolores.'

  },
  {
    id: '3',
    name: 'Torta Perli',
    category: 'cakes',
    price: 5700,
    stock: 4,
    img: '/Assets/torta03_perli.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus quibusdam quae, a assumenda ratione ducimus doloremque soluta ut sit in reiciendis consequuntur suscipit corrupti perspiciatis dignissimos dolorum? Quos, dolores.'

  },
  {
    id: '4',
    name: 'Donuts de choco',
    category: 'donuts',
    price: 3300,
    stock: 3,
    img: '/Assets/donuts.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus quibusdam quae, a assumenda ratione ducimus doloremque soluta ut sit in reiciendis consequuntur suscipit corrupti perspiciatis dignissimos dolorum? Quos, dolores.'

  },
  {
    id: '5',
    name: 'Galletitas de limón',
    category: 'cookies',
    price: 2500,
    stock: 30,
    img: '/Assets/galletitas.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus quibusdam quae, a assumenda ratione ducimus doloremque soluta ut sit in reiciendis consequuntur suscipit corrupti perspiciatis dignissimos dolorum? Quos, dolores.'

  },
  {
    id: '6',
    name: 'Macarrones',
    category: 'macarons',
    price: 3000,
    stock: 22,
    img: '/Assets/macarons.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus quibusdam quae, a assumenda ratione ducimus doloremque soluta ut sit in reiciendis consequuntur suscipit corrupti perspiciatis dignissimos dolorum? Quos, dolores.'
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(product => {
        return product.id === id;
      }));
    }, 2000);
  });
};