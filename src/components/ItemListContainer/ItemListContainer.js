import React, { useState, useEffect } from 'react';
import getCakes from '../../asynMock';
import ItemList from '../ItemList/ItemList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './ItemListContainer.css';

// import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
   
  const { greeting } = props;
/*   const handleOnAdd = () => {
    console.log('Se agrego el item al carrito');
  }
 */
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCakes().then(response => {
      setCakes(response);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return (
    <main className="hero-image principal-color">
      <div className="hero-image--opacity d-flex justify-content-center align-items-center text-center w-100">
        <div className="hero-image--content">
          <h1 className="hero-image--title text-white fw-bold pb-1">
            {greeting}
          </h1>
          <h3 className="text-white fs-1">Pastelería y panadería a base de plantas</h3>
          {loading ? <LoadingSpinner /> : <ItemList cakes={cakes}/>}
          {/* <ItemCount initial={1} stock={5} onAdd={handleOnAdd} /> */}
        </div>
      </div>
    </main>
  );
 };

export default ItemListContainer;