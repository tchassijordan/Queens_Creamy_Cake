import React from "react";
import { useEffect } from "react";
//import data from "./Cake.json"

export default function DetailedItem({ match }) {
    useEffect(() => {
        console.log(match)
    });

    return (
        <div>
            <h1>Detailed Item of {match.params.id}</h1>
        </div>
    )
}