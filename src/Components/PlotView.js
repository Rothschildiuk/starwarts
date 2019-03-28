import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import Plot from './Plot'


const PlotView = () => {

    const {context} = useContext(GlobalContext)


    return <div className='PlotView'>
        {context.map((e, index) => {
            switch (e.type) {
                case 'people':
                    return <Plot key={index} title={e.type} description={e.name}/>
                case 'planets':
                    return <Plot key={index} title={e.type} description={e.name}/>
                case 'films':
                    return <Plot key={index} title={e.type} description={e.name}/>
                case 'species':
                    return <Plot key={index} title={e.type} description={e.name}/>
                case 'vehicles':
                    return <Plot key={index} title={e.type} description={e.name}/>
                case 'starships':
                    return <Plot key={index} title={e.type} description={e.name}/>
                default:
                    return <Plot key={index} title={'Undefined type'} description={'undefined description'}/>
            }

        })}
    </div>


}


export default PlotView
