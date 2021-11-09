import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function EditItem() {
  let { id } = useParams();
  const title = useRef();
  const description = useRef();
  const [item, setItem] = useState();
  const [msg, setMsg] = useState();

  const retrieveItem = async () => {
    const response = await axios.get(`http://localhost:3006/items/${id}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return response.data;
  };

  useEffect(() => {
    const getOneItem = async () => {
      const oneItem = await retrieveItem();
      if (oneItem) {
        setItem(oneItem);
        title.current.value = oneItem.title;
        description.current.value = oneItem.description;
      }
    };
    getOneItem();
  }, [id]);

  const updateContactHandler = async () => {
    const request = {
      title: title.current.value,
      description: description.current.value,
    };
    const response = await axios.put(
      `http://localhost:3006/items/${id}`,
      request
    );
    await new Promise((resolve) => setTimeout(resolve, 500));
    setMsg("SUCCESS");
  };

  return (
    <>
      <Header />
      <div className="form">
        <label for="title">Title</label>
        <input type="text" name="title" ref={title} />
        <br />
        <label for="description">Description</label>
        <textarea name="description" ref={description}></textarea>
        <br />
        {msg ? msg : ""}
        <button onClick={updateContactHandler} className="btnForm">
          UPDATE
        </button>
      </div>
    </>
  );
}
export default EditItem;
