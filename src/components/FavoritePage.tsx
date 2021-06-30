import {
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  makeStyles,
  IconButton,
  Box,
  Typography,
} from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { Cancel } from "@material-ui/icons";
import { GlobalState } from "../interfaces";
import { useAppSelector } from "../hooks/hooks";
import { removeFavorite } from "../features/favorite/favoriteSlice";

function FavoritePage() {
  const dispatch = useDispatch();
  const [favorite, products] = useAppSelector((state) => [
    state.favorite,
    state.products,
  ]);

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} className={classes.main}>
        {favorite.length ? (
          products
            .filter((e) => favorite.includes(e.id))
            .map((e) => (
              <Grid key={e.id} item xs={8} className={classes.card}>
                <Card>
                  <CardHeader
                    title={e.title}
                    subheader={e.price + " $"}
                    action={
                      <IconButton
                        onClick={() => {
                          dispatch(removeFavorite({ id: e.id }));
                        }}
                      >
                        <Cancel />
                      </IconButton>
                    }
                  />
                  <CardMedia image={e.image} className={classes.media} />
                </Card>
              </Grid>
            ))
        ) : (
          <Typography
            variant="h4"
            style={{ margin: "auto" }}
            color="textPrimary"
          >
            Favorite is empty
          </Typography>
        )}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  media: {
    width: 100,
    height: 100,
    margin: 20,
    border: `2px solid ${theme.palette.grey[300]}`,
  },
  main: {
    marginTop: 20,
    padding: theme.spacing(3),
  },
  card: {
    padding: "300px",
    position: "relative",
  },
  action: {
    position: "absolute",
    top: 50,
    right: 12,
  },
}));

export default FavoritePage;
