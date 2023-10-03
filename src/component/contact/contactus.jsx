import React, { useState, useEffect } from 'react';
import FileUpload from "react-material-file-upload";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  makeStyles,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  formControl: {
    fullWidth: true,
  },
  fileInput: {
    display: 'none',
  },
  uploadButton: {
    marginTop: theme.spacing(2),
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [file, setFile] = useState(null);
  const [csrfToken, setCsrfToken] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleComplaintChange = (event) => {
    setComplaint(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    // Fetch the CSRF token from a cookie or server response and set it in state
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('XSRF-TOKEN'))
      ?.split('=')[1];
    setCsrfToken(token || '');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here, e.g., send data to the server

    // Reset form fields
    setName('');
    setComplaint('');
    setFile(null);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <input type="hidden" name="_csrf" value={csrfToken} />
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                required
                value={name}
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Complaint/Feedback"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                value={complaint}
                onChange={handleComplaintChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FileUpload value={file} onChange={setFile}/>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onChange={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactUs;
