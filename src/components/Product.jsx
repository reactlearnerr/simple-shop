import { Box, Button, Rating, styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "../components/redux/cartSlice";

const StyledItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: auto;
  background: #eee;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const Image = styled(Box)`
  flex: 2;
`;

const ProductInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  flex: 1;
`;

const ProductTitle = styled(Typography)`
  font-weight: 0.75rem;
  padding: 0.75rem;
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <StyledItem>
      <Image>
        <img
          width={"100%"}
          src={product.image}
          alt={product.title}
          height="250px"
          style={{ objectFit: "scale-down" }}
        />
      </Image>

      <ProductInfo>
        <ProductTitle variant="h5">
          {product.title.substring(0, 20)}
        </ProductTitle>
        <Box display={"flex"} gap={1}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating.rate}
            precision={0.5}
            readOnly
          />
          ({product.rating.count})
        </Box>
        <Typography>MRP: ${product.price}</Typography>
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            dispatch(addToCart({ ...product, qty: 1 }));
            dispatch(getTotal());
          }}
        >
          ADD TO CART
        </Button>
      </ProductInfo>
    </StyledItem>
  );
};

export default Product;
