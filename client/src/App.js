import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddPhone from "./components/AddPhone/AddPhone";
import { getAuthUser } from "./JS/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
// import PhoneDetails from "./components/PhoneDetails/PhoneDetails";

function App() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const [textSearch, setTextSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, [isAuth]);

  return (
    <div className="App">
      <header>
        <Header setTextSearch={setTextSearch} />
      </header>

      <main>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/main"
            render={(rest) => <Main textSearch={textSearch} {...rest} />}
          />

          <Route
            exact
            path="/phones/phonedetails/:myid"
            render={(defaultProps) => <PhoneDetails {...defaultProps} />}
          />
          {/* <Route
            exact
            path="/(add-phone|edit-phone)/"
            render={(defaultProps) => <AddPhone {...defaultProps} />}
          /> */}
          <Route
            exact
            path="/login"
            render={(defaultProps) => <Login {...defaultProps} />}
          />
          <Route
            exact
            path="/register"
            render={(defaultProps) => <Register {...defaultProps} />}
          />
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
