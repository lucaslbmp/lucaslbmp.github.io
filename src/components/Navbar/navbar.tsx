import "./navbar.css";

type TabIdType = keyof typeof tabDict;
type TabNameType = (typeof tabDict)[TabIdType];

const tabDict = {
  home: "Home",
  about: "Sobre",
  experience: "Experiência",
  projects: "Projetos",
  contacts: "Contatos",
};

interface NavTabProps {
  tabId: TabIdType;
  tabName: TabNameType;
}

const NavTab = ({ tabId, tabName }: NavTabProps) => {
  return (
    <a href={`#${tabId}`} className="navtab">
      {tabName}
      <div className="underline"></div>
    </a>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar">
      {(Object.keys(tabDict) as Array<TabIdType>).map((id) => (
        <NavTab tabId={id} tabName={tabDict[id]} />
      ))}
    </nav>
  );
};

export default NavBar;
