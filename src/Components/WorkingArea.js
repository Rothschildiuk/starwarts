import React, {useEffect, useState} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import RequestUtil from '../utils/RequestUtil'
import {getFirstFieldName} from '../utils/ObjectUtil'
import ListOfItems from './ListOfItems'


const WorkingArea = () => {

    const [entities, setEntities] = useState({})
    const [selectedEntity, setSelectedEntity] = useState('')


    useEffect(async () => {
        // const listpre = RequestUtil.getAll()
        const list = await RequestUtil.getAll()
        setEntities(list)
        setSelectedEntity(getFirstFieldName(list))
    }, [])

    return <div className='WorkingArea'>
        <div> WorkingArea</div>
        <Select className='Select'
                value={selectedEntity}
                onChange={event => setSelectedEntity(event.target.value)}>

            {Object.keys(entities).map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>

        <ListOfItems url={entities[selectedEntity]}/>

    </div>

}


export default WorkingArea
