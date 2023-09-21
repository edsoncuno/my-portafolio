"use client";
import styles from "./Header.module.css";
import { useState } from "react";

export default function App() {
  const [isShowingSideBar, setIsShowingSideBar] = useState(false);

  const sections = [
    { href: "#section_inicio", name: "INICIO" },
    { href: "#section_acerca_de_mi", name: "ACERCA DE MÍ" },
    { href: "#section_proyectos", name: "PROYECTOS" },
  ];

  const list = sections.map((item) => (
    <li key={"id_" + item.name}>
      <a href={item.href} onClick={(e) => scrollToSection(e)}>
        {item.name}
      </a>
    </li>
  ));

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    setIsShowingSideBar(false)
  }

  function handleSideBar() {
    setIsShowingSideBar(!isShowingSideBar);
  }


  return (
    <header className={styles.app}>
      <div className={styles.bars} onClick={handleSideBar}></div>
      <a
        href="#section_inicio"
        className={styles.logo}
        onClick={(e) => scrollToSection(e)}
      ></a>
      <nav className={`${isShowingSideBar ? styles.open : ""}`}>
        <ul>{list}</ul>
      </nav>
    </header>
  );
}
