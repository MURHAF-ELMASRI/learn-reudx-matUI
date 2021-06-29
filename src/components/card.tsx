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

const addFavorite = (item) => {
    return { type: 'addFavorite', payloads: item };
};

const removeFavorite = (id) => {
    return { type: 'removeFavorite', id };
};
const AddItem = (item) => {
    return { type: 'addItem', payloads: item }
}
const removeItem = (id) => {
    return { type: 'removeItem', id }
}

function CardComponent({ info, state, dispatch }) {
    const classes = useStyles();
    const [isAddedFav, toggle]: [boolean, () => void] = toggleButton();

    //add fav
    const handleClick = () => {
        if (isAddedFav)
            dispatch(AddItem(info))

    };
    const handleAddFav = () => {
        if (isAddedFav)
            dispatch(addFavorite(info))
        else
            dispatch(removeFavorite(info))
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
                    <IconButton color="primary" onClick={() => handleClick()}>
                        {isAddedFav ? <Favorite /> : <FavoriteBorderOutlined />}
                    </IconButton>
                    <IconButton color="primary" onClick={() => handleAddFav()}>
                        <Add />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}


export default connect()(CardComponent);
