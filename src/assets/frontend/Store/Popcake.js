import React from "react"
import StoreComponent from "./StoreComponent";
import StateHandler from "../../business/StateHandler";

export default function Popcake() {
    const {data, isReady} = StateHandler('popcake')
    return (
        <div>
            {isReady ? 
                <>
                    <StoreComponent  
                        data={data} 
                        title="Popcakes"
                    />
                </>
            : <h3>Popcakes data is loading...</h3>
            }
        </div>
    )
}