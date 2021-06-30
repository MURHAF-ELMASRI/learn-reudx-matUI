import { useState, useMemo } from "react";

import Home from "./components/homePage";
import Favorite from "./components/FavoritePage";
import Card from "./components/CardPage";
import Header from "./components/Header";

import { Provider as ReduxProvider } from "react-redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

import store from "./store";

export default function App() {
  const [isDark, setDark] = useState(false);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDark ? "dark" : "light",
          primary: isDark ? blue : red,
        },
      }),
    [isDark]
  );

  return (
    <ThemeProvider theme={theme}>
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
