import { ExperienceDetails } from "../../types";
import { getMonthYearDate } from "../../utils";
import SkillsList from "../SkillsList";
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
        <SkillsList skills={skills} />
      </div>
    </article>
  );
};

export default ExperienceItem;
