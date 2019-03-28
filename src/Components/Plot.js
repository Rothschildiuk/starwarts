import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Plot = ({title, description}) => {
    const {context, setContext} = useContext(GlobalContext)

    return <div className='Plot'>
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
    </div>


}


export default Plot
