import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { fade, makeStyles } from "@material-ui/core/styles";

// import IconButton from "@material-ui/core/IconButton";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MenuIcon from "@material-ui/icons/Menu";


import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const MainAppBar = ({ history }) => {
  const classes = useStyles();

  // Enable once login as been sorted
  // const menuId = "primary-search-account-menu";
  // const mobileMenuId = "primary-search-account-menu-mobile";

  const enterPressed = (event) => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      fetchMoviesHandler(event);
    }
  };

  const fetchMoviesHandler = (event) => {
    event.preventDefault();
    history.push(`/movies/${event.target.value}`);
  };

  return (
    <div id="main-app-bar" className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {/* Mobile nav bar */}
          {/*<div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              aria-controls={mobileMenuId}
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            </div>*/}
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/movie-database/">
              <Button variant="contained" color="primary">
                Movie-DB
              </Button>
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onKeyPress={enterPressed}
            />
          </div>
          <div className={classes.grow} />
          {/* Enable once login as been sorted*/}
          {/*<div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(MainAppBar);
