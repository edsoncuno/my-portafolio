import styles from "./Inicio.module.css";

export default function App() {
  return (
    <section id="section_inicio" className={styles.app}>
      <div className={styles.left}>
        <div className={styles.greeting}>
          <div className={styles.phrase}>
            CONSTRUIR SOFTWARE<span className={styles.textCursor}></span>
          </div>
          <div className={styles.name}>¡Hola! Soy Edson Cuno</div>
          <div className={styles.description}>
            Analista de Datos y Desarrollador Front-End
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.photo}></div>
      </div>
    </section>
  );
}
