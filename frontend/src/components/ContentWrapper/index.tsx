import { Paper } from "@mui/material";

type ContentWrapperProps = {
  children: JSX.Element | JSX.Element[];
};

function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <Paper
      elevation={10}
      sx={{
        borderRadius: "25px",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: "10px",
      }}
    >
      {children}
    </Paper>
  );
}

export default ContentWrapper;
