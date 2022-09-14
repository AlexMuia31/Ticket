import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CssTextField } from "../Navbar/CustomeTextbox";

import UploadFileIcon from "@mui/icons-material/UploadFile";

const CreatePage = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#DEB6AC" }}>
      <Toolbar />
      <Toolbar />
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Create an Event
          </Typography>
        </Box>
        <Box>
          <Typography>Name of the Event :</Typography>
          <CssTextField fullWidth sx={{ mt: "1%" }} />
        </Box>
        <Box>
          <Typography sx={{ mt: "1%" }}>Description of the Event :</Typography>
          <CssTextField fullWidth multiline minRows={4} sx={{ mt: "1%" }} />
        </Box>
        <Box>
          <Typography sx={{ mt: "1%" }}>Upload Event Banner :</Typography>
          <Button
            component="label"
            startIcon={<UploadFileIcon />}
            sx={{ color: "black", bgcolor: "#F213A4" }}
          >
            <input type="file" />
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "2%" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Mint Tickets for the Event
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ mt: "1%" }}>Ticket pic :</Typography>
          <Button
            component="label"
            startIcon={<UploadFileIcon />}
            sx={{ color: "black", bgcolor: "#F213A4" }}
          >
            <input type="file" />
          </Button>
        </Box>
        <Box sx={{ mt: "1%" }}>
          <Typography>Price :</Typography>
          <CssTextField fullWidth sx={{ mt: "1%" }} />
        </Box>
        <Box sx={{ mt: "1%" }}>
          <Typography>Total Supply :</Typography>
          <CssTextField fullWidth sx={{ mt: "1%" }} />
        </Box>
        <Box sx={{ mt: "1%" }}>
          <Button
            sx={{
              bgcolor: "#F213A4",
              color: "#fff",
              "&: hover": { backgroundColor: "#F213A4" },
            }}
          >
            Create
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CreatePage;
