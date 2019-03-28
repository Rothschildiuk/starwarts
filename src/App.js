import React, {useState} from 'react'
import PlotView from './Components/PlotView'
import WorkingArea from './Components/WorkingArea'


export const GlobalContext = React.createContext([]);


const App = () => {

    const [context, setContext] = useState([])

    return <div className='App'>
        <GlobalContext.Provider value={{context: context, setContext: setContext}}>
            <WorkingArea/>
            <PlotView/>
        </GlobalContext.Provider>
    </div>


}

export default App
