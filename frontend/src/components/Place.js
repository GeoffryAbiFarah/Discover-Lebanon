import { Backdrop, Card, CardActionArea, CardActions, CardMedia, CircularProgress, Dialog, DialogContent, DialogTitle, Grid, makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginTop: '3rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1rem'
  },
  media: {
    height: 140,
  },
  grid: {
    width :'100%',
    margin: '0px'
  },
  modalImg:{
    width:"100%"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  card:{
    backgroundColor: theme.palette.primary.light,
    color: "white"
  },
  check :{
    color: theme.palette.secondary.light,
    
  }
}));

function Place() {
    const classes = useStyles();
    // const dispatch = useDispatch();

    const allPlaces = useSelector((state) => state.allPlacesReducer);
    const searchedPlaces = useSelector((state) => state.searchReducer);

    //to choose what to show
    const show = useSelector((state) => state.showReducer);
    let places =[];
    if (show === true){
        places = allPlaces;
    }else{
        places = searchedPlaces;
    }
    // for modal
    const [open, setOpen] = useState(false);
    const [currentPlace, setCurrentPlace] = useState({});
    const handleClickOpen = () => { 
      setOpen(true); 
    };
    const handleCurrentPlace = (place) =>{
      setCurrentPlace(place)
    }
    const handleClose = () => { setOpen(false); };

    const isLoading = useSelector(state => state.loadingReducer)

    if (isLoading){
       return (
       <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
       )
    }
    else{
      return (
      <div>
        <Grid container className={classes.grid}>
            {places.map(place => (
                <Grid item key={place.id} align="center" xs={12} sm={6}>
        <Card  className={classes.root}>
              <CardActionArea onClick={ () =>{
                handleClickOpen();
                handleCurrentPlace(place);
              }
              }>
                <CardMedia
                className={classes.media}
                image={place.image}
                />

                </CardActionArea>
                <CardActions className={classes.card}>
                    <Typography gutterBottom variant="h5" component="h5">
                    {place.name}
                    </Typography>
                </CardActions>
        </Card>
        
        </Grid>))}
        
        </Grid>
        
        {/* Modal Dialog */}
        <Dialog onClose={handleClose} maxWidth="lg" aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          </DialogTitle>
              <DialogContent>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={8} >
                  <img src={currentPlace.image} className={classes.modalImg} alt={currentPlace.name}/>
                </Grid>
                
                <Grid item xs={12} sm={4}>
                  <Typography variant="h4" component="h4">
                    {currentPlace.name}
                  </Typography>
                  <br/>
                  <Typography >
                    Type: {currentPlace.type}
                  </Typography>
                <br/>
                  <Typography gutterBottom>
                    Area: {currentPlace.area}
                  </Typography>
                  <br/>
                </Grid>
                </Grid>
              </DialogContent>
              </Dialog>
    </div>
      )}
  
}

export default Place;