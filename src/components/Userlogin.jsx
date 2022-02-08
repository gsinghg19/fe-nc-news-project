import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import { Input, Button, FormGroup } from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const usernames = [
  "tickle122",
  "grumpy19",
  "happyamy2016",
  "cooljmessy",
  "weegembump",
  "jessjelly",
];

function getStyles(username, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(username) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function UserLogin() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [password, setPassword] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const [open, setOpen] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickable") {
      return;
    }

    setOpen(false);
  };

  const submitAction = () => {
    console.log("successful login");
    setOpen(true);
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

  return (
    <FormGroup>
      <div>
        {" "}
        <h2>
          <p className="UserLogin">Login</p>
        </h2>
        <FormControl sx={{ m: 5, width: 300 }}>
          <InputLabel id="multiple-username-label">username</InputLabel>
          <Select
            labelId="username-label"
            id="username"
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="username" />}
            MenuProps={MenuProps}
          >
            {usernames.map((username) => (
              <MenuItem
                key={username}
                value={username}
                style={getStyles(username, personName, theme)}
              >
                {username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <form>
          <FormControl sx={{ m: 5, width: 300 }}>
            <InputLabel id="Password-label">Password</InputLabel>
            <Input
              type={passwordShown ? "text" : "password"}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button onClick={togglePassword}>Show/Hide Password</Button>
          </FormControl>
        </form>
        <div>
          <Button onClick={submitAction} type="Submit" variant="contained">
            Submit
          </Button>{" "}
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            message="User login was successful"
            action={action}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Successful user login!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </FormGroup>
  );
}
