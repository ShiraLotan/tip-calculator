import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import Service from '../Service/Service';
import Share from '../Share/Share';
import Button from '@material-ui/core/Button';


function Bill() {
    const [bill, setBill] = useState(0);
    const [share, setShare] = useState(0);
    const [service, setService] = useState(0);

    const validateInput = (e) =>{
        let reg = /^\d+$/;
         return reg.test(e.target.value)
    }

    const handleChange = (e) =>{
        if(validateInput(e)) setBill(Number(e.target.value))
    }  

    const handleShare = (e) =>{
        if(validateInput(e)) setShare(Number(e.target.value))
    } 

    const handleService = (value) =>{
         setService(value)
    } 

    const calculateTip = ()=>{
        debugger
            let total = (bill * service) / share;
            total = Math.round(total * 100) / 100;
            total = total.toFixed(2);
            console.log(total)
     }

  return (
    <div className="Bill">
        <h3>How much was your bill?</h3>
      <TextField required pattern="[0-9]*" onChange={handleChange} id="standard-basic" label="Bill Amount" />
      <Service handleService={handleService}/>
      <Share handleShare={handleShare}/>
      <Button onClick={calculateTip} variant="contained" color="secondary">
        Secondary
      </Button>
    </div>
  );
}

export default Bill;