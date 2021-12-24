import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Exercises = ({exercises, setExercises}) => {

  const handleChange = (event) => {
    setExercises(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          id="standard-textarea"
          label="Exercises"
          value={exercises}
          multiline
          variant="standard"
          style={{ width: 500 }}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
