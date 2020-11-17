import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { format, formatDistance } from "date-fns";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export const ContactsTable = ({ data }) => {
  const classes = useStyles();
  const fullName = ({ first, last }) => `${first} ${last}`;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.sha256}>
              <TableCell component="th" scope="contact">
                <Avatar alt="Remy Sharp" src={contact.picture.thumbnail} />
              </TableCell>
              <TableCell scope="contact">{fullName(contact.name)}</TableCell>
              <TableCell align="left">
                <Typography>
                  {format(new Date(contact.dob.date), "dd/MM/yyyy")}
                </Typography>
                <Typography>
                  {formatDistance(new Date(contact.dob.date), new Date())}
                </Typography>
              </TableCell>
              <TableCell align="left">{contact.email}</TableCell>
              <TableCell align="left">{contact.phone}</TableCell>
              <TableCell align="left">{contact.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
