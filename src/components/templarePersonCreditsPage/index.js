import React from "react";
import PersonCreditsListed from "../personCreditsListed";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";

function PersonCreditsPageTemplate({ credits }) {

    return (
   
        <Grid container sx={{ padding: '20px', backgroundColor: "rgba(0,0,0,0.1)" } }>
          <Grid item xs={12}>
            <Header title={`Movies starred in`} />
          </Grid>
          <Grid item container spacing={5} >
            <PersonCreditsListed credits={credits}></PersonCreditsListed>
          </Grid>
        </Grid>
      );
    }
export default PersonCreditsPageTemplate;