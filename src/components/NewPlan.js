import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Paper } from '@material-ui/core'

import { useStyles } from './style';
import { Day } from './Day';
import { Weight } from './Weight';
import { Exercises } from './Exercises';

export const NewPlan = ({ plans, setPlans, editPlan }) => {
  const [date, setDate] = useState(null);
  const [weight, setWeight] = useState('');
  const [exercises, setExercises] = useState('');

  const classes = useStyles();

  useEffect(() => {
    localStorage.setItem('plans', JSON.stringify(plans))
  }, [plans]);

  const newPlan = () => {
    if (exercises !== '') {
      if(editPlan){
        editPlan.date = date;
        editPlan.weight = weight;
        editPlan.exercises = exercises;        
      } else {
        const newPlan = {
          id: Date.now(),
          date: date,
          weight: weight,
          exercises: exercises
        };  
        setPlans((plans) => [...plans, newPlan]);
      }      
      setDate(null);
      setWeight('');
      setExercises('');
    }
  }

  useEffect(() => {
    if (editPlan) {
      setDate(editPlan.date);
      setWeight(editPlan.weight);
      setExercises(editPlan.exercises);
    }
  }, [editPlan])

  return (
    <form className={classes.container}>
      <Paper className={classes.items}>
        <Day date={date} setDate={setDate} />
        <Weight weight={weight} setWeight={setWeight} />
        <Exercises exercises={exercises} setExercises={setExercises} />
        <Button
          variant="contained"
          style={{ margin: 6, display: 'flex', alignItems: 'center' }}
          onClick={newPlan}>Save</Button>
      </Paper>
    </form>
  )
}
