import { ComponentProps } from "react";
import Card from "../Card";
import { ProjectDetails } from "../../types";
import SkillsList from "../SkillsList";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Button from "../Button";
import "./project-card.css";
import { IconType } from "react-icons";

interface ProjectCardProps extends ComponentProps<typeof Card> {
  projectDetails: ProjectDetails;
}

const LinkButton = ({ url, Icon }: { url: string; Icon: IconType }) => (
  <a href={url}>
    <Button className="action-button">
      <Icon />
    </Button>
  </a>
);

const ProjectCard = (props: ProjectCardProps) => {
  const { name, thumbnail, description, skills, links } = props.projectDetails;
  const { repo, demo } = links;
  return (
    <Card className="project-card" {...props}>
      <div className="buttons-area">
        <LinkButton url={repo} Icon={FaGithub} />
        {demo && <LinkButton url={demo} Icon={FaExternalLinkAlt} />}
      </div>
      <div className="thumbnail">
        <img src={thumbnail} alt={name} />
      </div>
      <h3>{name}</h3>
      <p className="content">{description}</p>
      {skills && <SkillsList skills={skills} />}
    </Card>
  );
};

export default ProjectCard;
