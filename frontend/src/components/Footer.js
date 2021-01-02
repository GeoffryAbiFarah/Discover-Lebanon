
import React, { Component } from "react";
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Facebook } from "../assets/facebook.svg"
import { ReactComponent as Twitter } from "../assets/twitter.svg"
import { ReactComponent as Linkedin } from "../assets/linkedin.svg"
import { ReactComponent as Instagram } from "../assets/instagram.svg"


import "../App.css";

function Footer() {
  return (
    <div className="subComponent-lg" id="footerBody">
    <Container>
      <header className="headerTitle text-center">
        <p>
        
          <b>CAN'T WAIT TO GET INVOLVED</b>
        </p>
        <p>
          <b>CONNECT WITH US NOW</b>
        </p>
      </header>


      <Grid class="col-12 col-sm-4 offset-sm-1">
                 <i></i> +961 800 000<br></br>
                <a href="mailto"> khednima3ak@hotmail.com</a>
                     
                 
            </Grid>
               
      <footer className="svg-group text-center">
        <Grid>
          <Grid md="3" xs="6">
            <div className="svg-card-3">
              <a href="https://www.instagram.com/">
              <Facebook width="50" height="55" strokeWidth="1" />  
              </a>
              <a href="https://twitter.com/">
              <Twitter width="55" height="55" strokeWidth="1" />
              </a>
              <a href="https://linkedin.com">
              <Linkedin width="55" height="55" strokeWidth="1" /> 
              </a>
              <a href="https://instagram.com">
              <Instagram width="55" height="55" strokeWidth="1" />  
              </a>
            </div>
          </Grid>
        </Grid>
        <hr />
        <br />
        <p>copyright 2020 | Khedni Ma3ak</p>
      </footer>
    </Container>
  </div>
);

}
export default Footer;