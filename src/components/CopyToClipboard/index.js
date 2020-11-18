import PropTypes from "prop-types";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { useCopyToClipboard } from "react-use";
import Tooltip from "@material-ui/core/Tooltip";
import ButtonBase from "@material-ui/core/ButtonBase";
import { ClickAwayListener } from "@material-ui/core";
import { useState, useCallback } from "react";
const WhiteOnGreenTooltip = withStyles({
  tooltip: {
    color: "white",
    backgroundColor: "green",
  },
})(Tooltip);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    tooltip: {
      backgroundColor: "rgba(0, 255,0,.3)",
    },
  })
);
export const CopyToClipboardText = ({ text }) => {
  const [value, setValue] = useState("Copy");
  const [, copyToClipboard] = useCopyToClipboard();
  const toooltipTitle = () => (value === "Copied" ? "Copied" : "Copy");
  const classes = useStyles();
  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setValue("Copied");
  }, [copyToClipboard, text]);
  const onMouseLeaveCopy = useCallback(() => {
    setValue("Copy");
  }, [setValue]);
  return (
    <ClickAwayListener onClickAway={onMouseLeaveCopy}>
      <WhiteOnGreenTooltip
        title={toooltipTitle()}
        placement="top"
        arrow
        leaveDelay={200}
      >
        <ButtonBase
          onClick={onClickCopy}
          className={classes.root}
          color="primary"
        >
          <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
          {text}
        </ButtonBase>
      </WhiteOnGreenTooltip>
    </ClickAwayListener>
  );
};
CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
CopyToClipboardText.defaultProps = {
  text: "foo@bar.com",
};
