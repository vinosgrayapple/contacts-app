import { useStyles } from "./styles";
import { useContacts } from "./useContacts";
import { useViewMode } from "./useViewMode";
import { ContactsTable } from "./ContactsTable";
import { ContactsGrid } from "./ContactsGrid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ToggleDataViewMode } from "./ToggleDataViewMode";
import { DATA_VIEW_MODES } from "./constants";

export function Contacts() {
  const classes = useStyles();
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useViewMode();
  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="10px"
          >
            <Typography variant="h4" component="h1">
              Contacts
            </Typography>

            <ToggleDataViewMode
              dataViewMode={dataViewMode}
              setDataViewMode={setDataViewMode}
              DATA_VIEW_MODES={DATA_VIEW_MODES}
            />
          </Box>
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
            if (dataViewMode === DATA_VIEW_MODES.TABLE) {
              return <ContactsTable data={contacts.data} />;
            } else if (dataViewMode === DATA_VIEW_MODES.GRID) {
              return <ContactsGrid data={contacts.data} />;
            } else {
              return "ERROR VIEW";
            }
          })()}
        </Grid>
      </Grid>
    </Container>
  );
}
