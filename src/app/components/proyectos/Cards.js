import styles from "./Cards.module.css";

export default function App() {
  const data = [
    {
      name: "Flights NestJS",
      description:
        "Backend de la aplicacion 'Flights' que administra el registro de los vuelos.",
      url: "./img/projects/nestjs-original-fligh.jpg",
      hrefRepo: "https://github.com/edsoncuno/flights-nestjs",
      hrefDemo: "",
      icons: [
        "./skills/NestJS.svg",
        "./skills/Typescript_logo_2020.svg",
        "./skills/javascript-logo-svgrepo-com.svg",
      ],
    },
    {
      name: "Flights AngularJS",
      description: "Frontend de la aplicacion 'Flights' hecha en AngularJS.",
      url: "./projects/angular.png",
      hrefRepo: "https://github.com/edsoncuno/flights-angularjs",
      hrefDemo: "",
      icons: [
        "./skills/angular-svgrepo-com.svg",
        "./skills/Typescript_logo_2020.svg",
        "./skills/sass-svgrepo-com.svg",
        "./skills/html-5-svgrepo-com.svg",
      ],
    },
    {
      name: "Flights React",
      description: "Frontend de la aplicacion 'Flights' hecha en React.",
      url: "./projects/rn.png",
      hrefRepo: "https://github.com/edsoncuno/flights-react",
      hrefDemo: "",
      icons: [
        "./skills/next.svg",
        "./skills/react-svgrepo-com.svg",
        "./skills/javascript-logo-svgrepo-com.svg",
        "./skills/css-3-svgrepo-com.svg",
      ],
    },
    {
      name: "Flights Vue.js",
      description: "Frontend de la aplicacion 'Flights' hecha en Vue.js",
      url: "./projects/vuejs-ar21.png",
      hrefRepo: "https://github.com/edsoncuno/flights-vuejs",
      hrefDemo: "",
      icons: [
        "./skills/vue-9-logo-svgrepo-com.svg",
        "./skills/javascript-logo-svgrepo-com.svg",
        "./skills/html-5-svgrepo-com.svg",
        "./skills/css-3-svgrepo-com.svg",
        "./skills/sass-svgrepo-com.svg",
      ],
    },
    {
      name: "Panaderia Vue.js",
      description: "Pagina web como ejemplo para una panaderia",
      url: "./projects/th.png",
      hrefRepo: "https://github.com/edsoncuno/panaderia-vuejs",
      hrefDemo: "https://edsoncuno.github.io/my-panaderia/",
      icons: [
        "./skills/vue-9-logo-svgrepo-com.svg",
        "./skills/javascript-logo-svgrepo-com.svg",
        "./skills/html-5-svgrepo-com.svg",
        "./skills/css-3-svgrepo-com.svg",
        "./skills/sass-svgrepo-com.svg",
      ],
    },
  ];

  const list = data.map((item, index) => (
    <>
      <Card
        key={"id_" + index}
        name={item.name}
        description={item.description}
        url={item.url}
        hrefRepo={item.hrefRepo}
        hrefDemo={item.hrefDemo}
        icons={item.icons}
      />
      {index !== data.length - 1 && <hr />}
    </>
  ));

  return <div className={styles.app}>{list}</div>;
}

function Card(props) {
  const list = props.icons.map((item, index) => (
    <div
      key={"id1_" + index}
      style={{
        backgroundImage: `url(${item})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "2rem",
        height: "2rem",
        marginRight: "1rem",
      }}
    ></div>
  ));

  return (
    <article className={styles.card}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.text}>
        <div className={styles.name}> {props.name}</div>
        <div>{props.description}</div>
        <div className={styles.icons}>
          {list}
          <div style={{ display: "flex" }}>
            <a href={props.hrefRepo} target="_blank">
              <div
                style={{
                  backgroundImage: `url("./skills/github-142-svgrepo-com.svg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "1rem",
                  height: "1rem",
                  marginRight: "0.5rem",
                }}
              ></div>
              <div>Ver código</div>
            </a>
            {props.hrefDemo && (
              <a href={props.hrefDemo} target="_blank">
                <div
                  style={{
                    backgroundImage: `url("./website-svgrepo-com.svg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.5rem",
                  }}
                ></div>
                <div>Ver web</div>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
