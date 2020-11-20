import { useStyles } from "./styles";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";

export function Contacts() {
  const classes = useStyles();
  const contacts = useContacts();

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
          {(() => {
            if (contacts.isLoading) {
              return (
                <div>
                  {" "}
                  <LinearProgress />{" "}
                </div>
              );
            }
            if (contacts.isError) {
              return <div> ...Error </div>;
            }
            return <ContactsTable data={contacts.data} />;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
}
