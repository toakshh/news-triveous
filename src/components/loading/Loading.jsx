
import './Loading.css';
import { Box,CircularProgress,Typography } from '@mui/material';
const Loading = () => {
  return (
    (
        <Box className="loading">
            <CircularProgress size="5rem" sx={{marginTop:'10rem',color:'var(--theme)'}} />
            <Typography gutterBottom variant='h2'>
                Loading files...
            </Typography>
        </Box>)
  )
}

export default Loading