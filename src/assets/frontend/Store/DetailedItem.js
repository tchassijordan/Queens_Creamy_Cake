import React, {useState, useEffect} from "react"
import ImageRedirector from "../GeneralComponents/ImageRedirector" 
import * as API from "../../business/bs_utility"

//create reference to my images objects
const images = ImageRedirector()

export default function DetailedItem({ match, location }) {
    let [isReady, setIsReady] = useState(false)
    const [cakes, setCakes] = useState({})

    const getCake = async () => {
        const data = await API.handleItem(location.state.props.category.parent_name, match.params.id);
        setCakes(data)
        setIsReady(true)
    }

    useEffect(()=> {
        if(!isReady) {
            getCake();
        }
    })

    return (
        <div>
            {
                isReady ? 
                <>
                   <h1>{cakes.title}</h1>
                   <img src={images[cakes.img].default} alt="specific item" />
                   <p>Dimension: {cakes.dimension}</p>
                   <p>{cakes.price}</p>
                   <p>{cakes.description}</p>
                </>
                : 
                <>
                    <h1>Item is not ready</h1>
                </>
            }
        </div>
    )
}