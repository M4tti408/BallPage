import Image from "next/image";
import { useDispatch } from "react-redux";

import { addToCart } from "../../utils/cart.slice";
import styles from "../../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        height={300}
        width={220}
        className={styles.image}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4 className={styles.title}>{product.product}</h4>
          <h5 className={styles.category}>{product.category}</h5>
        </div>

        <p>$ {product.price}</p>
      </div>

      <button className={styles.button}>
        <a
          href={`/products/${product.identifier}`}
          style={{ textDecoration: "none" }}
        >
          View details
        </a>
      </button>

      <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
}
