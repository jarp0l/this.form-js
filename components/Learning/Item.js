import React from "react";
import { useDrag } from "react-dnd";

function Item({ id, name, description }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className="content"
      ref={drag}
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    >
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Item;
