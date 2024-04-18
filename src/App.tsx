import "./App.css";
import { Button } from "./button";

function App() {
  return (
    <div className="App">
      <Button onPress={() => alert("Hello world!")} variant="primary">
        Press me
      </Button>
    </div>
  );
}

export default App;
