import React, {useContext, useEffect, useState} from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import RequestUtil from '../utils/RequestUtil'
import {GlobalContext} from "../App"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'


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

            {entities.map((item, index) =>
                <ListItem key={index} button>
                    <ListItemText primary={item.name}/>
                    <Fab size="small" color="secondary" aria-label="Add" >
                        <AddIcon onClick={() => {

                            if (context.includes(item)) {
                                console.log('element is in context')
                            } else {
                                item.type = url.split('/')[4]

                                if (context.length === 0)
                                    item.id = 0
                                else
                                    item.id = context[context.length - 1].id + 1

                                setContext([...context, item])
                            }

                        }}/>
                    </Fab>
                </ListItem>)
            }


        </List>

    </div>

}


export default ListOfItems
