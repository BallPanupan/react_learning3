import logo from "./logo.svg";
import "./App.css";

import form from "./components/form";
import Header from "./components/header";

function App() {
  const inputName = <input type="text" />;

  return (
    <div>
      <Header title="Hello" name="Panupan" border={true} />
      Enter your name {inputName}
    </div>
  );
}

export default App;
