import React from "react"
import StoreComponent from "./StoreComponent";
import StateHandler from "../../business/StateHandler";

export default function PastelDeViande() {
    const {data, isReady} = StateHandler('pastel_de_viande')
    return (
        <div>
            {isReady ? 
                <>
                    <StoreComponent  
                        data={data} 
                        title="Pastel De Viande"
                    />
                </>
            : <h3>Data is loading...</h3>
            }
        </div>
    )
}