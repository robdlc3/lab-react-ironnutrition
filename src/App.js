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
  // console.log(food)

  const addNewFood = (newFood) => {
    const updatedFood = [newFood, ...food];
    setFood(updatedFood);
    setFoodData(updatedFood);
  };

  // const filterFoods = (str) => {
  //   let filteredFoods;
  //   filteredFoods = foodData.filter((f) => {
  //     return f.name.toLowerCase().includes(str.toLowerCase())
  //   })

  //   setFood(filteredFoods);
  // }

  return (
    <div className="">

      {/* <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> */}

      <Search setSearch={setSearch} search={search} />

      <AddFoodForm addFood={addNewFood} />
      <div>
        <Row>
          {food.filter((curr) => curr.name.toLowerCase().includes(search.toLowerCase())).map((f) => {
            return (
              <FoodBox key={f._id} food={f} />
              //<div>
              //<p>{f.name}</p>
              //<img src={f.image} alt="food" width="100px" />
              //</div>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default App;
