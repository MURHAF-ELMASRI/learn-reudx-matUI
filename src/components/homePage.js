import { makeStyles, Grid, CircularProgress } from '@material-ui/core';
import Card from './card';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

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

function HomePage({ state }) {
    const [products, setProduct] = useState([]);

    const classes = useStyles();
    useEffect(() => {
        console.log(state);
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [state]);

    return (
        <>
            <Grid container className={classes.main} color="dark">
                {products.length ? (
                    products.map((info) => <Card key={info.id} info={info} />)
                ) : (
                    <CircularProgress style={{ margin: '5rem auto' }} />
                )}
            </Grid>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { state };
};

export default connect(mapStateToProps)(HomePage);
