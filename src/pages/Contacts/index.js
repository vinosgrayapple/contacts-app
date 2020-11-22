import { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";
import { ContactsGrid } from "./ContactsGrid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
const DATA_VIEW_MODES = {
  TABLE: "table",
  GRID: "grid",
};
const getInitialDataViewMode = () =>
  localStorage.getItem("dataViewMode") || DATA_VIEW_MODES.TABLE;
export function Contacts() {
  const classes = useStyles();
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useState(getInitialDataViewMode);

  const handleChange = (event, nextView) => {
    setDataViewMode(nextView);
  };

  useEffect(() => {
    localStorage.setItem("dataViewMode", dataViewMode);
  }, [dataViewMode]);

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
            <ToggleButtonGroup
              orientation="horizontal"
              exclusive
              size="small"
              value={dataViewMode}
              onChange={handleChange}
            >
              <ToggleButton
                value={DATA_VIEW_MODES.TABLE}
                aria-label={DATA_VIEW_MODES.TABLE}
              >
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton
                value={DATA_VIEW_MODES.GRID}
                aria-label={DATA_VIEW_MODES.GRID}
              >
                <ViewModuleIcon />
              </ToggleButton>
            </ToggleButtonGroup>
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
