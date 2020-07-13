import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';
import REALogo from '../../../assets/icons/REA-logo.svg';
import SVGDeviconInline from 'react-devicon/_base/SVGDeviconInline';


const timeline = (
  <VerticalTimeline>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: 'white', color: '#fff' }}
        icon={
        <SVGDeviconInline
          iconSVG={REALogo}
          width={'15px'}
          height={'15px'}
        />}
    >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: 'white', color: '#fff' }}
    >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          Creative Direction, Visual Design
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        iconStyle={{ background: 'white', color: '#fff' }}
    />
</VerticalTimeline>
)

export default timeline;