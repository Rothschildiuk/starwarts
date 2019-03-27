import React from 'react'
import PlotView from './Components/PlotView'
import WorkingArea from './Components/WorkingArea'



export const GlobalContext = React.createContext();


const App = () => {


    return <div>
        <GlobalContext.Provider value={42}>

        </GlobalContext.Provider>


        <div className='App'>
            <WorkingArea/>
            <PlotView/>
        </div>
    </div>


}

export default App
