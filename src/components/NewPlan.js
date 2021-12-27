import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Paper } from '@material-ui/core'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useStyles } from './style';

export const NewPlan = ({ plans, setPlans, editPlan }) => {

  const classes = useStyles();

  useEffect(() => {
    if (plans) {
      localStorage.setItem('plans', JSON.stringify(plans))
    }
  }, [plans]);

  const ERROR_MESSAGE = 'Field should not be empty';
  const MIN_LENGTH_MESSAGE = 'Min 2 letters';
  const MAX_LENGTH_MESSAGE = 'Max 100 letters';
  const WRONG_DATE_FORMAT = 'Only in Date format';
  const WRONG_NUMBER_FORMAT = 'Only numbers';

  const planValidationSchema = Yup.object().shape({
    date: Yup.date()
      .nullable()
      .typeError(WRONG_DATE_FORMAT)
      .required(ERROR_MESSAGE),
    weight: Yup.number()
      .typeError(WRONG_NUMBER_FORMAT)
      .required(ERROR_MESSAGE)
      .positive()
      .nullable(),
    exercises: Yup.string()
      .min(2, MIN_LENGTH_MESSAGE)
      .max(100, MAX_LENGTH_MESSAGE)
      .required(ERROR_MESSAGE)
  });

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    values,
    touched,
    errors,
    isValid,
    dirty
  } = useFormik({
    validationSchema: planValidationSchema,
    initialValues: {
      date: null,
      weight: '',
      exercises: ''
    },
    onSubmit: values => {
      if (editPlan) {
        editPlan.date = values.date;
        editPlan.weight = values.weight;
        editPlan.exercises = values.exercises;
      } else {
        const newPlan = {
          id: Date.now(),
          date: values.date,
          weight: values.weight,
          exercises: values.exercises
        };
        setPlans((plans) => [...plans, newPlan]);
      }
      setFieldValue('date', null, false);
      setFieldValue('weight', '', false);
      setFieldValue('exercises', '', false);
    },
  });

  useEffect(() => {
    if (editPlan) {
      setFieldValue('date', editPlan.date);
      setFieldValue('weight', editPlan.weight);
      setFieldValue('exercises', editPlan.exercises);
    }
  }, [editPlan, setFieldValue])

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <Paper className={classes.items}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Training day"
              id="date"
              name="date"              
              value={values.date}
              onChange={(newValue) => {
                setFieldValue('date', newValue);
              }}           
              onBlur={handleBlur}   
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{ width: 500 }}
                  variant="standard"
                  error={touched.date && Boolean(errors.date)}
                  helperText={touched.date && errors.date}
                />)}
            />
          </LocalizationProvider>
          <div>
            <TextField
              id="weight"
              variant="standard"
              label="Weight"
              value={values.weight}
              onChange={handleChange}
              style={{ width: 500 }}
              onBlur={handleBlur}
              error={touched.weight && Boolean(errors.weight)}
              helperText={touched.weight && errors.weight}
            />
          </div>
          <div>
            <TextField
              id="standard-textarea"
              label="Exercises"
              name="exercises"
              multiline
              variant="standard"
              style={{ width: 500 }}
              value={values.exercises}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.exercises && Boolean(errors.exercises)}
              helperText={touched.exercises && errors.exercises}
            />
          </div>
        </Box>
        <Button
          variant="contained"
          disabled={!(isValid && dirty)}
          style={{ margin: 6, display: 'flex', alignItems: 'center' }}
          type="submit"
        >Save</Button>
      </Paper>
    </form>
  )
}
