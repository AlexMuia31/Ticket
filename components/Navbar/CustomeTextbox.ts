import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "#F56868",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F56868",
    },
  },
  ".MuiInputBase-root": {
    backgroundColor: "#DEB6AC",
    borderRadius: "20px",
  },
});
