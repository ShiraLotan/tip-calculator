import React , {useState, useRef, useEffect} from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import FaceIcon from '@material-ui/icons/Face';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useServiceStyles from '../Service/service.style';

function Service({handleService}) {
    const classes = useServiceStyles();

    const [value, setValue] = useState(0);


    const handleChange = (event) => {
        setValue(event.target.value);
        handleService(event.target.value)
      };

  return (
    <div className="Service">
       <h3>How was your service?</h3>
       <FormControl className={classes.margin}>
        <InputLabel id="service">Service Level</InputLabel>
        <Select
          className={classes.width}
          labelId="service"
          id="service-select"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={0.2}>Good <InsertEmoticonIcon/></MenuItem>
          <MenuItem value={0.3}>excellent<EmojiEmotionsRoundedIcon/></MenuItem>
          <MenuItem value={0.15}>Could have been better<FaceIcon/></MenuItem>
          <MenuItem value={0.1}>Bad!<MoodBadIcon/></MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}

export default Service;