import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Home.css';
import { useHistory } from "react-router-dom";
import {addRole} from './redux/action/index';

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const dishArray = useSelector((state) => state.updateState);
    const userData = useSelector((state) => state.updateRole);
    const [dishes, setDishes] = useState(dishArray);
    
    const handleChange = (event) => {
        setDishes(dishArray.filter(item => item.dishname.includes(event.target.value)));
    };

    

    return (
        <div className="home">

            <div className="home__nav">
                <p className="home__email">{userData !== null ? userData.email : "email"}</p>
                
                { userData === null 
                ? 
                    <button className="home__btn" type="button" onClick={() => history.push('/login')}>Login</button> 
                :
                    <button className="home__btn" type="button"  onClick={() => dispatch(addRole(null))}>Logout</button> 
                } 
            </div>
            
            
            <input className="home__search" type="text" placeholder="Search dish..." onChange={handleChange}/>
            
            <div className="home__container">
                {dishes.map((item) => (
                    <div className="home__box">
                        <span>{"DishName:"+item.dishname}</span>
                        <span>{"Protein:"+item.protein}</span>
                        <span>{"Carbs:"+item.carbs}</span>
                        <span>{"Fat:"+item.fat}</span>
                        <span>{"Calories:"+item.calorie}</span>
                    </div>
                ))}
            </div>
            
            
        </div>
    )
}

export default Home;
