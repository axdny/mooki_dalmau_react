import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, category, price, stock, img, description }) => {
  const handleOnAdd = (count) => {
    const productToAdd = { id, name, price, count };
  }

  return (
    <article>
      <header>
        <h2>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name}/>
      </picture>
      <section>
        <p>
          Categoria: {category}
        </p>
        <p>
          Descripción: {description}
        </p>
        <p>
          Precio: {price}
        </p>
      </section>
      <footer>
        <ItemCount onAdd={handleOnAdd} stock={stock} />
      </footer>
    </article>
  );
};

export default ItemDetail;