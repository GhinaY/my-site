import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faHandHoldingHeart,
  faClipboardList,
  faLaughWink,
  faExpandArrowsAlt,
  faChalkboardTeacher,
  faHandshake,
  faCircle as filledCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle as emptyCircle } from '@fortawesome/free-regular-svg-icons';
import MLIcon from '../../../assets/icons/ml-icon.svg';
import './skills.scss';
import '../../styles/home.scss';

const TechSkills = [
  {
    name: 'Javascript',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />,
    description: skillRating(4),
  },
  {
    name: 'Typescript',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />,
    description: skillRating(4),
  },
  {
    name: 'React',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
    description: skillRating(4),
  },
  {
    name: 'CSS',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />,
    description: skillRating(4),
  },
  {
    name: 'Python',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" />,
    description: skillRating(3),
  },
  {
    name: 'Machine Learning',
    icon: <MLIcon className="skillIcon mlIcon" />,
    description: skillRating(3),
  },
  {
    name: 'Swift',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />,
    description: skillRating(3),
  },
  {
    name: 'Ruby on Rails',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" />,
    description: skillRating(2),
  },
  {
    name: 'Haskell',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg" />,
    description: skillRating(2),
  },
  {
    name: 'GraphQL',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />,
    description: skillRating(2),
  },
  {
    name: 'Docker',
    icon: <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />,
    description: skillRating(2),
  },
];

const SoftSkills = [
  {
    name: 'Leadership',
    icon: <FontAwesomeIcon icon={faUsers} size="lg" className="skillIcon" />,
    description: (
      <p className="skillDescription">{'Support & trust the team'}</p>
    ),
  },
  {
    name: 'Public speaking',
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardTeacher}
        size="lg"
        className="skillIcon"
      />
    ),
    description: (
      <p className="skillDescription">{'Can talk (or sing) on a stage'}</p>
    ),
  },
  {
    name: 'Teamwork',
    icon: (
      <FontAwesomeIcon icon={faHandshake} size="lg" className="skillIcon" />
    ),
    description: (
      <p className="skillDescription">{'Communication & empathy'}</p>
    ),
  },
  {
    name: 'Organization',
    icon: (
      <FontAwesomeIcon icon={faClipboardList} size="lg" className="skillIcon" />
    ),
    description: (
      <p className="skillDescription">{'Planning & managing resources'}</p>
    ),
  },
  {
    name: 'Adaptability',
    icon: (
      <FontAwesomeIcon
        icon={faExpandArrowsAlt}
        size="lg"
        className="skillIcon"
      />
    ),
    description: (
      <p className="skillDescription">{'Thrive in evolving environments'}</p>
    ),
  },
  {
    name: 'Mentoring',
    icon: (
      <FontAwesomeIcon
        icon={faHandHoldingHeart}
        size="lg"
        className="skillIcon"
      />
    ),
    description: (
      <p className="skillDescription">{'We all learn when we teach'}</p>
    ),
  },
  {
    name: 'Fun!',
    icon: (
      <FontAwesomeIcon icon={faLaughWink} size="lg" className="skillIcon" />
    ),
    description: <p className="skillDescription">{'I always keep it real'}</p>,
  },
];

function skillRating(number) {
  let circles = [];
  for (let i = 0; i < number; i++) {
    circles.push(
      <FontAwesomeIcon
        icon={filledCircle}
        size="sm"
        className="skillRatingCircle"
      />
    );
  }
  while (circles.length < 4) {
    circles.push(
      <FontAwesomeIcon
        icon={emptyCircle}
        size="sm"
        className="skillRatingCircle"
      />
    );
  }
  return <div className="skillRatingSet">{circles}</div>;
}

const SkillCard = ({ skill }) => {
  const { name, icon, description } = skill;
  return (
    <div className="cardFrame">
      {icon}
      <div className="cardText">
        <p className="skillName">{name}</p>
        {description}
      </div>
    </div>
  );
};

export default (
  <div className="skillsSection">
    <h2 className="sectionTitle">My Skills</h2>
    <div className="cardCollection">
      <h3 className="sectionSubtitle gridSubtitle">Technical</h3>
      {TechSkills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
    <div className="lineDivider" />
    <div className="cardCollection">
      <h3 className="sectionSubtitle gridSubtitle">Soft skills</h3>
      {SoftSkills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);
