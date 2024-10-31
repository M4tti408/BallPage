import ImageGallery from "react-image-gallery";

import styles from "../styles/Gallery.module.css";

const images = [
  {
    original: "/images/gallery/ball1.jpg",
    originalAlt: "Ball 1",
  },
  {
    original: "/images/gallery/ball2.jpg",
    originalAlt: "Ball 2",
  },
  {
    original: "/images/gallery/ball3.jpg",
    originalAlt: "Ball 3",
  },
  {
    original: "/images/gallery/ball4.jpg",
    originalAlt: "Ball 4",
  },
  {
    original: "/images/gallery/ball5.jpg",
    originalAlt: "Ball 5",
  },
  {
    original: "/images/gallery/ball6.jpg",
    originalAlt: "Ball 6",
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
