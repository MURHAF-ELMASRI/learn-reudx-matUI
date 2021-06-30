import { Item, Product } from "../interfaces";

import React from "react";

import {
  makeStyles,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Typography,
} from "@material-ui/core";
import toggleButton from "./util/toggleButton";
import { Favorite, FavoriteBorderOutlined, Add } from "@material-ui/icons";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import { addItem } from "../features/card/cardSlice";

import {
  addFavorite,
  removeFavorite,
} from "../features/favorite/favoriteSlice";

const CardComponent: React.FC<{
  info: Product;
}> = ({ info }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const favorite = useAppSelector((state) => state.favorite);

  const [isAddedFav, toggle] = toggleButton(favorite.includes(info.id));

  //add fav
  const handleClick = () => {
    dispatch(addItem(info));
  };
  const handleAddFav = () => {
    if (isAddedFav) dispatch(removeFavorite({ id: info.id }));
    else dispatch(addFavorite({ id: info.id }));
    toggle();
  };

  return (
    <Grid item xs={4} className={classes.root}>
      <Card className={classes.Card}>
        <CardMedia
          className={classes.media}
          image={info.image}
          title="phone image"
        />
        <CardContent>
          <Typography variant="h6">{info.price}$</Typography>
          <Typography variant="body2" color="textSecondary">
            {info.title}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton color="primary" onClick={() => handleAddFav()}>
            {isAddedFav ? <Favorite /> : <FavoriteBorderOutlined />}
          </IconButton>
          <IconButton color="primary" onClick={() => handleClick()}>
            <Add />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default CardComponent;

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
  },
  media: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  Card: {},
  root: {
    padding: theme.spacing(3),
  },
}));
