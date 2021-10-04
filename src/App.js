import { Redirect, Route, Switch } from "react-router";

import Layout from "./components/layout/Layout";

import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
  const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
  const NotFound = React.lazy(() => import("./components/pages/NotFound"));
  const QuoteDetail = React.lazy(() =>
    import("./components/pages/QuoteDetail")
  );

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
