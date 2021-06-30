import { makeStyles, Grid, CircularProgress } from "@material-ui/core";
import Card from "./card";
import { connect, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { GlobalState, Product } from "../interfaces";
import axios from "axios";
import { addProducts } from "../features/product/productSlice";
import { useAppSelector } from "../hooks/hooks";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },

  main: {
    marginTop: theme.spacing(3),
    margin: "auto",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(addProducts(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Grid container className={classes.main} color="dark">
        {products.length ? (
          products.map((info: Product) => <Card key={info.id} info={info} />)
        ) : (
          <CircularProgress style={{ margin: "5rem auto" }} />
        )}
      </Grid>
    </>
  );
};
const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return { state };
};

export default HomePage;
