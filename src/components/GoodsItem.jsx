import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card
      sx={{
        height: '100%',
      }}
      >
        <CardMedia
          image={poster}
          alt={name}
          component="img"
          title={name}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Ціна: {price} грн.</Typography>
        </CardContent>
        <CardActions>
          <Button
          variant="text"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
            >
            Купити
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
