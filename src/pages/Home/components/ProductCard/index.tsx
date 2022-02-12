import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MockProduct from "../../../../assets/mock-product.png";
import { addItem, calculateTotal } from "../../../../redux/reducers/cartSlice";
import { ProductType } from "../../../../types/productType";
import { RootState } from "../../../../redux/store";
import { useMemo } from "react";

interface ProductCardProps {
  product: ProductType;
}

function ProductCard(props: ProductCardProps) {
  const dispatch = useDispatch();
  const { product } = props;
  const { added: id, name, price } = product;
  const { items } = useSelector((state: RootState) => state.cart);

  const isItemAlreadyInCart = useMemo(
    () => items.some((item) => item.id === id),
    [id, items]
  );

  return (
    <article style={{ height: "100%" }}>
      <Box style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            borderRadius: "12px",
            border: "1px solid",
            borderColor: "#F3F0FE",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "16px",
          }}
        >
          <img src={MockProduct} alt="product" />
        </Box>
        <Box
          sx={{
            marginTop: "8px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minHeight: "98px",
          }}
        >
          <Typography variant="body2" fontWeight={700} color={"primary"}>
            ₺ {price}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {name}
          </Typography>
          <Button
            variant="contained"
            disabled={isItemAlreadyInCart}
            fullWidth
            sx={{ boxShadow: "none", marginTop: "auto" }}
            onClick={() => {
              dispatch(addItem({ id, ...product }));
              dispatch(calculateTotal());
            }}
          >
            {isItemAlreadyInCart ? "Already in cart" : "Add"}
          </Button>
        </Box>
      </Box>
    </article>
  );
}

export default ProductCard;
