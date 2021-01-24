import Home from './components/homePage';
import Favorite from './components/FavoritePage';
import Card from './components/CardPage';
import Header from './components/Header';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';
import { blue,red} from '@material-ui/core/colors';
import { Reducer } from './Reducer';
import { useState } from 'react';
const store = createStore(Reducer, devToolsEnhancer());

export default function App() {
    const [isDark, setDark] = useState(false);

    const darkTheme = createMuiTheme({
        palette: {
            type:'light',
            primary:blue
        },
    });

    const lightTheme = createMuiTheme({
        palette: {
            type:'dark',
            primary: red
        },
    });
    return (
        <ThemeProvider theme={isDark?darkTheme:lightTheme}>
            <Paper>
                <ReduxProvider store={store}>
                    <BrowserRouter>
                        <Header isDark={isDark} setDark={setDark} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/favorite" component={Favorite} />
                            <Route path="/card" component={Card} />
                        </Switch>
                    </BrowserRouter>
                </ReduxProvider>
            </Paper>
        </ThemeProvider>
    );
}
