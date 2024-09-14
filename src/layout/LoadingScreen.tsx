import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function LoadingScreen() {
  return (
    <div>
      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: "#1976d2",
        })}
        open={true}
      >
        <Typography gutterBottom variant="h3" component="div" margin={3}>
          Loading
        </Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
