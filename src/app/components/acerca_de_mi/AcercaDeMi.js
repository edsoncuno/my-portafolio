import styles from "./AcercaDeMi.module.css";

import Skills from "./Skills";
import Tools from "./Tools";
import Introduction from "./Introduction";

export default function App() {
  return (
    <section id="section_acerca_de_mi" className={styles.app}>
      <Introduction />
      <Tools />
      <Skills />
    </section>
  );
}
