import { ExperienceDetails } from "../../types";
import { getMonthYearDate } from "../../utils";
import "./experience-item.css";

const ExperienceItem = ({
  role,
  company,
  description,
  skills,
  startDate,
  endDate,
}: ExperienceDetails) => {
  const periodStr = `${getMonthYearDate(startDate)} - ${getMonthYearDate(
    endDate
  )}`;
  return (
    <article className="experience-item h-padding">
      <div className="date">{periodStr}</div>
      <div className="right-side">
        <div className="highlight">
          {role} - {company}
        </div>
        <div>{description}</div>
        <div className="skill-list">
          {skills.map((skill) => (
            <div className="skill-item">{skill}</div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceItem;
