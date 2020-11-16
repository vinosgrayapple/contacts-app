import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);
