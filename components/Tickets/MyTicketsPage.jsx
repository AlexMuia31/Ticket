import { Box, Container, Grid, Toolbar } from "@mui/material";
import React from "react";
import { TicketsCard, RegularCard } from "../Cards/TicketsCard";

const MyTicketsPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#DEB6AC" }}>
      <Toolbar />
      <Toolbar />
      <Container maxWidth="xl">
        <Grid container justifyContent="center" sx={{ mt: "1%" }} spacing={3}>
          <Grid item>
            <RegularCard />
          </Grid>
          <Grid item>
            <RegularCard />
          </Grid>
          <Grid item>
            <RegularCard />
          </Grid>
          <Grid item>
            <RegularCard />
          </Grid>
          <Grid item>
            <RegularCard />
          </Grid>
          <Grid item>
            <RegularCard />
          </Grid>
          <Grid item>
            <RegularCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MyTicketsPage;
