import React from "react";

import { withRouter } from "react-router-dom";
import { imageURL } from "../../../constant";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import noImage from "../../../assets/images/noImage.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 160,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  card: {
    minHeight: 380,
    backgroundColor: "#fff",
  },
  media: {
    width: 160,
    height: 220,
  },
});

const SideScrollCard = (props) => {
  const classes = useStyles();

  const { movie, media } = props;

  const actionCardHandler = (event) => {
    event.preventDefault();
    // Now playing(movies), On the air(tv) and recommendation do not have a media_type
    // field, they need to be passed in.
    if (movie.media_type) {
      props.history.push(`/movie/${movie.media_type}/${movie.id}`);
    } else {
      props.history.push(`/movie/${media}/${movie.id}`);
    }
  };

  const poster = movie.poster_path
    ? `${imageURL}w154${movie.poster_path}`
    : noImage;

  return (
    <div className="side-scroll-card-container">
      <CardActionArea className={classes.root} onClick={actionCardHandler}>
        <Card className={classes.card}>
          <img className={classes.media} src={poster} alt="" />
          <CardContent>
            <Typography component="h6">
              {movie.title} {movie.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {movie.release_date} {movie.first_air_date}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
};

export default withRouter(SideScrollCard);
