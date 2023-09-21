import styles from "./Proyectos.module.css";
import Cards from "./Cards";

export default function App() {
  return (
    <section id="section_proyectos" className={styles.app}>
      <div className={styles.text}>
        <h2>Proyectos</h2>
        <p>
          En mi viaje en el mundo de la informática ha estado marcado por una
          serie de proyectos personales que he desarrollado con pasión y
          dedicación a lo largo de mis estudios. Estos proyectos no solo
          reflejan mi interés en la tecnología, sino también mi compromiso con
          la búsqueda constante de soluciones innovadoras. Algunos ejemplos
          destacados de mi trabajo incluyen:
        </p>
      </div>
      <Cards />
    </section>
  );
}
