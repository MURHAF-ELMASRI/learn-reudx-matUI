import {
    LocalMallOutlined,
    AccountCircleOutlined,
    FavoriteBorderOutlined,
    FilterNone,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
    Typography,
    Toolbar,
    AppBar,
    IconButton,
    makeStyles,
    Badge,
    Switch,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },

    main: {
        marginTop: theme.spacing(3),
        margin: 'auto',
    },
}));

function Header({ card, setDark, isDark }) {
    const classes = useStyles();
    console.log(FilterNone);
    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title}>
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', fontSize: 30 }}
                        >
                            mm Market
                        </Link>
                    </Typography>
                    <Switch
                        checked={!isDark}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        onChange={() => setDark((prev) => !prev)}
                        icon={
                            <img
                                width="35px"
                                style={{
                                    position: 'relative',
                                    right: '15px',
                                    top: '-15px',
                                }}
                                src="https://img.icons8.com/emoji/48/000000/crescent-moon-emoji.png"
                                alt="moon"
                            />
                        }
                        checkedIcon={
                            <img
                                width="35px"
                                style={{
                                    position: 'relative',
                                        right: '2px',
                                        bottom: '8px'
                                }}
                                alt="sun"
                                src="https://img.icons8.com/emoji/48/000000/sun-emoji.png"
                            />
                        }
                    />

                    <IconButton>
                        <AccountCircleOutlined />
                    </IconButton>

                    <Link to="/favorite">
                        <IconButton>
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </Link>
                    <Link to="/card">
                        <Badge color="secondary" badgeContent={card.length}>
                            <IconButton>
                                <LocalMallOutlined />
                            </IconButton>
                        </Badge>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { card: state.card };
};

export default connect(mapStateToProps)(Header);
