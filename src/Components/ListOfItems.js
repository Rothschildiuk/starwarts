import React, {useEffect, useState} from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import RequestUtil from '../utils/RequestUtil'


const ListOfItems = ({url}) => {

    const [entities, setEntities] = useState([])

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
                    <ListItemText primary={item.name} />
                </ListItem>)
            }


        </List>

    </div>

}


export default ListOfItems
