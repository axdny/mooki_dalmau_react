import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ cakes }) => {
  return (
    <div className="container justify-content-center">
      {cakes.map(cake => <Item key={cake.id} cake={cake.cake} price={cake.price} img={cake.img} />)}
    </div>
  );
};

export default ItemList;