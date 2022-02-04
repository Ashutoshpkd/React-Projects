import { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem/MealsItem';
import Modal from '../UI/Modal/Modal';
import RingLoader from "react-spinners/RingLoader";

const AvailableMeals = (props) => {

    const [mealsData, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch('https://custom-hook-1-default-rtdb.firebaseio.com/meals.json');
        console.log(response);
        const data = await response.json();
        console.log(data);

        setMeals(prevMeals => prevMeals.concat(data));
        setIsLoading(false);
    }

    useEffect( () => {
        fetchData();
    }, []);


    const meals =
        mealsData.map((meal) => (
            <MealsItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            />
        ))

    return (
        <section className={classes.meals}>
            {!isLoading && (            
            <Card>
                <ul>
                    {meals}
                </ul>
            </Card>
            )}
            {isLoading && (
                <Modal isSpinner>
                    <RingLoader color='#F00D29' loading size={60} />
                </Modal>
            )}
        </section>
    );
};

export default AvailableMeals;