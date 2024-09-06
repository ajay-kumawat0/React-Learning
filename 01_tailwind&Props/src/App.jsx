import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-xl mb-4">Integrated Tailwind Css </h1>
      <Card title="React" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?" btn="click here"/>
      <Card title="JavaScript" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?" btn="visit me"/>
    </>
  );
}

export default App;