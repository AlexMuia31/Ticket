import React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import { CustomeButton } from "../Navbar/CustomeButton";

export const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#DEB6AC",
      }}
    >
      <Toolbar />
      <Toolbar />
      <Container maxWidth="xl" sx={{}}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "clamp(8px, 6vw, 60px)",
                fontWeight: 700,
                mt: "7%",
              }}
            >
              Create Your event or Buy Tickets to Attend Your Favourite Events
            </Typography>
            <Box sx={{ mt: "4%", fontWeight: 700 }}>
              <Typography>
                Our platform eliminates fraud. No fake tickets.
              </Typography>
              <Typography>No struggles with ticketing companies .</Typography>
              <Typography>Get your money in your smart contract</Typography>
            </Box>
            <Box sx={{ display: "flex", mt: "4%" }}>
              <Button sx={{ bgcolor: "#f213a4", color: "#fff" }} size="large">
                Explore
              </Button>
              <Button
                sx={{ ml: "4%", bgcolor: "#f213a4", color: "#fff" }}
                size="large"
              >
                Create Event
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
