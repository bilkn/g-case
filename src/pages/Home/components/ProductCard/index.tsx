import { Box, Button, Typography } from "@mui/material";
import MockProduct from "../../../../assets/mock-product.png";

interface ProductCardProps {
  price: string;
  name: string;
}

function ProductCard(props: ProductCardProps) {
  const { price, name } = props;

  return (
    <article>
      <Box>
        <Box
          sx={{
            borderRadius: "12px",
            border: "1px solid",
            borderColor: "#F3F0FE",
            padding: "16px",
          }}
        >
          <img src={MockProduct} alt="product" />
        </Box>
        <Box sx={{ marginTop: "8px" }}>
          <Typography variant="body2" fontWeight={700} color={"primary"}>
            {price}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {name}
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{ boxShadow: "none", marginTop: "8px" }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </article>
  );
}

export default ProductCard;
