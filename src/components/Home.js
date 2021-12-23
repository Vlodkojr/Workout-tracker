import { useStyles } from './style';

export const Home = () => {
    const classes = useStyles();

    return (
        <h1 className={classes.heading}>Workout Tracker</h1>
    )
}