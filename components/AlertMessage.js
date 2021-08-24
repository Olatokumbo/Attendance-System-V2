import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
const AlertMessage = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={800}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <MuiAlert
        onClose={handleClose}
        elevation={6}
        variant="filled"
        severity="success"
      >
        Registered
      </MuiAlert>
    </Snackbar>
  );
};

export default AlertMessage;
