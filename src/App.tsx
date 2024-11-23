import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { FaDownload } from "react-icons/fa";
import techsIcons from "./assets/icons/icons";
import { contacts, experiences, projects } from "./data";
import ExperienceItem from "./components/ExperienceItem";
import Card from "./components/Card";
import ProjectCard from "./components/ProjectCard";
import { capitalize } from "./utils";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <section className="intro h-padding section">
          <article className="intro-text ">
            <h1 className="name">{"Lucas Pinheiro"}</h1>
            <p className="role">{"Desenvolvedor de software"}</p>
            <p className="detail">{"2 anos de experiência"}</p>

            <div className="links">
              {contacts
                .filter(({ type }) => ["linkedin", "github"].includes(type))
                .map(({ url, Icon }) => (
                  <Button btnStyle="ghost" link={url}>
                    <Icon />
                  </Button>
                ))}
            </div>

            <div className="buttons-area">
              <Button>Contacte-me</Button>
              <Button btnStyle={"ghost"}>Meus projetos</Button>
            </div>
          </article>
          {/* <div>
            <img src="web-developer.png" alt="developer" />
          </div> */}
        </section>

        <section className="h-padding section">
          <section className="presentation center-text">
            <div className="profile-image">
              <img src="/eu.jpg" alt="me" />
            </div>
            <article className="presentation-txt">
              <div className="text">
                <h3 className="subheading">Sobre mim</h3>
                <p>
                  Olá! Sou formado em Engenharia de Instrumentação, Automação e
                  Robótica pela UFABC e trabalho como desenvolvedor de software
                  há mais de 2 anos, atuando especialmente no front-end. Tenho
                  experiência no desenvolvimento de aplicações web com design
                  responsivo usando tecnologias como React.js, TypeScript, SASS
                  e HTML.
                </p>
                <p>
                  Atualmente tenho buscado expandir meu repertório de
                  conhecimentos tanto no front-end, aprendendo sobre outros
                  frameworks como o Next.js e técnicas de clean code, como no
                  back-end, com o desenvolvimento de APIs usando Node.js e
                  Nest.js e manipulação de bancos de dados usando ORMs como o
                  Prisma.
                </p>
                <Button>
                  <FaDownload />
                  Baixar CV
                </Button>
              </div>
            </article>
          </section>

          <section className="technologies">
            <h3>Principais Tecnologias</h3>
            <div className="icons-list">
              {Object.values(techsIcons).map((Icon, i) => (
                <div className="icon-img">
                  <img src={Icon} alt={`icon-${i}`} />
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="experience section">
          <h2 className="title">Experiências</h2>
          <div className="experiences-list">
            {experiences.map((exp) => (
              <ExperienceItem {...exp} />
            ))}
          </div>
        </section>

        <section className="projects section h-padding">
          <h2 className="title">Projetos</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard projectDetails={project} />
            ))}
          </div>
        </section>

        <section className="contacts"></section>
        <section className="contacts section h-padding">
          <h2 className="title">Contatos</h2>
          <p className="contacts-text">
            {
              "Estou sempre aberto para novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato."
            }
          </p>
          <div className="contacts-list">
            {contacts.map(({ Icon, display, type, url }) => (
              <article className="contact-item">
                <Icon className="contact-icon" />
                <div>
                  <h3>{capitalize(type)}</h3>

                  {url ? <a href={url}>{display}</a> : <div>{display}</div>}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
