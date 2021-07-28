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
import ReactIcon from 'react-devicon/react/original/ReactOriginal.svg';
import SwiftIcon from 'react-devicon/swift/original/SwiftOriginal.svg';
import JavascriptIcon from 'react-devicon/javascript/plain/JavascriptPlain.svg';
import TypescriptIcon from 'react-devicon/typescript/original/TypescriptOriginal.svg';
import RailsIcon from 'react-devicon/rails/plain/RailsPlain.svg';
import CSSIcon from 'react-devicon/css3/plain/Css3Plain.svg';
import DockerIcon from 'react-devicon/docker/plain/DockerPlain.svg';
import S3Icon from 'react-aws-icons/dist/aws/logo/S3';
import LambdaIcon from 'react-aws-icons/dist/aws/logo/Lambda';
import CloudFormationIcon from 'react-aws-icons/dist/aws/logo/CloudFormation';
import GraphQLIcon from '../../../assets/icons/GraphQL-logo.svg';
import './skills.scss';
import '../../styles/home.scss';

const TechSkills = [
  {
    name: 'Javascript',
    icon: <JavascriptIcon className="skillIcon" />,
    description: skillRating(4),
  },
  {
    name: 'Typescript',
    icon: <TypescriptIcon className="skillIcon" />,
    description: skillRating(4),
  },
  {
    name: 'React',
    icon: <ReactIcon className="skillIcon" />,
    description: skillRating(4),
  },
  {
    name: 'CSS',
    icon: <CSSIcon className="skillIcon" />,
    description: skillRating(4),
  },
  {
    name: 'Swift',
    icon: <SwiftIcon className="skillIcon" />,
    description: skillRating(3),
  },
  {
    name: 'Ruby on Rails',
    icon: <RailsIcon className="skillIcon" />,
    description: skillRating(3),
  },
  {
    name: 'AWS Lambda',
    icon: <LambdaIcon className="skillIcon awsIcon" />,
    description: skillRating(3),
  },
  {
    name: 'AWS S3',
    icon: <S3Icon className="skillIcon awsIcon" />,
    description: skillRating(2),
  },
  {
    name: 'AWS CloudFormation',
    icon: <CloudFormationIcon className="skillIcon awsIcon" />,
    description: skillRating(2),
  },
  {
    name: 'GraphQL',
    icon: <GraphQLIcon className="skillIcon" />,
    description: skillRating(2),
  },
  {
    name: 'Docker',
    icon: <DockerIcon className="skillIcon" />,
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
