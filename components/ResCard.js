
import { Box, Rating } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ResCard = ({imageUrl, name, cuisines}) => {

    return (
      <>
        <Card className="child-card" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            src={imageUrl}
            alt="Burger King"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cuisines}
            </Typography>
            <Rating name="read-only" value={5} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
      </>
    )
  }
  
  export default ResCard;