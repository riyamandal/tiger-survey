import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Header />
      </Link>
      <Link to="/createSurvey" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary">
          Create Survey
        </Button>
      </Link>
      <Button variant="contained" color="secondary">
        Take Survey
      </Button>
    </div>
  );
}

export default withRouter(Home);
