import React from "react";
import HomeRouter from "./components/home/HomeRouter";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store";
import palette from "./theme/options/palette";
import ThemeProvider from "./theme/ThemeProvider";

const theme = createTheme({
  palette,
});

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <HomeRouter />
        </Provider>
      </ThemeProvider>{" "}
    </BrowserRouter>
  );
};

export default App;
