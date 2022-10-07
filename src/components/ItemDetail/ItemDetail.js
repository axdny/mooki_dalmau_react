import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, category, price, stock, img, description }) => {

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
        <ItemCount/>
      </footer>
    </article>
  );
};

export default ItemDetail;