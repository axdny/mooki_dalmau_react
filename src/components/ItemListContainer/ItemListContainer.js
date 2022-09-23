import './ItemListContainer.css';

export default function ItemListContainer(props) {
  const { greeting } = props;
  return (
    <main className="hero-image principal-color">
      <div className="hero-image--opacity d-flex justify-content-center align-items-center text-center w-100">
        <div className="hero-image--content">
          <h1 className="hero-image--title text-white fw-bold pb-1">
            {greeting}
          </h1>
          <h3 className="text-white fs-1">Pastelería y panadería a base de plantas</h3>
        </div>
      </div>
    </main>
  )
}