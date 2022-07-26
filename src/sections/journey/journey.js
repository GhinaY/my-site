import React from 'react';
// import './timeline.scss';
import Timeline from '../../components/Timeline/Timeline';
import '../../styles/home.scss';

const events = [
  {
    isMajor: true,
    title: "Graduted with a BA in Software Engineering" ,
    date: "December 2018",
    description: "Completed the 4 year degree at Monash University in Melbourne, Australia."
  },
  {
    isMajor: true,
    title: "Started as a grad at REA Group" ,
    date: "February 2019",
    description: ""
  },
  {
    isMajor: false,
    title: "Six months rotaion in iOS development" ,
    date: "February 2019",
  },
  {
    isMajor: false,
    title: "Six months rotaion in the Flatmates team" ,
    date: "August 2019",
  },
  {
    isMajor: false,
    title: "Three months rotaion in a mobile CI team" ,
    date: "February 2020",
  },
  {
    isMajor: false,
    title: "Three months rotaion in a DevOps team" ,
    date: "May 2020",
  },
  {
    isMajor: true,
    title: "Landed a web-development role after completing the grad program at REA Group",
    date: "August 2020",
    description: ""
  },
  {
    isMajor: true,
    title: "Started a Master of Information Technology specialising in Artificial Inteligence at the Uniersity of Melbourne",
    date: "August 2020",
    description: ""
  },
  {
    isMajor: true,
    title: "Joined Atlassian as a web developer",
    date: "December 2020",
    description: ""
  }
];

export default (
  <div>
    <h2 className="sectionTitle">My Journey</h2>
    <Timeline events={events} />
  </div>
);
