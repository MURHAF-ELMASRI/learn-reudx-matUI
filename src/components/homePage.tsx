import { makeStyles, Grid, CircularProgress } from '@material-ui/core';
import Card from './card';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { GlobalState } from '../interfaces';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1,
    },

    main: {
        marginTop: theme.spacing(3),
        margin: 'auto',
    },
}));

const HomePage: React.FC<{ state: GlobalState, dispatch: (a: any) => void }> = ({ state = { card: [], products: [], favorite: [] }, dispatch }) => {

    const classes = useStyles();
    useEffect(() => {
        console.log(state);
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data)
                dispatch({ type: 'addProducts', payloads: res.data })
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Grid container className={classes.main} color="dark">
                {state.products.length ? (
                    state.products.map((info) => <Card key={info.id} info={info} />)
                ) : (
                    <CircularProgress style={{ margin: '5rem auto' }} />
                )}
            </Grid>
        </>
    );
}
const mapStateToProps = (state: GlobalState, ownProps: any) => {
    return { state }
}

export default connect(mapStateToProps)(HomePage);
