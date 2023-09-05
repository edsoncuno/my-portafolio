import styles from "./page.module.css";

import Inicio from "./components/inicio/Inicio";
import AcercaDeMi from "./components/acerca_de_mi/AcercaDeMi";
import Proyectos from "./components/proyectos/Proyectos";

export default function App() {
  return (
    <main className={styles.app}>
      <Inicio />
      <AcercaDeMi />
      <Proyectos />
    </main>
  );
}
