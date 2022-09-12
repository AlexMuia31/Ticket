import {
  AppBar,
  Box,
  Container,
  InputAdornment,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { CssTextField } from "./CustomeTextbox";
import { CustomeButton } from "./CustomeButton";

const Header = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "#4E3524" }}>
        <Toolbar>
          <Container maxWidth="xl">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flex: 0.2 }}>
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    height="80px"
                    width="100px"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flex: 0.8,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "45%" }}>
                  <CssTextField
                    fullWidth
                    size="small"
                    placeholder="Search events"
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          color: "#F56868",
                        },
                        color: "#fff",
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
                <Box>
                  <Link href="">
                    <Typography sx={{ fontWeight: 700, cursor: "pointer" }}>
                      Events
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, cursor: "pointer" }}>
                    Stats
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, cursor: "pointer" }}>
                    Create
                  </Typography>
                </Box>
                <Box>
                  <AccountCircleIcon sx={{ cursor: "pointer" }} />
                </Box>
              </Box>
              <Box>
                <CustomeButton>Connect Wallet</CustomeButton>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
