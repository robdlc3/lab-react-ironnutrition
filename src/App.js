import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodData, setFoodData] = useState(foods);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(true);

  const addNewFood = (newFood) => {
    const updatedFood = [newFood, ...food];
    setFood(updatedFood);
    setFoodData(updatedFood);
  };

  const removeFood = (foodName) => {
    setFood(
      food.filter((f) => {
        return f.name !== foodName;
      })
    );
  };

  return (
    <div className="">

      <Search setSearch={setSearch} search={search} />

      <button onClick={() => setShowAdd(!showAdd)}>{showAdd ? "Hide" : "Show"}</button>
      {showAdd && <AddFoodForm addFood={addNewFood} />}
      <div>
        <Row>
          {food.filter((curr) => curr.name.toLowerCase().includes(search.toLowerCase())).map((f) => {
            return (
              <FoodBox key={f._id} food={f} foods={food} setFood={setFood} removeFood={removeFood} />
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default App;