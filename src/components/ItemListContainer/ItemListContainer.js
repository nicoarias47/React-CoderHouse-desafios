import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';



const ItemListContainer = ({data}) => {
  return (
    <Card sx={{ maxWidth: 250, display: 'flex', flexWrap: 'wrap', margin: 2}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="auto"
          image={data.image}
          alt={data.name}  
                
        /> 
        <CardContent>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h9" component="div" color={data.status === "Alive" ? "green" : data.status === "Dead" ? "red" : "#c4c4c8"}>
            {data.status}
          </Typography>
          <Typography variant="body2">
            {data.species}
          </Typography>
        </CardContent>
      </CardActionArea>      
    </Card>
  );
}

export default ItemListContainer;