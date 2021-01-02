import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";


function NavBar() {
  return (
    <div>
      <AppBar position="static"  color="default">
        <Toolbar id="appColor">
          <Grid container >
            <Grid item xs={48}>
              <Grid container>
              <ButtonGroup variant="text" color="#ffff" aria-label="text  button group">
              <Link to="/"><Button>HOME</Button></Link>
              <Link to="/book-tour"><Button>BOOK TOUR</Button></Link>
              <Link to="/about-us"> <Button>ABOUT US</Button></Link>
              <Link to="/contact-us"><Button>CONTACT</Button></Link>

                </ButtonGroup>




              
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default NavBar;