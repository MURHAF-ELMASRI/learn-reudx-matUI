import { Item, Product, GlobalState } from '../interfaces'

import React from 'react'

import {
    makeStyles,
    IconButton,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Grid,
    Typography,
} from '@material-ui/core';
import toggleButton from './util/toggleButton';
import { Favorite, FavoriteBorderOutlined, Add } from '@material-ui/icons';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
    },
    media: {
        width: '100%',
        height: 200,
        objectFit: 'cover',
    },
    Card: {},
    root: {
        padding: theme.spacing(3),
    }
}));

const addFavorite = (item: Product) => {
    return { type: 'addFavorite', payloads: item };
};

const removeFavorite = (id: number) => {
    return { type: 'removeFavorite', payloads: id };
};
const AddItem = (item: Item) => {
    return { type: 'addItem', payloads: item }
}

const CardComponent: React.FC<{ info: any, state: GlobalState, dispatch: (a: any) => void }> = ({ info, state, dispatch }) => {
    const classes = useStyles();
    const [isAddedFav, toggle]: [boolean, () => void] = toggleButton(state.favorite.includes(info.id));

    //add fav
    const handleClick = () => {
        dispatch(AddItem(info))
    };
    const handleAddFav = () => {
        if (isAddedFav)
            dispatch(removeFavorite(info.id))
        else
            dispatch(addFavorite(info))
        toggle();
    }

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
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
    return { state }
}

export default connect(mapStateToProps)(CardComponent);
