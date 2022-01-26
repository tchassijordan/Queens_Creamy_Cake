import React, {useState, useEffect} from "react"
import ImageRedirector from "../GeneralComponents/ImageRedirector" 
import * as API from "../../business/bs_utility"

//create reference to my images objects
const images = ImageRedirector()

export default function DetailedItem({ match, location }) {
    let [isReady, setIsReady] = useState(false)
    const [data, setData] = useState({})

    const getItem = async () => {
        const data = await API.handleItem(location.state.props.category.parent_name, match.params.id);
        setData(data)
        setIsReady(true)
    }

    useEffect(()=> {
        if(!isReady) {
            getItem();
        }
    })

    return (
        <div>
            {
                isReady ? 
                <>
                   <h1>{data.title}</h1>
                   <img src={images[data.img].default} alt="specific item" />
                   <p>Dimension: {data.dimension}</p>
                   <p>{data.price}</p>
                   <p>{data.description}</p>
                   {data.sub_images ? 
                        <div style={{display: "flex", flexDirection: "row"}}>
                            {data.sub_images.map(url => 
                                <img src={images[url].default} alt="extented imagery" key={url} />
                            )}
                        </div> : null
                    }
                </>
                : 
                <>
                    <h1>Item is not ready</h1>
                </>
            }
        </div>
    )
}