import { Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const TicketsCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/poster2.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Price: 0.01ETH
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
};

export const VipCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/poster2.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Price: 0.01 ETH
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
};

export const RegularCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/poster2.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Price: 0.012 ETH
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
};

export const CardVip = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/poster1.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Price: 0.015 ETH
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
};
