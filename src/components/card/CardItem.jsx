import styles from './CardItem.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

//style for modal view in small devices
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor:'transparent',
    boxShadow: 24,
    p: 1,
    '@media (max-width:684px)': {
        width: '90%',
    },
    
};
const CardItem = (props) => {
    const { each, gridView, id } = props
    const [open, setOpen] = useState(false); //for modal view

    //modal actions
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        {/* conditionally rendering grid or list view mode */}
            {gridView ? (

                // list view mode
                <Card
                    key={`${id}-${each.title}`}
                    sx={{ height: 100 }}
                    className={styles.listMain}
                >
                    <CardActionArea onClick={handleOpen}>
                        <Typography className={styles.viewTitle}>{each.title}</Typography>
                    </CardActionArea>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <Card
                                    key={`${id}-${each.title}`}
                                    sx={{ maxWidth: '100%', maxHeight: "80vh", overflowY: 'scroll' }}
                                >
                                    <CardActionArea >
                                        <LazyLoadImage
                                            className={styles.contentImg}
                                            src={each.urlToImage}
                                            alt="news image cover"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {each?.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {each.description}
                                            </Typography>
                                            <Typography 
                                                variant="body2" 
                                                color="text.primary" 
                                                sx={{ marginTop: '1rem' }}
                                            >
                                                Author- {each?.author || "Anonymous"}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            color="primary"
                                            onClick={() => window.open(each.url, '_blank')}
                                        >
                                            open
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Fade>
                    </Modal>
                </Card>
            ) :
                (
                    //grid view mode
                    <Card 
                        key={`${id}-${each.title}+grid`} 
                        sx={{borderRadius:"12px", 
                                maxWidth: 300, 
                                height: 500, 
                                overflowY: 'scroll',
                                transition:'all .2s ease-in-out',
                                '@media (max-width:682px)':{maxWidth:'90%'},
                                '&:hover':{
                                    boxShadow: '10px 10px 40px black',
                                }
                            }}
                    >
                        <a href={each.url} target="_blank" rel="noopener noreferrer">
                            <CardActionArea >
                                <LazyLoadImage
                                    className={styles.contentImg}
                                    src={each.urlToImage}
                                    alt="news image cover"
                                />
                                <CardContent>
                                <Typography gutterBottom component="div"
                                            sx={{fontSize:'1rem', fontWeight:'600',}}>
                                                {each?.title}
                                            </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {each.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary" sx={{ marginTop: '1rem' }}>
                                        Author- {each?.author || "Anonymous"}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </a>
                    </Card>
                )}
        </>
    )
}
CardItem.propTypes = {
    each: PropTypes.object,
    gridView: PropTypes.bool,
    id: PropTypes.number
}

export default CardItem