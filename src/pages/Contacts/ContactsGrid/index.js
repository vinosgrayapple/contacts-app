import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from '@material-ui/core/CardMedia'
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CopyToClipboardText } from "../../../components/CopyToClipboard";

import { format } from "date-fns";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    margin: "10px",
    minWidth: 295,

    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

export function ContactsGrid({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const fullName = ({ first, last }) => `${first} ${last}`;

  return (
    <Grid container spacing={4}>
      {data.map((contact) => (
        <Card className={classes.card} key={contact.login.sha256} elevation={3}>
          <CardHeader
            avatar={
              <Avatar
                alt={fullName(contact.name)}
                src={contact.picture.thumbnail}
              />
            }
            // action={<IconButton aria-label="settings">}
            title={fullName(contact.name)}
            subheader={format(new Date(contact.dob.date), "dd.MM.yyyy")}
          />

          <CardContent>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    {/* <TableCell>Email</TableCell> */}
                    <TableCell>
                      {" "}
                      <CopyToClipboardText text={contact.email} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CopyToClipboardText text={contact.phone} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Typography variant="body2" color="textSecondary" component="p">
							This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
							of frozen peas along with the mussels, if you like.
						</Typography> */}
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
}
