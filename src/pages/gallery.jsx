import ImageGallery from "react-image-gallery";

import styles from "../styles/Gallery.module.css";

const images = [
  {
    original: "/images/gallery/fan1.jpg",
    originalAlt: "Fan 1",
  },
  {
    original: "/images/gallery/fan2.jpg",
    originalAlt: "Fan 2",
  },
  {
    original: "/images/gallery/fan3.jpg",
    originalAlt: "Fan 3",
  },
  {
    original: "/images/gallery/fan4.jpg",
    originalAlt: "Fan 4",
  },
  {
    original: "/images/gallery/fan5.jpg",
    originalAlt: "Fan 5",
  },
  {
    original: "/images/gallery/fan6.jpg",
    originalAlt: "Fan 6",
  },
];

export default function Gallery() {
  return (
    <div className={styles.container}>
      <ImageGallery
        items={images}
        infinite={true}
        showFullscreenButton={true}
        showPlayButton={true}
        // showBullets={true}
        onErrorImageURL={true}
      />
    </div>
  );
}
