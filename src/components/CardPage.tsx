import React, { useState, useEffect } from 'react';
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
} from '@material-ui/core';
import { connect } from 'react-redux';
import { DeleteForever, ArrowBackIos } from '@material-ui/icons';

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
        right: 12
    },
}));

function CardPage({ state, dispatch }: { state: GlobalState, dispatch: (a: any) => void }) {
    console.log(state);
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3} className={classes.main}>
                {state.card.length ? (
                    state.card.map((e) => (
                        <Grid key={e.id} item xs={8} className={classes.card}>
                            <Card>
                                <CardHeader
                                    title={e.title}
                                    subheader={e.price + ' $'}
                                    action={
                                        <IconButton
                                            onClick={() => {
                                                dispatch({ type: "removeItem", payloads: { id: e.id } })
                                            }}
                                        >
                                            <DeleteForever />
                                        </IconButton>
                                    }
                                />
                                <CardMedia
                                    image={e.image}
                                    className={classes.media}
                                />

                                <CardActions className={classes.action}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                    >
                                        <IconButton
                                            onClick={() => {
                                                dispatch({ type: 'addItem', payloads: e })
                                            }}
                                        >
                                            <ArrowBackIos
                                                style={{
                                                    transform: 'rotate(90deg)',
                                                }}
                                            />
                                        </IconButton>
                                        <Box color="primary" fontSize="2rem">
                                            {e.cnt}
                                        </Box>
                                        <IconButton
                                            onClick={() => {
                                                dispatch({ type: 'removeOneItem', payloads: { id: e.id } })
                                            }}
                                        >
                                            <ArrowBackIos
                                                style={{
                                                    transform: 'rotate(-90deg)',
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
                        style={{ margin: 'auto' }}
                        color="textPrimary"
                    >
                        Card is empty
                    </Typography>
                )}
                <Grid xs={4} >
                    {
                        state.card.length !== 0 && (<Typography variant='h3'>
                            Total:{state.card.reduce((count, e) => e.price * e.cnt + count, 0)}
                        </Typography>)
                    }
                </Grid>
            </Grid>
        </>
    );
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
    return { state }
}

export default connect(mapStateToProps)(CardPage);
