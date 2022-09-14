import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { TicketsCard, RegularCard, CardVip } from "../Cards/TicketsCard";

const TicketsPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#DEB6AC" }}>
      <Toolbar />
      <Toolbar />
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center", mb: "2%" }}>
          {" "}
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Name of the Event
          </Typography>
        </Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Image src="/poster3.jpeg" width="1000px" height="200px" />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ mt: "2%" }}>
        <Box>
          <Divider>
            <Chip label="Early Bird Tickets" />
          </Divider>
        </Box>
        <Grid container justifyContent="center" sx={{ mt: "1%" }} spacing={3}>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ mt: "2%" }}>
        <Box>
          <Divider>
            <Chip label="VIP Tickets" />
          </Divider>
        </Box>
        <Grid container justifyContent="center" sx={{ mt: "1%" }} spacing={3}>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
          <Grid item>
            <CardVip />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ mt: "2%" }}>
        <Box>
          <Divider>
            <Chip label="Regular Tickets" />
          </Divider>
        </Box>
        <Grid
          container
          justifyContent="center"
          sx={{ mt: "1%", pb: "2%" }}
          spacing={3}
        >
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
          <Grid item>
            <TicketsCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TicketsPage;
