import React from "react";
import './App.css'

export default function Task({name, department, rating}){
    return(

        <div className="box">
            <p>Employee name: {name}</p>
            <p>Department : {department}</p>
            <p>Rating : {rating}</p>
        </div>
    )
}