import React from "react";
import { Container, Typography } from "@material-ui/core";

import Basic from "./Basic";
import useStyles from "./styles";

const StockEndMaterial = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
        原料特定
      </Typography>
      <Basic />
    </Container>
  );
};

export default StockEndMaterial;

