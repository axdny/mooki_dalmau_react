import './Item.css';

const Item = ({ cake, price, img }) => {
  return (
    <div className="card mb-3">
      <img className="card-img-top" src={img} alt="Torta" />
      <div className="card-body">
        <h4 className="card-title">{cake}</h4>
        <p className="card-text"> $ {price} .-</p>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
          Agregar a carrito
        </button>
      </div>
    </div>
  );
};

export default Item;