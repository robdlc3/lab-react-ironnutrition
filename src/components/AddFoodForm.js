import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

const AddFoodForm = ({ addFood }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };
        addFood(newFood);

        setName('');
        setImage('');
        setCalories('');
        setServings('');
    };

    return (
        <div>
            <h1>Add Food Entry</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <Input
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleNameInput}
                ></Input>
                <label htmlFor="name">Image</label>
                <Input
                    type="text"
                    value={image}
                    name="image"
                    onChange={handleImageInput}
                ></Input>
                <label htmlFor="name">Calories</label>
                <Input
                    type="text"
                    value={calories}
                    name="text"
                    onChange={handleCaloriesInput}
                ></Input>
                <label htmlFor="name">Servings</label>
                <Input
                    type="text"
                    value={servings}
                    name="servings"
                    onChange={handleServingsInput}
                ></Input>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default AddFoodForm;
