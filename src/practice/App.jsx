import ChildComp from "../components/ChildComp";
import ExpandableTextComp from "../components/ExpandableTextComp";
import NavBar from "../components/NavBar";
import { use, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Kyn");
  const [isChecked, setIsChecked] = useState(false);
  const [fruits, setFruits] = useState(["Apple", "Mango", "Durian"]);
  const [person, setPerson] = useState({ name: "Kyn", age: 22 });

  const handleIncrement = () => {
    setCount((prevState) => count + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => count - 1);
  };

  const handleShowFruits = () => {
    setIsChecked(!isChecked);
  };

  const handleAddFruit = () => {
    setFruits([...fruits, "Pineapple"]);
  };

  const handleRemoveFruit = (fruitIndex) => {
    const filteredFruits = fruits.filter(
      (fruit, index) => index !== fruitIndex
    );
    setFruits(filteredFruits);
  };

  return (
    <>
      <NavBar />
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <div>
        <label>Show?</label>
        <input
          type="checkbox"
          onChange={handleShowFruits}
          checked={isChecked}
        />
      </div>
      <button onClick={handleAddFruit}>Add Fruit</button>
      <ul className="list-group">
        {isChecked &&
          fruits.map((fruit, index) => {
            return (
              <div key={index}>
                <li key={index} className="list-group-items">
                  {fruit}
                </li>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFruit(index)}
                >
                  Remove Fruit
                </button>
              </div>
            );
          })}
      </ul>
    </>
  );
}

export default App;
//<ChildComp></ChildComp>
//<ExpandableTextComp></ExpandableTextComp>
<CountComponent
  count={count}
  handleIncrement={handleIncrement}
  handleDecrement={handleDecrement}
/>;
