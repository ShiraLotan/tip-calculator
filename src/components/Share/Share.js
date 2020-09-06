import React from 'react';
import TextField from '@material-ui/core/TextField';

function Share({handleShare}) {

    return (
    <div className="Share">
        <h3>How many people are sharing the bill?</h3>
        <TextField required pattern="[0-9]*" onChange={(event)=>handleShare(event)} id="standard-basic" label="Number of people" />

    </div>
  );
}

export default Share;