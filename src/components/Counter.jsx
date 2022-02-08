import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  const handleClose = (event, reason) => {
    if (reason === "clickable") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}></Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const increaseCount = () => {
    setCount(function (currCount) {
      return currCount + 1;
    });
  };

  const decreaseCount = () => {
    setCount(function (currCount) {
      if (currCount > 0) {
        return currCount - 1;
      } else {
        return 0;
      }
    });
  };

  const resetCounter = () => {
    setCount(0);
    setOpen(true);
  };

  return (
    <div>
      <p>Number of votes: {count}</p>
      <Button
        style={{ color: "green" }}
        variant="outlined"
        onClick={increaseCount}
      >
        increase 👍
      </Button>
      <Button
        style={{ color: "red" }}
        variant="outlined"
        onClick={decreaseCount}
      >
        decrease 👎
      </Button>

      <Button onClick={resetCounter} variant="outlined">
        Reset
        <PriorityHighIcon />
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Counter reset was successful"
        action={action}
      />
    </div>
  );
};

export default Counter;
