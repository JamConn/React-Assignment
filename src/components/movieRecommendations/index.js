import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";



export default function MovieRecommendations({ movie }) {


  return (

    <Card sx={{ maxWidth: 245 }}>
    <><CardHeader key={movie.id}
            title={<Typography variant="h5" component="p">
                {movie.title}{" "}
            </Typography>} /><CardMedia key={movie.id}
                sx={{ height: 300 }}
                image={movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : img} /><CardContent key={movie.id}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {movie.release_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {movie.vote_average}{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent><CardActions disableSpacing key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info ...
                    </Button>
                </Link>
            </CardActions></>
   </Card>
  );
}



//   const MovieRecommendations = ( {recommendations}) => {
//     let movieRecommendations = recommendations.map((m) => (
//       <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
//         <Movie key={m.id} movie={m}  />
//       </Grid>
//     ));
//     return movieRecommendations;
// };




