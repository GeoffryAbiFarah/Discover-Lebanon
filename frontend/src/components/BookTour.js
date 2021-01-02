import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, FormControl, InputLabel, Select, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { bookTourAction } from '../actions/bookTourAction';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function BookTour() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = () => {
    let name = document.getElementById("tour_name_id").value.toString().split(" ").join("+");
    let number = document.getElementById("tour_number_id").value.toString().split(" ").join("+");
    let email = document.getElementById("tour_email_id").value.toString().split(" ").join("+");
    let area = document.getElementById("tour_area_id").value.toString().split(" ").join("+");
    let date = document.getElementById("tour_date_id").value.toString().split(" ").join("+");
    
    console.log(name)
    console.log(number)
    console.log(email)
    console.log(area)
    console.log(date)

   let data = {name: name , number: number, email: email, area: area, date: date, price: null};

   dispatch(bookTourAction(data));
   console.log("HANDLE SUBMIT DONE")
}
  return (
    <div id="bodyu">
      <br/>
      <br/>
      <Typography variant="h4" component="h2" gutterBottom>
        Book your Area Tour here !
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Kindly fill in your information to book your tour
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="tour_name_id" label="Name" variant="outlined" />
        <br/>
        <TextField id="tour_number_id" label="Number" variant="outlined" />
        <br/>
        <TextField id="tour_email_id" label="Email" variant="outlined" />
        <br/>
        <FormControl variant="outlined" fullWidth color="secondary">
                            <InputLabel>Area</InputLabel>
                            <Select
                            style={{backgroundColor:"white"}}
                            color="secondary"
                            native
                            label="Type"
                            id = "tour_area_id"
                            >
                            <option aria-label="None" value="" />
                            <option value={'beirut'}>Beirut</option>
                            <option value={'zahle'}>Zahle</option>
                            <option value={'ghineh'}>Ghineh</option>
                            </Select>
                        </FormControl>
                        <br/>
        <TextField
                id="tour_date_id"
                label="Date of the tour"
                type="date"
                defaultValue="2020-12-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br/>
            <br/>
            <Link to="/"><Button
            onClick={handleSubmit} 
            size="large"  
            variant="contained" 
            color="primary"
            >
              Book Tour
            </Button></Link>

            <br/>
      
          

      </form>
      <br/>
    </div>
    
   

   
  );
}

export default BookTour;