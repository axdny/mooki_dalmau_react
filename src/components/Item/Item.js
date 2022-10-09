import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img }) => {
  return (
    <div className="card mb-3">
      <img className="card-img-top" src={img} alt="imagen" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text"> $ {price} .-</p>
        <Link to={`/detail/${id}`} className="btn">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;