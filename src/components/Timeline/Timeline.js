import React from 'react';
import './Timeline.scss';
import REALogo from '../../../assets/icons/REA-logo.svg';
import MajorMilestone from './MajorMilestone/MajorMilestone';
import MinorMilestone from './MinorMilestone/MinorMilestone';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Timeline = ({ events }) => {
  let leftAlignment = false;

  const milestones = events.map((e) => {    
    if (e.isMajor) {
      leftAlignment = !leftAlignment;
      const alignment = leftAlignment ? 'left' : 'right';

      return (
        <MajorMilestone key={e.title} title={e.title} date={e.date} description={e.description} alignment={alignment} />
      );
    }

    const alignment = leftAlignment ? 'left' : 'right';
    return (
      <MinorMilestone key={e.title} title={e.title} date={e.date} alignment={alignment} />
    );
  });

  return (
    <div className='timelineContainer'>
      <div className='timelineLine gradientColors'/>
      <div className='milestonesWrapper'>
        {milestones}
      </div>
    </div>
  );
};

export default Timeline;
