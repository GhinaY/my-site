import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import './WordCloud.scss';

const options = {
  colors: ['#000'],
  enableTooltip: false,
  deterministic: true,
  fontFamily: 'Red Hat Display',
  fontSizes: [20, 30],
  padding: 8,
  rotations: 1,
  rotationAngles: [0],
  spiral: 'rectangular',
  transitionDuration: 1000,
};

const words = [
  {
    text: 'Hiking',
    value: 7,
  },
  {
    text: 'Singing',
    value: 10,
  },
  {
    text: 'Hardware hacking',
    value: 2,
  },
  {
    text: 'Sci-Fi',
    value: 8,
  },
  {
    text: 'Houseplants',
    value: 8,
  },
  {
    text: 'Interior design',
    value: 4,
  },
  {
    text: 'Video editing',
    value: 5,
  },
  {
    text: 'Film production',
    value: 5,
  },
  {
    text: 'Crime TV',
    value: 8,
  },
  {
    text: 'Cattos & Doggos',
    value: 6,
  },
  {
    text: 'Music',
    value: 8,
  },
  {
    text: 'Picnics',
    value: 4,
  },
  {
    text: 'Treetop obstacle courses',
    value: 1,
  },
  {
    text: 'Trees',
    value: 7,
  },
  {
    text: 'Brunch',
    value: 6,
  },
  {
    text: 'Escape rooms',
    value: 1,
  },
];

const wordCloud = (
    <div className='wordCloudContainer'>
        <ReactWordcloud options={options} words={words} />
    </div>
)

export default wordCloud;