import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, category, price, stock, img, description }) => {
  const handleOnAdd = (count) => {
    const productToAdd = { id, name, price, count };
  };

  return (
    <div className="hero-image principal-color">
      <div className="hero-image--opacity w-100">
        <header className="hero-image--content">
          <h2 className="hero-image--title text-white fw-bold pt-5">
            {name}
          </h2>
        </header>
        <div className="d-flex justify-content-evenly align-content-center">
          <picture className="container-fluid about">
            <img src={img} alt={name} className="about-image img-fluid rounded border border-light border-2 w-100" />
            <p className="text-white fs-5 fw-normal">
              Categoria: {category}
            </p>
          </picture>
          <section className="d-flex about justify-content-evenly align-content-center pt-5">
            <div class="container-fluid p-3 about-text text-wrap lh-base">
              <p className="text-white fw-bold fs-4">
                Descripción: {description}
              </p>
              <p className="text-white fw-bold fs-3">
                Precio: $ {price}.-
              </p>
              <p className="text-white fw-bold fs-3">
                Stock: {stock} unidades
              </p>
              <footer className="d-flex pt-4">
                <ItemCount onAdd={handleOnAdd} stock={stock} />
              </footer>
            </div>
          </section>
        </div>
      </div>
    </div >
  );
};

export default ItemDetail;