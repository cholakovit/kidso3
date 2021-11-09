import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <>
      <h2>{item.title}</h2>
      <img src={`../../assets/products/${item?.pic}`} alt={item.title} />
      <p>{item.description}</p>
      <Link to={`/edit-item/${item.id}`} className="btn">EDIT ITEM</Link>
    </>
  );
}

export default Item;
