import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    Svg: require("../../static/img/home/less.svg").default,
    url: "docs/css/getting-started/download",
    title: "Less",
  },
  {
    Svg: require("../../static/img/home/sass.svg").default,
    url: "docs/css/getting-started/download",
    title: "Sass",
  },
  {
    Svg: require("../../static/img/home/stylus.svg").default,
    url: "docs/css/getting-started/download",
    title: "Stylus",
  },
];

const Feature2List = [
  {
    Svg: require("../../static/img/home/typescript.svg").default,
    url: "docs/css/getting-started/download",
    title: "TypeScript",
  },
  {
    img: require("../../static/img/home/web-components.png").default,
    url: "docs/web-components/getting-started/download",
    title: "Web Components",
  },
  {
    Svg: require("../../static/img/home/react.svg").default,
    url: "docs/react/getting-started/download",
    title: "React",
  },
  {
    Svg: require("../../static/img/home/vue.svg").default,
    url: "docs/vue/getting-started/download",
    title: "Vue",
  },
  {
    Svg: require("../../static/img/home/angular.svg").default,
    url: "docs/angular/getting-started/download",
    title: "Angular",
  },
];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          <span className="hero__highlight">Hive</span>
        </h1>
        <p className="hero__subtitle">Just another UI framework ...</p>
        <p className="hero__subtitle">
          Built for studies purpose by the{" "}
          <a href="https://www.linkedin.com/in/alex-bleggi-377907201/">
            author
          </a>
          . 👽
        </p>
        <div className="hero__button-container">
          <Link
            className="button button--custom"
            to="docs/css/getting-started/download"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ url, Svg, img, title }) {
  return (
    <Link className="home-feature__link" to={url}>
      {Svg && <Svg className="home-feature__image" alt={title} />}
      {img && <img className="home-feature__image" src={img} alt="Stylus" />}
    </Link>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        <div className="home-feature">
          <h2 className="home-features__title">CSS Framework</h2>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
          <p className="home-features__paragraph">
            <span className="home-features__highlight">Hive </span>
            CSS framework is built with
            <span className="home-features__highlight"> Less</span>,
            <span className="home-features__highlight"> Sass</span>,
            <span className="home-features__highlight"> SCSS</span> and
            <span className="home-features__highlight"> Stylus</span>. Choose
            what you want to extend in your projects, or use the compiled
            <span className="home-features__highlight"> CSS</span>.
          </p>
        </div>

        <div className="home-feature">
          <h2 className="home-features__title">JavaScript Components</h2>
          <div className="row">
            {Feature2List.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
          <p className="home-features__paragraph">
            <span className="home-features__highlight">Hive </span>
            components are built with
            <span className="home-features__highlight"> TypeScript</span>,
            <span className="home-features__highlight"> Web Components</span>,
            <span className="home-features__highlight"> Vue</span>,
            <span className="home-features__highlight"> React</span> and
            <span className="home-features__highlight"> Angular</span>. Choose
            what platform you want to use in your projects, or use the compiled
            <span className="home-features__highlight"> JavaScript</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Hive · Just another UI framework ..."
      description="Just another UI framework ..."
    >
      <Hero />
      <main className="home">
        <Features />
      </main>
    </Layout>
  );
}
