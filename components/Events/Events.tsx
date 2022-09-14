import { Box, Container, Grid, InputAdornment, Toolbar } from "@mui/material";
import React from "react";
import { CssTextField } from "../Navbar/CustomeTextbox";
import SearchIcon from "@mui/icons-material/Search";
import EventCard from "../Cards/EventCard";

const EventsPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#DEB6AC" }}>
      <Toolbar />
      <Toolbar />
      <Container maxWidth="sm">
        <Box>
          <CssTextField
            fullWidth
            size="small"
            placeholder="Search events You would like to attend "
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "#000",
                },
                color: "#000",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: "2%" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <EventCard />
          </Grid>
          <Grid item>
            <EventCard />
          </Grid>
          <Grid item>
            <EventCard />
          </Grid>
          <Grid item>
            <EventCard />
          </Grid>
          <Grid item>
            <EventCard />
          </Grid>
          <Grid item>
            <EventCard />
          </Grid>
          <Grid item>
            <EventCard />
          </Grid>
          <Grid item>
            <EventCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EventsPage;
