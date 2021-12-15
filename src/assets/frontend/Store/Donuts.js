import React from "react"
import StoreComponent from "./StoreComponent";
import StateHandler from "../../business/StateHandler";

export default function Donuts() {
    const {data, isReady} = StateHandler('donuts')
    return (
        <div>
            {isReady ? 
                <>
                    <StoreComponent  
                        data={data} 
                        title="Donuts"
                    />
                </>
            : <h3>Data is loading...</h3>
            }
        </div>
    )
}