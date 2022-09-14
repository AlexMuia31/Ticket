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

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { CssTextField } from "./CustomeTextbox";
import { CustomeButton } from "./CustomeButton";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "#4E3524" }}>
        <Toolbar>
          <Container maxWidth="xl">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flex: 0.4 }}>
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
                  flex: 0.6,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Link href="/Events">
                    <Typography
                      sx={{
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Events
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Link href="/MyTickets">
                    <Typography sx={{ fontWeight: 700, cursor: "pointer" }}>
                      My Tickets
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Link href="/Create">
                    <Typography sx={{ fontWeight: 700, cursor: "pointer" }}>
                      Create
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <ConnectWallet accentColor="#f213a4" colorMode="dark" />
                </Box>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
