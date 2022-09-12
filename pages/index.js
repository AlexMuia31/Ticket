import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Navbar/Navbar";
import { LandingPage } from "../components/LandingPage/LandingPage";

export default function Home() {
  return (
    <Box>
      <Header />
      <LandingPage />
    </Box>
  );
}
