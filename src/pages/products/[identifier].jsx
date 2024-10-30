import Image from "next/image";

import styles from "../../styles/Products.module.css";
import { getProductByIdentifier } from "../api/products/[identifier]";

export default function CategoryPage({ products }) {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {products.map((product) => (
          <>
            <Image
              src={product.image}
              height={300}
              width={220}
              className={styles.image}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 className={styles.title1}>{product.product}</h4>
              <h5 className={styles.category1}>{product.category}</h5>
              <p>$ {product.price}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const identifier = ctx.query.identifier;
  const products = await getProductByIdentifier(identifier);
  return { props: { products } };
}
