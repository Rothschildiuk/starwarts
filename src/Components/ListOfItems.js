import React, {useContext, useEffect, useState} from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import RequestUtil from '../utils/RequestUtil'
import {GlobalContext} from "../App"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'
import TablePagination from '@material-ui/core/TablePagination';


const ListOfItems = ({url}) => {
    const [entities, setEntities] = useState([])
    const [count, setCount] = useState(0)
    const [next, setNext] = useState()
    const [page, setPage] = useState(0)
    const [previous, setPrevious] = useState()
    const {context, setContext} = useContext(GlobalContext)

    useEffect(() => {
        if (url) {
            RequestUtil.request(`${url}?page=${page + 1}`)
                .then(resp => {
                    setEntities(resp.results)
                    setCount(resp.count)
                    setNext(resp.next)
                    setPrevious(resp.previous)
                })
        }
    }, [url, page])


    return <div className='ListOfItems'>
        {entities.length !== 0 && <div>
            <List>

                {entities.map((item, index) =>
                    <ListItem key={index} button>
                        <ListItemText primary={item.name || item.title}/>

                        <Fab size="small" color="secondary" aria-label="Add">
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
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={count}
                rowsPerPage={10}
                page={page}
                backIconButtonProps={{
                    'aria-label': {previous}
                }}
                nextIconButtonProps={{
                    'aria-label': {next}
                }}
                onChangePage={(e, page) => setPage(page)}
                // onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
        </div>}
    </div>

}


export default ListOfItems
