import React from "react"
import StoreComponent from "./StoreComponent";
import StateHandler from "../../business/StateHandler";

export default function QuicheLoriane() {
    const {data, isReady} = StateHandler('quiche_loriane')
    return (
        <div>
            {isReady ? 
                <>
                    <StoreComponent  
                        data={data} 
                        title="Quiche Loriane"
                    />
                </>
            : <h3>Data is loading...</h3>
            }
        </div>
    )
}