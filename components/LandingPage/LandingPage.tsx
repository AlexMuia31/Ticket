import React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import { CustomeButton } from "../Navbar/CustomeButton";
import Image from "next/image";
import Link from "next/link";

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
      <Toolbar />
      <Toolbar />
      <Container maxWidth="xl" sx={{}}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "clamp(8px, 6vw, 60px)",
                fontWeight: 700,
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
              <Link href="/Events">
                <Button sx={{ bgcolor: "#f213a4", color: "#fff" }} size="large">
                  Explore
                </Button>
              </Link>
              <Link href="/Create">
                <Button
                  sx={{ ml: "4%", bgcolor: "#f213a4", color: "#fff" }}
                  size="large"
                >
                  Create Event
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: "2%" }}>
            <Image src="/banner.png" width="700px" height="500px" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
