import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { sendFeedbackAction } from '../actions/sendFeedback';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  TextField: {
    position: "absolute",
    borderRadius: 4,
    border: '1px solid #ced4da',
    textAlign: 'center',
  },
}));


export default function ContactUs() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = () => {

    let f_name = document.getElementById("fn_id").value.toString().split(" ").join("+");
    let l_name = document.getElementById("ln_id").value.toString().split(" ").join("+");
    let email = document.getElementById("email_id").value.toString().split(" ").join("+");
    let description = document.getElementById("description_id").value.toString().split(" ").join("+");
    
    console.log(f_name)
    console.log(l_name)
    console.log(email)
    console.log(description)


   let data = {firstName: f_name , lastName: l_name, email: email, message: description};

   dispatch(sendFeedbackAction(data));

}
  return (
    <div className={classes.root} id="contact"> 
    <br/>
      <Grid container spacing={3}>
        <Grid item xs={11}>
          <h2>If you need any more information please contact us by filling this form!</h2>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={3}>
            <label>First name:</label>
          </Grid>
          <Grid >
            <TextField id="fn_id" variant="outlined" defaultValue="" TextFieldProps={{ 'aria-label': 'description' }} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={3}>
            <label>Last name:</label>
          </Grid>
          <Grid >
            <TextField id="ln_id" variant="outlined" defaultValue="" TextFieldProps={{ 'aria-label': 'description' }} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={3}> 
            <label>Email:</label>
          </Grid>
          <Grid >
            <TextField id="email_id" variant="outlined" defaultValue="" TextFieldProps={{ 'aria-label': 'description' }} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={3}>
            <label>Description:</label>
          </Grid>
          <Box width="30 %">
            <TextField
            id="description_id"
              placeholder="Tell us what you need!"
              multiline
              variant="outlined"
              rows={5}
              rowsMax={10}

            />
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>

        <Link to="/"><Button
            onClick={handleSubmit} 
            size="large"  
            color="primary"
            variant="contained"
            >
              Send
            </Button></Link>
        </Grid>

        

        </Grid>

        <br/>
        <br/>
    



    </div>

  );
}



