import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import Plot from './Plot'
import Grid from '@material-ui/core/Grid'


const PlotView = () => {

    const {context} = useContext(GlobalContext)


    return <div className='PlotView'>
        <Grid container
              direction='row'
              justify='center'
              alignItems='center'>

            {context.map((e, index) => {
                switch (e.type) {
                    case 'people':
                        return <Plot key={index} title={'People'} description={e.name} id={e.id}/>
                    case 'planets':
                        return <Plot key={index} title={'Planets'} description={e.name} id={e.id}/>
                    case 'films':
                        return <Plot key={index} title={'Films'} description={e.title} id={e.id}/>
                    case 'species':
                        return <Plot key={index} title={'Species'} description={e.name} id={e.id}/>
                    case 'vehicles':
                        return <Plot key={index} title={'Vehicles'} description={e.name} id={e.id}/>
                    case 'starships':
                        return <Plot key={index} title={'Starships'} description={e.name} id={e.id}/>
                    default:
                        return <Plot key={index} title={'Undefined type'} description={'undefined description'}/>
                }

            })}

        </Grid>
    </div>


}


export default PlotView
