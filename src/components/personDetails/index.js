import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const PersonDetails = ({ person }) => {  // Don't miss this!
 

  return (
    <>
    <Paper>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h8" component="h6">
        {person.biography}
      </Typography>


      <Typography variant="h5" component="p">
        Known for:
      </Typography>

      <Typography variant="h8" component="h5">
      {person.known_for_department}
      </Typography>

      <Typography variant="h5" component="p">
      Place of Birth:
      </Typography>

      <Typography variant="h8" component="h5">
      {person.place_of_birth}
      </Typography>
      </Paper>
      </>
  );
};

export default PersonDetails;