const ItemsProjetos = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.deploy} target="_blank" className="work__button">
        Deploy
      </a>
      <a href={item.code} target="_blank" className="work__button">
        GitHub
      </a>
    </div>
  );
};

export default ItemsProjetos;
