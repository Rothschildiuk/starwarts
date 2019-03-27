import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'


const ListOfItems = () => {


    return <div className='ListOfItems'>

        <List component="nav">
            <ListItem button>
                <ListItemText primary="hallo world"/>
            </ListItem>

        </List>

    </div>

}


export default ListOfItems
