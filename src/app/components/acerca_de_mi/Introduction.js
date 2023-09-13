import styles from "./Introduction.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text1}>Hola</div>
          <div className={styles.text2}>Soy Edson Cuno</div>
          <div className={styles.photo}></div>
          <div className={styles.text3}>
            Estudiante de Ingeniería Informática
          </div>
          <div className={styles.text4}>
            Soy Edson Diego Cuno Tipso. Nací y resido en Lima - Perú. Soy
            estudiante de la Universidad Ricardo Palma, interesado en el
            desarrollo de aplicaciones y servicos web.
          </div>
        </div>
      </div>
    </div>
  );
}
