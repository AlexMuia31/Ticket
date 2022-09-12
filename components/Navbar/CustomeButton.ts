import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CustomeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#F56868",
  "&:hover": {
    backgroundColor: "#F56868",
  },
}));
