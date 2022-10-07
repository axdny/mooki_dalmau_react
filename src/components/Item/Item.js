import './Item.css';

const Item = ({ name, price, img }) => {
  return (
    <div className="card mb-3">
      <img className="card-img-top" src={img} alt="Torta" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text"> $ {price} .-</p>
        <button type="button" className="btn">
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default Item;