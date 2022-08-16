const Column = ({ isOver, children }) => {
  const className = isOver ? "highlight-region" : "";

  return <div>{children}</div>;
};

export default Column;
