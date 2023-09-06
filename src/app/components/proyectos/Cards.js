import styles from "./Cards.module.css";

export default function App() {
  const data = [
    {
      name: "Flights NestJS",
      description:
        "Backend de la aplicacion 'Flights' que administra el registro de los vuelos.",
      url: "https://i.postimg.cc/JzbgtWm7/nestjs-original-fligh.jpg",
      href: "https://github.com/edsoncuno/flights-nestjs",
    },
    {
      name: "Flights AngularJS",
      description: "Frontend de la aplicacion 'Flights' hecha en AngularJS.",
      url: "https://i.postimg.cc/D0RLRgvj/angular.png",
      href: "https://github.com/edsoncuno/flights-angularjs",
    },
    {
      name: "Flights React",
      description: "Frontend de la aplicacion 'Flights' hecha en React.",
      url: "https://i.postimg.cc/c4FFkMZW/rn.png",
      href: "https://github.com/edsoncuno/flights-react",
    },
    {
      name: "Flights Vue.js",
      description: "Frontend de la aplicacion 'Flights' hecha en Vue.js",
      url: "https://i.postimg.cc/P57bDdns/vuejs-ar21.png",
      href: "https://github.com/edsoncuno/flights-vuejs",
    },
    {
      name: "Panaderia Vue.js",
      description: "Pagina web como ejemplo para una panaderia",
      url: "https://i.postimg.cc/L6dsdtBv/th.png",
      href: "https://github.com/edsoncuno/panaderia-vuejs",
    },
  ];

  const list = data.map((item, index) => (
    <>
      <Card
        key={"id_" + index}
        name={item.name}
        description={item.description}
        url={item.url}
        href={item.href}
      />
      {index !== data.length - 1 && <hr />}
    </>
  ));

  return <div className={styles.app}>{list}</div>;
}

function Card(props) {
  return (
    <a href={props.href} target="_blank" className={styles.card}>
      <article className={styles.container}>
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
        </div>
      </article>
    </a>
  );
}
