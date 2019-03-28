import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

const Plot = ({title, description}) => {
    const {context, setContext} = useContext(GlobalContext)

    return <Grid item xs={4}>

        <Card>
            <CardContent>
                <p> type : {title}</p>
                <p> description: {description}
                    <IconButton aria-label="Delete" onClick={() => {
                        let newContecst = [];
                        context.map(e => {
                            if (e.name !== description)
                                newContecst.push(e)

                        })

                        setContext([...newContecst])
                    }}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </p>
            </CardContent>
        </Card>
    </Grid>


}


export default Plot
