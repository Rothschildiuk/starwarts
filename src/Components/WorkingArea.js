import React, {useEffect, useState} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import RequestUtil from '../api/RequestUtil'
import {getFirstFieldName} from '../api/ObjectUtil'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListOfItems from './ListOfItems'


const WorkingArea = () => {

    const [entities, setEntities] = useState({})
    const [selectedEntity, setSelectedEntity] = useState('')


    useEffect(() => {
        RequestUtil.getAll().then(allEntities => {
            setEntities(allEntities)
            setSelectedEntity(getFirstFieldName(allEntities))
        });
    }, [])

    return <div className='WorkingArea'>
        <div> WorkingArea</div>
        <Select className='Select'
                value={selectedEntity}
                onChange={event => setSelectedEntity(event.target.value)}>

            {Object.keys(entities).map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>

        {/*https://swapi.co/api/people/?search=r2*/}

        <ListOfItems/>

    </div>

}


export default WorkingArea
