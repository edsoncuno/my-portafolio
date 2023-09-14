import styles from "./Inicio.module.css";

export default function App() {
  return (
    <section id="section_inicio" className={styles.app}>
      <div className={styles.left}>
        <div className={styles.greeting}>
          <h1 className={styles.phrase}>
            CONSTRUIR SOFTWARE<span className={styles.textCursor}></span>
          </h1>
          <div className={styles.name}>
            ¡Hola! Soy
            <div className={styles.containerTypingText}>
              <div className={styles.typingText}>Edson Cuno</div>
            </div>
          </div>
          <div className={styles.description}>
            Analista de Datos y Desarrollador Front-End
          </div>
          <div className={styles.links}>
            <a href={"https://github.com/edsoncuno"} target="_blank">
              <div className={styles.iconGithub}></div>
              <div>Github</div>
            </a>
            <a>
              <div className={styles.iconLinkedIn}></div>
              <div>LinkedIn</div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.photo}></div>
      </div>
    </section>
  );
}
