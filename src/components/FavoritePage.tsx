
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

} from '@material-ui/core';
import { connect } from 'react-redux';
import { Cancel } from '@material-ui/icons';
import { GlobalState } from '../interfaces';

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
        padding: '300px',
        position: 'relative',
    },
    action: {
        position: 'absolute',
        top: 50,
        right: 12,
    },
}));

function FavoritePage({ state, dispatch }: { state: GlobalState, dispatch: (a: any) => void }) {
    console.log(state);
    const classes = useStyles();
    console.log(state.products.filter(e => state.favorite.includes(e.id)))


    return (
        <>
            <Grid container spacing={3} className={classes.main}>
                {state.favorite.length ? (
                    state.products.filter(e => state.favorite.includes(e.id)).map((e) =>
                    (
                        <Grid key={e.id} item xs={8} className={classes.card}>
                            <Card>
                                <CardHeader
                                    title={e.title}
                                    subheader={e.price + ' $'}
                                    action={
                                        <IconButton
                                            onClick={() => {
                                                dispatch({ type: 'removeFavorite', payloads: { id: e.id } })
                                            }}
                                        >
                                            <Cancel />
                                        </IconButton>
                                    }
                                />
                                <CardMedia
                                    image={e.image}
                                    className={classes.media}
                                />

                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography
                        variant="h4"
                        style={{ margin: 'auto' }}
                        color="textPrimary"
                    >
                        Favorite is empty
                    </Typography>
                )}
            </Grid>
        </>
    );
}

const mapStateToProps = (state: GlobalState, ownProps: () => void) => {
    return { state };
};

export default connect(mapStateToProps)(FavoritePage);
