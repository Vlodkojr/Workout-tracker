import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  navBar: {
    marginTop: "2em"
  },
  container: {
    marginTop: "3em",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  items: {
    margin: "10px",
    padding: "1em",
    backgroundColor: "#f5f5f5 !Important"
  },
  list: {
    backgroundColor: "#f5f5f5 !Important",
    margin: "10px",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    margin: "2em"
  },
  edit: {
    display: "flex",
    justifyContent: "center"
  },
  listContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));