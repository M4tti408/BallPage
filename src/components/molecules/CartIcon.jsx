import Link from "next/link";
import { useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function CartIcon() {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
      <Tooltip title="Cart">
        <Link href="/cart" passHref>
          <IconButton size="small" sx={{ ml: 2 }} style={{ color: "var(--font1-color)" }}>
            <Badge badgeContent={getItemsCount()} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Link>
      </Tooltip>
  );
}
