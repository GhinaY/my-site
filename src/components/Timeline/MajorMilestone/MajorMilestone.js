import React from 'react';
import './MajorMilestone.scss';
import '../Timeline.scss';

const MajorMilestone = ({ title, date, description, alignment }) => {
  
  return (
    <div className={`milestoneContainer milestoneContainer-${alignment} majorMilestoneContainer majorMilestoneContainer-${alignment}`}>
      <div className={`majorMilestoneCircle majorMilestoneCircle-${alignment}`} />
      <div className={`majorMilestoneLine majorMilestoneLine-${alignment}`} />
      <div className={`milestoneContentContainer-${alignment}`}>
        <small>{date}</small>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MajorMilestone;
