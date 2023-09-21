import styles from "./Introduction.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Acerca de mí</h2>
          <p>
            Estudiante de Ingeniería Informática con conocimientos en Data
            Science y desarrollo web.
          </p>
          <p>
            Actualmente, me dedico a incrementar mis habilidades con el manejo
            de los datos y modelado predictivo y de clasificación. También a
            construir sitios web para pequeños negocios.
          </p>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
