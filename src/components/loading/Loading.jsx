
import './Loading.css';
import { Box,CircularProgress,Typography } from '@mui/material';
const Loading = () => {
  return (
    (
        <Box className="loading">
            <CircularProgress size="5rem" sx={{marginTop:'10rem',color:'var(--theme)'}} />
            <Typography gutterBottom variant='h2'>
                Loading news...
            </Typography>
        </Box>)
  )
}

export default Loading