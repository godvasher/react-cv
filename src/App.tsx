import React, { FunctionComponent } from "react";
import { useCallback } from "react";
import { UpCircleOutlined } from "@ant-design/icons";
import { BackTop } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imported views
import NotFoundView from "./views/NotFoundView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

interface IProps {}

const App: FunctionComponent<IProps> = (props) => {
  const scrollToTop = useCallback(() => {
    const rootNodeRef = document.getElementById("root");

    rootNodeRef?.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route path="/">
            <LoginView />
          </Route>

          <Route path="/">
            <NotFoundView />
          </Route>
        </Switch>
      </Router>

      <BackTop visible onClick={scrollToTop}>
        <UpCircleOutlined color="#000" />
      </BackTop>
    </>
  );
};

export default App;
