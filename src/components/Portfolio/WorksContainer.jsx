

import React from 'react';
import WorksItem from './WorksItem';

const WorksContainer = ({ data, animatedItems }) => {
  return (
    <div className='portfolio-container-row-container'>
      {data.map((item, index) => (
        <WorksItem 
          key={item.id}
          ImageWorks={item.image}
          altImageWorks={item.textAltImage}
          title={item.title}
          mode={item.id}
          animateItem={animatedItems[index] ? 'portfolio-container-row-container-item-animate' : ''}
        />
      ))}
    </div>
  );
};

export default WorksContainer;
