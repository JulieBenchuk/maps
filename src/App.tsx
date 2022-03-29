import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {students} from "./Students";
import {cars, TableOfCars} from "./TableOfCars";


function App() {
    return (
        <>
            <NewComponent groupOfPeople={students}/>
            <TableOfCars topCars={cars}/>
        </>
    );
}

export default App;
