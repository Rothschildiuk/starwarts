import React from 'react'
import PlotView from './Components/PlotView'
import WorkingArea from './Components/WorkingArea'


const App = () => {
    // const EntityContext = React.createContext(55)

    return <div className='App'>
        <WorkingArea/>
        <PlotView/>
    </div>

}


export default App
