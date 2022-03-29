import React from "react";
import {NewComponentPropsType} from "./NewComponent";

export const cars = [
    {manufacturer: "BMW", model: "m5cs"},
    {manufacturer: "Mercedes", model: "e63s"},
    {manufacturer: "Audi", model: "rs6"}
];

type TableOfCarsPropsType = {
    topCars: Array<CarsPropsType>
}
type CarsPropsType = {
    manufacturer: string
    model: string
}

export const TableOfCars = (props: TableOfCarsPropsType) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {props.topCars.map((objectFromCarArray, index) => {
                return (
                    <tr key={index}>
                        <td>{objectFromCarArray.manufacturer}</td>
                        <td>{objectFromCarArray.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}