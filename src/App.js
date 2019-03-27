import React from 'react'
import PlotView from './Components/PlotView'
import WorkingArea from './Components/WorkingArea'



export const GlobalContext = React.createContext();


const App = () => {


    return <GlobalContext.Provider value={42}>
        <div className='App'>
            <WorkingArea/>
            <PlotView/>
        </div>
    </GlobalContext.Provider>


}

export default App
