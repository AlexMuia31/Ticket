import { Box, Container, InputAdornment, Toolbar } from "@mui/material";
import React from "react";
import { CssTextField } from "../Navbar/CustomeTextbox";
import SearchIcon from "@mui/icons-material/Search";

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
      <Container maxWidth="xl">test</Container>
    </Box>
  );
};

export default EventsPage;
