import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'


const Plot = ({title, description, id}) => {
    const {context, setContext} = useContext(GlobalContext)

    return <Grid item xs={4} className='Plot'>
        <Card className='Card'>
            <CardContent className='CardContent'>

                <Typography variant="h6">{title}</Typography>
                <Typography variant="h5"> {description}</Typography>


                <CardActions className='CardActions'>
                    <IconButton aria-label="Delete" className='DeleteIcon' onClick={() => {
                        let newContecst = [];
                        context.forEach(e => {
                            if (e.id !== id) newContecst.push(e)
                        })
                        setContext([...newContecst])
                    }}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    </Grid>


}


export default Plot
