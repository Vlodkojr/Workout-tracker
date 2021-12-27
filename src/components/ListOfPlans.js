import { useEffect } from 'react';
import { Card, CardContent, Typography, Container, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { useStyles } from './style';

export const ListOfPlans = ({ plans, setPlans, setEditPlan }) => {
  const classes = useStyles();

  const deleteNode = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  }

  const editPlan = (id) => {
    for (let plan of plans) {
      if (plan.id === id) {
        setEditPlan(plan);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('plans', JSON.stringify(plans));
  }, [plans]);

  return (
    <div style={{ marginTop: "3em" }}>
      {plans.length !== 0 ? plans.map((plan, index) => {
        return (
          <Container
            key={index}>
            <Card className={classes.list}>
              <CardContent>
                <Typography className={classes.listContainer}>
                  <div>
                    <div>{`Date: ${plan.date}`}</div>
                    <div>{`Weight: ${plan.weight}`}</div>
                    <div>{`Exercises: ${plan.exercises}`}</div>
                  </div>
                  <div>
                    <IconButton
                      onClick={() => editPlan(plan.id)}
                      component={Link} to={"/edit-plan"}
                      style={{ color: '#0d47a1' }}>
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => deleteNode(plan.id)}
                      style={{ color: '#e53935' }}>
                      <Delete />
                    </IconButton>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Container>
        )
      }) : <h1 className={classes.heading}>No plans</h1>}
    </div>
  )
}