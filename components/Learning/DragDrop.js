import React, { useState } from "react";
import Item from "./Item";
import { useDrop } from "react-dnd";
// import "../App.css";

const ItemList = [
  {
    id: 1,
    name: "Short Text",
    category: "Text",
    description: "A simple text component",
  },
  {
    id: 2,
    name: "Long Text",
    category: "Text",
    description: "A long text component",
  },
  {
    id: 3,
    name: "Button",
    category: "Button",
    description: "A button component",
  },
];

function DragDrop() {
  const [form, setForm] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addItemToForm(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToForm = (id) => {
    const itemList = ItemList.filter((item) => id === item.id);

    setForm((form) => [...form, itemList[0]]);
  };

  return (
    <div className="columns">
      <div className="column is-one-third">
        {ItemList.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
            />
          );
        })}
      </div>

      <div
        className="column"
        ref={drop}
        style={{ border: isOver ? "5px solid red" : "3px dotted pink" }}
      >
        <form method="POST" action="/">
          {form.map((item) => {
            return <Item key={item.id} name={item.name} id={item.id} />;
          })}

          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <button class="button is-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DragDrop;
