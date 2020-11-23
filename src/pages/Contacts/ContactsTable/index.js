import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { CopyToClipboardText } from "../../../components/CopyToClipboard";
import { format, formatDistance } from "date-fns";
import { NATIONALITY_HUMAN_NAME } from "../../../constants/nationality";
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
                <Avatar
                  alt={fullName(contact.name)}
                  src={contact.picture.thumbnail}
                />
              </TableCell>
              <TableCell scope="contact">{fullName(contact.name)}</TableCell>
              <TableCell>
                <Typography variant="body2">
                  {format(new Date(contact.dob.date), "dd.MM.yyyy")}
                </Typography>
                <Typography variant="caption">
                  {formatDistance(new Date(contact.dob.date), new Date())}
                </Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={contact.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={contact.phone} />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">
                  {contact.location.country}
                </Typography>
                <Typography variant="caption">
                  {contact.location.city}, {contact.location.street.name},{" "}
                  {contact.location.street.number}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {NATIONALITY_HUMAN_NAME[contact.nat]}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
