import { Box, CircularProgress, Container, Grid } from "@mui/material";
import Product from "../components/Product";
import Title from "../components/Title";

const Products = ({ products, isLoading }) => {
  return (
    <Container maxWidth="lg">
      <Title title="Our Products" />
      {isLoading && (
        <CircularProgress sx={{ marginLeft: "50%" }} color="success" />
      )}
      <Grid container columnSpacing={1} rowSpacing={2}>
        {products.map((product, idx) => {
          return (
            <Grid item key={idx} xs={12} md={4}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
