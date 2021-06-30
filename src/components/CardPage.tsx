import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  CardActions,
  makeStyles,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import { DeleteForever, ArrowBackIos } from "@material-ui/icons";

import { GlobalState } from "../interfaces";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/hooks";
import { removeItem, removeOneItem, addItem } from "../features/card/cardSlice";

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

function CardPage() {
  const dispatch = useDispatch();
  const card = useAppSelector((state) => state.card);

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} className={classes.main}>
        {card.length ? (
          card.map((e) => (
            <Grid key={e.id} item xs={8} className={classes.card}>
              <Card>
                <CardHeader
                  title={e.title}
                  subheader={e.price + " $"}
                  action={
                    <IconButton
                      onClick={() => {
                        dispatch(removeItem({ id: e.id }));
                      }}
                    >
                      <DeleteForever />
                    </IconButton>
                  }
                />
                <CardMedia image={e.image} className={classes.media} />

                <CardActions className={classes.action}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <IconButton
                      onClick={() => {
                        dispatch(addItem(e));
                      }}
                    >
                      <ArrowBackIos
                        style={{
                          transform: "rotate(90deg)",
                        }}
                      />
                    </IconButton>
                    <Box color="primary" fontSize="2rem">
                      {e.count}
                    </Box>
                    <IconButton
                      onClick={() => {
                        dispatch(removeOneItem({ id: e.id }));
                      }}
                    >
                      <ArrowBackIos
                        style={{
                          transform: "rotate(-90deg)",
                        }}
                      />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h4"
            style={{ margin: "auto" }}
            color="textPrimary"
          >
            Card is empty
          </Typography>
        )}
        <Grid xs={4}>
          {card.length !== 0 && (
            <Typography variant="h3">
              Total:
              {card.reduce((count, e) => e.price * e.count + count, 0)}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}
export default CardPage;
