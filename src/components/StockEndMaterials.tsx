import React from "react";
import { Container, Typography } from "@material-ui/core";

import ProductMaterial from "./ProductMaterial";
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
      <ProductMaterial />
    </Container>
  );
};

export default StockEndMaterial;

