import "./App.css";
import SelectableGrid from "./components/selectable-grid";

function App() {
  return (
    <div>
      <h1>Selectable Grid</h1>
      <SelectableGrid rows={10} cols={10} />
      {/*
        My Interview Prep Course - https://roadsidecoder.com/course-details 
      */}
    </div>
  );
}

export default App;
