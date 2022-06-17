import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

function CartWidget () {
    return (
        <Box sx={{ flexGrow: 0 }}>
  <IconButton
    title="Carrito"
    sx={{ p: 0, color: "white" }}
  >
    <AddShoppingCartIcon />
    <h6>7</h6>
  </IconButton>
</Box>);
}


export default CartWidget;
