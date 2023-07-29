import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ItemCount from '../item-count';

const Item = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={data.title}
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={'/product/' + data.id}>
          {data.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {data.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={data.stock}/>
      </CardActions>
    </Card>
  );
}

export default Item