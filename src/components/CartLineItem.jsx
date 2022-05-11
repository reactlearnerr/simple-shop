import {
  Delete,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import {
  LineItem,
  ProductInfo,
  ProductQty,
  ProductTotal,
  QtyContainer,
} from "../styles/Cart";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  getTotal,
  increaseQty,
  removeItem,
} from "./redux/cartSlice";

const CartLineItem = ({ product }) => {
  const dispatch = useDispatch();
  const productTotal = (product.price * product.qty).toFixed(2);
  return (
    <LineItem>
      <img
        src={product.image}
        width={"150px"}
        height="100px"
        style={{ objectFit: "contain" }}
        alt={product.title.substring(0, 20)}
      />
      <ProductInfo>
        <Typography variant="h5">{product.title}</Typography>
        <p style={{ margin: "0.5rem" }}>
          <b
            style={{
              textDecoration: "underline",
              marginRight: "0.5rem",
            }}
          >
            Category:
          </b>
          {product.category}
        </p>
      </ProductInfo>
      <ProductQty>
        <QtyContainer>
          <KeyboardArrowUpOutlined
            onClick={() => {
              dispatch(increaseQty(product));
              dispatch(getTotal());
            }}
            sx={{ cursor: "pointer" }}
          />
          <input
            style={{
              width: "35px",
              textAlign: "right",
            }}
            type="number"
            readOnly
            value={product.qty}
          />
          <KeyboardArrowDownOutlined
            onClick={() => {
              dispatch(decreaseQty(product));
              dispatch(getTotal());
            }}
            sx={{ cursor: "pointer" }}
          />
        </QtyContainer>
        <Typography variant="h5">x</Typography>
        <Typography sx={{ fontSize: "1.25rem" }} variant="h5">
          $ {product.price}
        </Typography>
      </ProductQty>
      <ProductTotal variant="h5">$ {productTotal}</ProductTotal>
      <IconButton
        sx={{ alignSelf: "flex-start", padding: "4px" }}
        onClick={() => dispatch(removeItem(product.id))}
      >
        <Delete color="error" />
      </IconButton>
    </LineItem>
  );
};

export default CartLineItem;
