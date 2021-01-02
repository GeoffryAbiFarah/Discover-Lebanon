import { AppBar, Button, FormControl, Grid, InputLabel, Select, TextField, Toolbar } from '@material-ui/core';
import React from 'react';
import {useDispatch} from 'react-redux';
import { requestAll } from '../actions/placesAction';
import { requestSearch } from '../actions/searchAction';
import { SHOW_ALL_PLACES, SHOW_SEARCHED_PLACES } from '../types';


function SearchBar() {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        let name = document.getElementById("name-id").value.toString().split(" ").join("+");
        let type = document.getElementById("type-id").value.toString().split(" ").join("+");
        let area = document.getElementById("area-id").value.toString().split(" ").join("+");

        
        console.log(name)
        console.log(type)
        console.log(area)
    
       let data = {name: name , type: type, area: area};

       if (name === "" && type === "" && area === ""){
           dispatch({type: SHOW_ALL_PLACES});
           dispatch(requestAll());
       }
       else{
        dispatch({type: SHOW_SEARCHED_PLACES});
        dispatch(requestSearch(data));
       }

    }
  return (
  <div>
    <AppBar position="static" color="primary" >
        <Toolbar >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} >
                    <Grid container justify="center" >
                        <TextField style={{backgroundColor:"white"}} fullWidth color="secondary" id = "name-id" label="Search" variant="outlined"/>
                    </Grid>
                </Grid>
            
                <Grid item xs={12} sm={2}>
                    <Grid container justify="center">
                        <FormControl variant="outlined" fullWidth color="secondary">
                            <InputLabel>Types</InputLabel>
                            <Select
                            style={{backgroundColor:"white"}}
                            color="secondary"
                            native
                            label="Type"
                            id = "type-id"
                            >
                            <option aria-label="None" value="" />
                            <option value={'hotel'}>Hotel</option>
                            <option value={'restaurant'}>Restaurant</option>
                            <option value={'night club'}>Night Club</option>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Grid container justify="center">
                        <FormControl variant="outlined" fullWidth color="secondary">
                            <InputLabel>Area</InputLabel>
                            <Select
                            style={{backgroundColor:"white"}}
                            color="secondary"
                            native
                            label="Type"
                            id = "area-id"
                            >
                            <option aria-label="None" value="" />
                            <option value={'beirut'}>Beirut</option>
                            <option value={'byblos'}>Byblos</option>
                            <option value={'jdeideh'}>Jdeideh</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Grid container justify="center">
                        <Button onClick={handleSubmit} size="large"  variant="contained" color="secondary">Search</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
    </div>
  );
}
export default SearchBar;