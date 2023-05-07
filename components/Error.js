import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { useRouteError, useNavigate } from 'react-router-dom';

const primary = red[500]; // #f44336

export default function Error() {

    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error)
    const handleBack = (e) => {
      navigate("/");
    }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        {error.status}
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        {error.statusText}
      </Typography>
      <Button variant="contained" onClick={handleBack}>Back Home</Button>
    </Box>
  );
}