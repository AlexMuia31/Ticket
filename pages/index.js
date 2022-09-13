import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Navbar/Navbar";
import { LandingPage } from "../components/LandingPage/LandingPage";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Box>
      <LandingPage />
    </Box>
  );
};

export default Home;
