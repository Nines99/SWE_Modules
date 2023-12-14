import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// wraps the default MUI Card component to customise it with props
export default function CustomCard({ name, image, children, buttonText = 'Share' }) {

  return (
    <Card sx={{ 
      // maxWidth: full
      objectFit: 'scale-down', // Adjust the object-fit property as needed
      borderRadius: '8px', // Add border-radius for a rounded look
      
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="image"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}
// ++ Add support for a button text prop as well, test rendering it
