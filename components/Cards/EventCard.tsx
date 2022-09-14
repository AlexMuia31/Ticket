import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import Link from "next/link";

export default function EventCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Event Title" subheader="September 14, 2016" />
      <CardMedia
        component="img"
        height="194"
        image="/poster1.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/Tickets">
          <Button
            size="small"
            sx={{
              bgcolor: "#F213A4",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#F56868",
              },
            }}
          >
            Buy Tickets
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
