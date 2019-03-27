import React, {useContext} from 'react'
import {GlobalContext} from "../App";


const PlotView = () => {
    const value = useContext(GlobalContext)

    return <div>
        <h1>{value}</h1>
    </div>


}


export default PlotView
