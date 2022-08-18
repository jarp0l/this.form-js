import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../components/Form";

const Home = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className="section">
        <DragDrop />
      </section>
    </DndProvider>
  );
};

export default Home;
