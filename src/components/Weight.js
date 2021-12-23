import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

export const Weight = ({ weight, setWeight }) => {

  const handleChange = (event) => {
    setWeight(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>       
        <Input
            id="standard-adornment-weight"
            value={weight}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            style={{ width: 500 }}
            inputProps={{
              "aria-label": "weight",
            }}
          />
        <FormHelperText id="standard-weight-helper-text">My weight</FormHelperText>
      </FormControl>
    </div>
  );
}
