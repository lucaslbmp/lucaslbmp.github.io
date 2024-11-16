import "./skills-list.css";

interface SkillsListProps {
  skills: string[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <div className="skill-item">{skill}</div>
      ))}
    </div>
  );
};

export default SkillsList;
