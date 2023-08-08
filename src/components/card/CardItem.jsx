import styles from './CardItem.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PropTypes from 'prop-types'
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
    
};
const CardItem = (props) => {
    const { each, gridView, id } = props
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            {gridView ? (
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
                                    sx={{ maxWidth: 300, height: "fit-content", overflowY: 'scroll' }}
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
                                            <Typography variant="body2" color="text.primary" sx={{ marginTop: '1rem' }}>
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
                    <Card key={`${id}-${each.title}`} sx={{ maxWidth: 300, height: 400, overflowY: 'scroll' }}>
                        <a href={each.url} target="_blank" rel="noopener noreferrer">
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