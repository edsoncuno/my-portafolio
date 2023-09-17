import styles from "./Tools.module.css";
import Badges from "./Badges";

export default function App() {
  const tools = [
    {
      url: "./tools/Microsoft_Office_logo.svg",
      name: "Microsoft Office",
      shadowColor: "#eb3c00",
    },
    {
      url: "./tools/New_Power_BI_Logo.svg",
      name: "Power BI",
      shadowColor: "#e3ad11",
    },
    {
      url: "./tools/visual-studio-code-logo-svgrepo-com.svg",
      name: "Visual Studio Code",
      shadowColor: "#0179cb",
    },
    {
      url: "./tools/ubuntu-svgrepo-com.svg",
      name: "Ubuntu",
      shadowColor: "#e95420",
    },
    {
      url: "./tools/microsoft-windows-22-logo-svgrepo-com.svg",
      name: "Windows",
      shadowColor: "#00adef",
    },
    {
      url: "./tools/debian-svgrepo-com.svg",
      name: "Debian",
      shadowColor: "#a80030",
    },
    {
      url: "./tools/archlinux-svgrepo-com.svg",
      name: "Arch Linux",
      shadowColor: "#1793d1",
    },
  ];

  return (
    <div className={styles.app}>
      <h3>Herramientas</h3>
      <p>
        Mi conjunto de herramientas tecnológicas que utilizo para aumentar mi
        eficacia y creatividad en el mundo de la informática, que normalmente
        uso, son:
      </p>
      <div className={styles.container}>
        <Badges list={tools} />
      </div>
    </div>
  );
}
