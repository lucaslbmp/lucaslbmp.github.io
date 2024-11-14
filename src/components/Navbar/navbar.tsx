import "./navbar.css";

interface NavTabProps {
  tabName: (typeof tabsNames)[number];
}

const tabsNames = [
  "Home",
  "Sobre",
  "Experiência",
  "Projetos",
  "Contatos",
] as const;

const NavTab = ({ tabName }: NavTabProps) => {
  return (
    <a href={`#${tabName}`} className="navtab">
      {tabName}
      <div className="underline"></div>
    </a>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar">
      {tabsNames.map((name) => (
        <NavTab tabName={name} />
      ))}
    </nav>
  );
};

export default NavBar;
