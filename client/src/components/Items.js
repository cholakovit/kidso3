import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Items() {
  const [items, setItems] = useState();

  const retrieveItems = async () => {
    const response = await axios.get("http://localhost:3006/items");
    await new Promise((resolve) => setTimeout(resolve, 500));
    return response.data;
  };

  useEffect(() => {
    const getAllItems = async () => {
      const allItems = await retrieveItems();
      if (allItems) setItems(allItems);
    };
    getAllItems();
  }, []);

  const removeItemHandler = async (id) => {
    await axios.delete(`http://localhost:3006/items/${id}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newItemList = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItemList);
  };

  return (
    <>
      <Header />
      <Link to={"/new-item"} className="btn clear">
        New Item
      </Link>
      <br />
      <br />
      <br />
      {items?.map((item) => {
        return (
          <div className="product">
            <Item item={item} key={item.id} />
            <button
              onClick={() => {
                removeItemHandler(item.id);
              }}
              className="btn"
            >
              Delete Record
            </button>
          </div>
        );
      })}
    </>
  );
}
