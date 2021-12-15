import React from "react"
import StoreComponent from "./StoreComponent";
import StateHandler from "../../business/StateHandler";

export default function Tarte() {
    const {data, isReady} = StateHandler('tarte')
    return (
        <div>
            {isReady ? 
                <>
                    <StoreComponent  
                        data={data} 
                        title="Tarte"
                    />
                </>
            : <h3>Tarte data is loading...</h3>
            }
        </div>
    )
}