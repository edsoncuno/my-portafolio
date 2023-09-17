import styles from "./Skills.module.css";
import Badges from "./Badges";

export default function App() {
  const skills = [
    {
      url: "./skills/fastapi-1.svg",
      //url: "/../../../../skills/fastapi-1.svg",
      name: "FastAPI",
      shadowColor: "#05998b",
    },
    {
      url: "/../../../../skills/css-3-svgrepo-com.svg",
      name: "CSS",
      shadowColor: "#1172b8",
    },
    {
      url: "/../../../../skills/git-svgrepo-com.svg",
      name: "Git",
      shadowColor: "#ee513b",
    },
    {
      url: "/../../../../skills/github-142-svgrepo-com.svg",
      name: "Github",
      shadowColor: "#000000",
    },
    {
      url: "/../../../../skills/html-5-svgrepo-com.svg",
      name: "HTML 5",
      shadowColor: "#e44d26",
    },
    {
      url: "/../../../../skills/javascript-logo-svgrepo-com.svg",
      name: "JavaScript",
      shadowColor: "#f7df1e",
    },
    {
      url: "/../../../../skills/microsoft-sql-server-logo-svgrepo-com.svg",
      name: "Microsoft SQL Server",
      shadowColor: "#af2c31",
    },
    {
      url: "/../../../../skills/mysql-official.svg",
      name: "MySQL",
      shadowColor: "#e69510",
    },
    {
      url: "/../../../../skills/next.svg",
      name: "NEXT.js",
      shadowColor: "#000000",
    },
    {
      url: "/../../../../skills/python-svgrepo-com.svg",
      name: "Python",
      shadowColor: "#fbce20",
    },
    {
      url: "/../../../../skills/react-svgrepo-com.svg",
      name: "React",
      shadowColor: "#53c1de",
    },
    {
      url: "/../../../../skills/sass-svgrepo-com.svg",
      name: "Sass",
      shadowColor: "#53c1de",
    },
  ];

  return (
    <div className={styles.app}>
      <h3>Habilidades</h3>
      <p>
        A lo largo de mi carrera, he adquirido experiencia en una variedad
        tecnologías, incluyendo:
      </p>
      <Badges list={skills} />
    </div>
  );
}
