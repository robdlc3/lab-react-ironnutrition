import { Card, Row, Col, Divider, Input, Button } from 'antd';

const FoodBox = ({ food, foods, setFood, removeFood }) => {
    //   console.log(food);

    //   const removeFood = (foodName) => {
    //     setFood(
    //       foods.filter((f) => {
    //         return f.name !== foodName;
    //       })
    //     );
    //   };

    return (
        <Col md={8}>
            <div>
                <p>{food.name}</p>
                <img src={food.image} alt="food" width="100px" />
                <p>Calories: {food.calories}</p>
                <p>
                    Servings: <b>{food.servings}</b>
                </p>
                <p>
                    <b>Total Calories: {food.servings * food.calories}</b> kcal
                </p>
                <button onClick={() => removeFood(food.name)}>Delete</button>
            </div>
            <br />
        </Col>
    );
};

export default FoodBox;
