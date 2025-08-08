import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

export default function AboutDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{textAlign:"center"}} >About This Account</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1} mt={1}>
          <Avatar
            alt="User Profile"
            src="https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg" // replace with user's profile image
            sx={{ width: 80, height: 80 }}
          />
          <Typography variant="h6" fontWeight="bold">
            @Irene_Brooks
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" mt={1}>
            To help keep our community authentic, we’re showing information about accounts on Writora.
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            📅 Date Joined: January 1, 2020
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
