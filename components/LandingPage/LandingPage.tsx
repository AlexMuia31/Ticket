import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Toolbar, Typography } from "@mui/material";

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
              sx={{ fontSize: "clamp(8px, 6vw, 60px)", fontWeight: 700 }}
            >
              Create Your event or Buy Tickets to Attend Your Favourite Events
              ...
            </Typography>
            <Box sx={{ mt: "4%", fontWeight: 700 }}>
              <Typography>
                Our platform eliminates fraud. No fake tickets.
              </Typography>
              <Typography>
                No struggles with ticketing companies because you get money on
                your smart contract
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
