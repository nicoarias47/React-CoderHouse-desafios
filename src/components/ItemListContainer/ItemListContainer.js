import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardAction = ({name, description, topSpeed, img}) => {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="tesla model S"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h9" component="div" color='#c4c4c8'>
            {topSpeed}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="error">
          More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardAction;