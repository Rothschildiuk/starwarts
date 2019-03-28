import React, {useContext, useEffect, useState} from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import RequestUtil from '../utils/RequestUtil'
import {GlobalContext} from "../App";


const ListOfItems = ({url}) => {
    const [entities, setEntities] = useState([])
    const {context, setContext} = useContext(GlobalContext)


    useEffect(() => {
        if (url) {
            RequestUtil.request(url).then(resp => {
                setEntities(resp.results)
            })
        }
    }, [url])


    return <div className='ListOfItems'>

        <List>

            {url && entities.map((item, index) =>
                <ListItem key={index} button>
                    <ListItemText primary={item.name} onClick={() => {
                        item.type = url.split('/')[4]
                        setContext([...context, item])
                    }}/>
                </ListItem>)
            }


        </List>

    </div>

}


export default ListOfItems
