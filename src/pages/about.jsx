import { color } from "@mui/system";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about}>
          <p style={{ marginBottom: "25px", color: "var(--font2-color)"}}>CEO</p>
          <p style={{ marginBottom: "25px" }}>Dwayne Paper</p>
          <img
            src="/images/about/dwayne_paper.png"
            width={250}
            height={250}
            style={{ borderRadius: "50%" }}
          />
        </div>

        <div className={styles.about}>
        <p style={{ marginBottom: "25px", color: "var(--font2-color)"}}>Chief Executive</p>
          <p style={{ marginBottom: "25px" }}>Kevin Soft</p>
          <img
            src="/images/about/kevin_soft.png"
            width={250}
            height={250}
            style={{ borderRadius: "50%" }}
          />
        </div>

        <div className={styles.about}>
        <p style={{ marginBottom: "25px", color: "var(--font2-color)"}}>Location</p>
          <p style={{ marginBottom: "25px" }}>Bern, Schweiz</p>
          <img
            src="/images/about/location.jpg"
            width={250}
            height={250}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
    </>
  );
}
