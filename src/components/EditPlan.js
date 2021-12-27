import { NewPlan } from './NewPlan';
import { useStyles } from './style';

export const EditPlan = ({ editPlan }) => {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.edit} >Edit Plan</h1>
            <NewPlan editPlan={editPlan} />
        </div>
    )
}