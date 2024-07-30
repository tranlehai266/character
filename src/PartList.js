import React from "react";
import SubPartList from './SubPartList'

const PartList = ({ path, subcategories, total, onSelectPart}) => {
    return (
      <div>
        {subcategories.length > 0 ? (
          subcategories.map(sub => (
            <div key={sub.name}>
              <h4>{sub.name}</h4>
              <SubPartList 
              path={`${path}/${sub.name}`} 
              total={sub.total} 
              onSelectPart={sub.setSelect || onSelectPart} />
            </div>
          ))
        ) : (
          <SubPartList path={path} total={total} onSelectPart={onSelectPart}/>
        )}
      </div>
    );
  };

export default PartList;