import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const UserCard = ({ user: { username, avatar_url, name } }) => {
  return (
    <Card sx={{ minWidth: 375 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          <article className="UserCard">
            <img src={avatar_url} alt={`${username}'s avatar/pic`} />
          </article>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
