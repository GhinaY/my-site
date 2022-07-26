import React from 'react';
import './MinorMilestone.scss';
import '../Timeline.scss';

const MinorMilestone = ({ title, date, alignment }) => {
  
  return (
    <div className={`milestoneContainer milestoneContainer-${alignment} minorMilestoneContainer minorMilestoneContainer-${alignment}`}>
      <div className={`minorMilestoneCircle minorMilestoneCircle-${alignment}`} />
      <div className={`minorMilestoneLine minorMilestoneLine-${alignment}`} />
      <div className={`milestoneContentContainer-${alignment}`}>
        <small>{date}</small>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MinorMilestone;
