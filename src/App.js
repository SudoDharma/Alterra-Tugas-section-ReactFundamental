import HomePage from "./pages/home/HomePage";
import { todos } from "./data";

function App() {
  return (
    <>
      <HomePage todos={todos}/>
    </>
  );
}

export default App;
