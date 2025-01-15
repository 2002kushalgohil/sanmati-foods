"use client";
import { useRef } from "react";
import styles from "../styles/imageAnimation.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageAnimation({ imageLinks }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const mdY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const lgY = useTransform(scrollYProgress, [0, 1], [250, -250]);

  const mdRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const lgRotate = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const images = [
    {
      y: 0,
      rotate: 0,
    },
    {
      y: lgY,
      rotate: lgRotate,
    },
    {
      y: mdY,
      rotate: mdRotate,
    },
  ];

  return (
    <div ref={container} className={styles.images}>
      {images.map(({ src, y, rotate }, i) => {
        return (
          <motion.div
            style={{ y, rotate }}
            key={`i_${i}`}
            className={styles.imageContainer + " rounded-lg md:rounded-none overflow-hidden"}
          >
            <img src={imageLinks[i]} alt="image" />
          </motion.div>
        );
      })}
    </div>
  );
}
