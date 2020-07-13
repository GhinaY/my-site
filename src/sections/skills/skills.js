import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHandHoldingHeart, faClipboardList, faLaughWink, faExpandArrowsAlt, faChalkboardTeacher, faHandshake } from '@fortawesome/free-solid-svg-icons'
import ReactIcon from 'react-devicon/react/original/ReactOriginal.svg';
import SwiftIcon from 'react-devicon/swift/original/SwiftOriginal.svg';
import JavascriptIcon from 'react-devicon/javascript/plain/JavascriptPlain.svg';
import RailsIcon from 'react-devicon/rails/plain/RailsPlain.svg';
import CSSIcon from 'react-devicon/css3/plain/Css3Plain.svg';
import DockerIcon from 'react-devicon/docker/plain/DockerPlain.svg';
import S3Icon from 'react-aws-icons/dist/aws/logo/S3';
import LambdaIcon from 'react-aws-icons/dist/aws/logo/Lambda';
import CloudFormationIcon from 'react-aws-icons/dist/aws/logo/CloudFormation';
import GraphQLIcon from '../../../assets/icons/GraphQL-logo.svg';
import MayaLIcon from '../../../assets/icons/Maya-logo.svg';
import './skills.scss';
import '../../styles/home.scss';

const TechSkills = [
    {
        name: 'Swift',
        icon: <SwiftIcon className='skillIcon' />,
        description: 'some here about React'
    },
    {
        name: 'Javascript',
        icon: <JavascriptIcon className='skillIcon' />,
        description: 'some words here '
    },
    {
        name: 'React',
        icon: <ReactIcon className='skillIcon' />,
        description: 'some words here about React'
    },
    {
        name: 'CSS',
        icon: <CSSIcon className='skillIcon' />,
        description: 'some words'
    },
    {
        name: 'Ruby on Rails',
        icon: <RailsIcon className='skillIcon' />,
        description: 'React'
    },
    {
        name: 'Docker',
        icon: <DockerIcon className='skillIcon' />,
        description: 'React'
    },
    {
        name: 'Maya 3D Modeling',
        icon: <MayaLIcon className='skillIcon' />,
        description: 'some words'
    },
    {
        name: 'GraphQL',
        icon: <GraphQLIcon className='skillIcon' />,
        description: 'some '
    },
    {
        name: 'AWS S3',
        icon: <S3Icon className='skillIcon awsIcon' />,
        description: 'some words'
    },
    {
        name: 'AWS Lambda',
        icon: <LambdaIcon className='skillIcon awsIcon' />,
        description: 'some '
    },
    {
        name: 'AWS CloudFormation',
        icon: <CloudFormationIcon className='skillIcon awsIcon' />,
        description: 'some '
    },
];

const SoftSkills = [
    {
        name: 'Leadership',
        icon: <FontAwesomeIcon icon={faUsers} size='lg' className='skillIcon'/>,
        description: 'some here about React'
    },
    {
        name: 'Public speaking',
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} size='lg' className='skillIcon'/>,
        description: 'some words here '
    },
    {
        name: 'Teamwork',
        icon: <FontAwesomeIcon icon={faHandshake} size='lg' className='skillIcon'/>,
        description: 'some words here about React'
    },
    {
        name: 'Organization',
        icon: <FontAwesomeIcon icon={faClipboardList} size='lg' className='skillIcon'/>,
        description: 'some words'
    },
    {
        name: 'Adaptability',
        icon: <FontAwesomeIcon icon={faExpandArrowsAlt} size='lg' className='skillIcon'/>,
        description: 'React'
    },
    {
        name: 'Mentoring',
        icon: <FontAwesomeIcon icon={faHandHoldingHeart} size='lg' className='skillIcon'/>,
        description: 'React'
    },
    {
        name: 'Fun!',
        icon: <FontAwesomeIcon icon={faLaughWink} size='lg' className='skillIcon'/>,
        description: 'some words'
    },
];

const SkillCard = ({ skill }) => {
    const { name, icon, description } = skill;
    return (
        <div className='cardFrame'>
            {icon}
            <div className='cardText'>
                <p className='skillName'>{name}</p>
                <p className='skillDescription'>{description}</p>
            </div>
        </div>
    );
};

export default (
    <div className='skillsSection'>
        <h2 className='sectionHeader'>My Skills</h2>
        <div className='cardCollection'>
            <h3 className='sectionSubtitle gridSubtitle'>Technical</h3>
            {TechSkills.map(skill =>
                <SkillCard key={skill.name} skill={skill} />
            )}
        </div>
        <div className='lineDivider' />
        <div className='cardCollection'>
            <h3 className='sectionSubtitle gridSubtitle'>Soft skills</h3>
            {SoftSkills.map(skill =>
                <SkillCard key={skill.name} skill={skill} />
            )}
        </div>
    </div>
);