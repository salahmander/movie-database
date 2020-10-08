import React from "react";

import { imageURL } from "../../../constant";
import { descriptionChecker } from "../../../utility/utility";

import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";

import noImage from "../../../assets/images/noImage.jpg";

const useStyles = makeStyles({
  card: {
    display: "flex",
    minHeight: 230,
  },
  cardDetails: {
    flex: 3,
  },
  cardMedia: {
    width: 160,
    flex: 1,
  },
  linkStyle: {
    textDecoration: "none",
  },
});

const MovieCard = (props) => {
  const classes = useStyles();

  const { movie } = props;

  const actionCardHandler = (event) => {
    event.preventDefault();
    props.history.push(`/movie/${movie.media_type}/${movie.id}`);
  };

  const poster = movie.poster_path
    ? `${imageURL}w154${movie.poster_path}`
    : noImage;

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <CardActionArea onClick={actionCardHandler}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {movie.title} {movie.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {movie.release_date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {movie.overview
                  ? descriptionChecker(movie.overview)
                  : "No Description :("}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <img className={classes.cardMedia} src={poster} alt="" />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default withRouter(MovieCard);
