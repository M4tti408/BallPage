import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Copyright <span className={styles.brand}>Loïc Imhof</span> &copy; |{" "}
        {new Date().getFullYear()}
      </div>

      <div>
        <a
          href="/documents/impressum.pdf"
          style={{ textDecoration: "none", color: "var(--font2-color)" }}
        >
          Impressum
        </a>
      </div>
    </footer>
  );
}
