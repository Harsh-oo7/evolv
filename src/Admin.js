import React, { useState } from 'react';
import './Admin.css';
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {addDishDetail} from './redux/action/index';
import {Link} from 'react-router-dom';
import {addRole} from './redux/action/index';

function Admin() { 

    const [dish, setDish] = useState([]);
    const [dishname, setDishName] = useState('');
    const [protein, setProtein] = useState();
    const [carbs, setCarbs] = useState();
    const [fat, setFat] = useState();
    const [ind, setInd] = useState();
    const [editProtein, setEditProtein] = useState();
    const [editCarbs, setEditCarbs] = useState();
    const [editFat, setEditFat] = useState();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.updateRole);
    const history = useHistory();

    const addDish = () => {
        let newDish = {};
        newDish.dishname = dishname;
        newDish.protein = protein;
        newDish.carbs = carbs;
        newDish.fat = fat;
        const calories = protein+carbs+fat;
        newDish.calories = calories;
        // console.log(newDish);
        let newArray1 = [...dish];
        newArray1.push(newDish);
        // console.log(newArray1);
        setDish(newArray1);
        dispatch(addDishDetail(newArray1));
    }

    const onDeleteDish = (index) => {
        let tempArray = [...dish];
        tempArray.splice(index,1);
        setDish(tempArray);
        dispatch(addDishDetail(tempArray));
        // console.log(dish.length)
    }

    const onEditDish = (index) => {
        setInd(index);
        let tempArray = [...dish];
        setEditProtein(tempArray[index].protein);
        setEditCarbs(tempArray[index].carbs);
        setEditFat(tempArray[index].fat);
        
    }

    const onDoneDish = (index) => {
        let tempArray = [...dish];
        tempArray[index].protein = editProtein;
        tempArray[index].carbs = editCarbs;
        tempArray[index].fat = editFat;
        tempArray[index].calories = editProtein+editCarbs+editFat;
        setDish(tempArray);
        setInd(null);
        dispatch(addDishDetail(tempArray));
    }
    
    const onLogout = () => {
        dispatch(addRole(null));
        history.push('/');
    }

    return (
        <div className="admin">
            {userData !== null && userData.role  === "admin"? 
        <div className="admin__container1">
            <h1>Admin</h1>
            <Link to='/'>
                Home
            </Link>
            <button type="button" className="admin__btn" onClick={onLogout}>
                Logout
            </button> 
            
        <div className="admin__conatiner">
            <div className="admin__container2">
                <label htmlFor="dishname"><h3>Dish Name : </h3></label>
                <input type="text" id="dishname" value={dishname} onChange={event => setDishName(event.target.value)} placeholder="write a dish name"/>
                <br />

                <label htmlFor="protein"><h3>Protein :</h3> </label>
                <input type="number" value={protein} onChange={event => setProtein(Number(event.target.value))} name="protein" id="protein" placeholder="Enter protein in grams " />
                <br />

                <label htmlFor="carbs"><h3>Carbs :</h3> </label>
                <input type="number" value={carbs} onChange={event => setCarbs(Number(event.target.value))} name="carbs" id="carbs" placeholder="Enter carbs in grams " />
                <br />

                <label htmlFor="fat"><h3>Fat :</h3> </label>
                <input type="number" value={fat} onChange={event => setFat(Number(event.target.value))} name="fat" id="fat" placeholder="Enter fat in grams " />
                <br />

                <button type="button" onClick={addDish}>Add</button>
                {/* <p>{dish.length}</p> */}
            </div>

            <div className="admin__table">
                <table>
                    <thead>
                        <tr>
                            <th>Dish Name</th>
                            <th>Protein</th>
                            <th>Carbs</th>
                            <th>Fat</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dish.map( (item,index) => (
                            <tr key={item.dishname}>
                                <td>{item.dishname}</td>
                                {ind !== index ? <td>{item.protein}</td> : <td><input type="number" value={editProtein} onChange={event => setEditProtein(Number(event.target.value))}/></td>}
                                {ind !== index ? <td>{item.carbs}</td> : <td><input type="number" value={editCarbs} onChange={event => setEditCarbs(Number(event.target.value))}/></td>}
                                {ind !== index ? <td>{item.fat}</td> : <td><input type="number" value={editFat} onChange={event => setEditFat(Number(event.target.value))}/></td>}
                                {ind !== index ? <td>{item.calories}</td> :<td>{editCarbs+editFat+editProtein}</td> }
                                {ind !== index ? <td><button type="button" onClick={() => onDeleteDish(index)}>Delete</button></td> : <td></td>}
                                {ind !== index ? <td><button type="button" onClick={() => onEditDish(index)}>Edit</button></td> : <td><button type="button" onClick={() => onDoneDish(index)}>Done</button></td> }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        

    </div>
            :
            <div>
                <p>404 page</p>
            </div>
        }
     
        </div>   
    )
}

export default Admin;
