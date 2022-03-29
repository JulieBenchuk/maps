import React from "react";

export type StudentsPropsType = {
    id: number
    name: string
    age: number
}

export type NewComponentPropsType = {
    groupOfPeople: Array <StudentsPropsType>
}
export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.groupOfPeople.map((objectFromStudentArray, index) => {
                return (
                    <li key={index}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    );
}