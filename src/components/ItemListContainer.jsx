import { render } from "@testing-library/react";
import Typography from "@mui/material/Typography";

const ItemListContainer = function (props) {
  return (
    <Typography
      variant="h6"
      fontFamily={"monospace"}
      sx={{
        textAlign: "center",
        fontFamily: "monospace",
        letterSpacing: ".1rem",
        color: "inherit",
      }}
    >
      {props.greeting}
    </Typography>
  );
};

render(
  <ItemListContainer greeting="¡Bienvenido a Tiendita de café!" />,
  document.getElementById("root")
);

export default ItemListContainer;
