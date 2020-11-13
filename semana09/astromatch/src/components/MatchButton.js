import React from 'react';
import { Button } from '@material-ui/core'

const MatchButton = (props) => {
    return (
        <div>
            <Button
                variant="contained" color={props.match ? "primary" : "secondary"}
                onClick={() => props.onClickChoose(props.match)}
            >{props.buttonText}</Button>
        </div>
    )
}

export default MatchButton