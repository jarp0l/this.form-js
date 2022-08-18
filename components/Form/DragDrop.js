import React, { useState } from "react";
import Item from "./Item";
import { useDrop } from "react-dnd";
// import { Button, Paragraph, ShortText } from "../FormBlocks";

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
  const [formState, setFormState] = useState([]);

  const [{ isOver, isActive }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addItemToForm(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToForm = (id) => {
    const itemList = ItemList.filter((item) => id === item.id);

    setFormState((formState) => [...formState, itemList[0]]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="columns">
      <div className="column is-one-third">
        {ItemList.map((item) => {
          return (
            <Item
              key={Math.random()}
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
        <div className="container">
          <form method="POST" onSubmit={handleSubmit}>
            {formState.map((item) => {
              return <Item key={Math.random()} name={item.name} id={item.id} />;
            })}

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DragDrop;
