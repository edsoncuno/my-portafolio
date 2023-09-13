"use client";
import styles from "./Badges.module.css";
import { useState } from "react";

export default function App(props) {
  const list = props.list.map((item, index) => (
    <Item
      key={"id_" + index}
      name={item.name}
      url={item.url}
      shadowColor={item.shadowColor}
    />
  ));
  return <div className={styles.app}>{list}</div>;
}

function Item(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={styles.item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: `0 0 1rem ${isHovered ? props.shadowColor : "transparent"}`,
      }}
    >
      <div
        className={styles.icon}
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "90% 90%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.name}>{props.name}</div>
    </article>
  );
}
