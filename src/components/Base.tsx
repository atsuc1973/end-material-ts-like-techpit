import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container, Typography } from "@material-ui/core";
import ProductMaterial from "./ProductMaterial";
import FormStockEndMaterial from "./FormStockEndMaterial";
import useStyles from "./styles";

const Base = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
      </Typography>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductMaterial} />
          <Route exact path="/formStockEndMaterial" component={FormStockEndMaterial} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default Base;

