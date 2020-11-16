import { useStyles } from "./styles";
import { useContacts } from "./useContacts";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export function Contacts() {
  const classes = useStyles();
  const contacts = useContacts();
  if (contacts.isLoading) {
    return <div> ....Loading </div>;
  }
  if (contacts.isError) {
    return <div> ...Error </div>;
  }
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Typography
          variant="h3"
          component="h1"
          className={classes.headContainer}
        >
          Contacts
        </Typography>
        <Grid item xs={12}>
          {contacts.data.length}
        </Grid>
      </Grid>
    </Container>
  );
}
