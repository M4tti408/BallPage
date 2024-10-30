import ProductCard from "../components/organisms/ProductCard";
import styles from "../styles/Products.module.css";
import { getProducts } from "./api/products/index";

export default function Products({ products }) {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
