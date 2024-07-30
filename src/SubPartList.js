import React from "react";

const SubPartList = ({ path, total , onSelectPart}) => {
    const parts = [];
    for (let i = 1; i <= total; i++) {
      parts.push(<img 
      className='item' 
      key={i} 
      onClick={() => onSelectPart(`img/${path}/${i}.png`)}
      src={`img/${path}/${i}.png`} 
      
      alt={`${path} ${i}`} 
      width={80} />);
      
    }
  
    return <div>{parts}</div>;
  };

export default SubPartList;