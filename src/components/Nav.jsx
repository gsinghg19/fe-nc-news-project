import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomeIcon from "@mui/icons-material/Home";

const Nav = () => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button variant="contained" href="/">
          <HomeIcon />
          Home
        </Button>
        <Button variant="contained" href="/articles/">
          Articles
        </Button>
        <Button variant="contained" href="/topics/">
          Topics
        </Button>
        <Button variant="contained" href="/users/" endIcon={<LoginIcon />}>
          UserLogin
        </Button>
      </ButtonGroup>
    </>
  );
};
export default Nav;
