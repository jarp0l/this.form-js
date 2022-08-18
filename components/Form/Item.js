import React from "react";
import { useDrag } from "react-dnd";

function Item({ id, name, description }) {
  const [{ isDragging, opacity }, drag] = useDrag(() => ({
    type: "text",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));
  return (
    <div className="content" ref={drag} style={{ opacity }}>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Item;
