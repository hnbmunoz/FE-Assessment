import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { DialogInterface } from "../interface/DialogInterface";

interface PopupDialogProps extends DialogInterface {
  handleToggle: () => void;
}

const PopupDialog = ({
  handleToggle,
  isOpen,
  header,
  body,
}: PopupDialogProps) => {
  return (
    <div>
      <Dialog
        onClose={handleToggle}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <div style={{ minWidth: "30vw" }}>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {header}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleToggle}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>{body}</Typography>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default PopupDialog;
