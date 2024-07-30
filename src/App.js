import React, { useState } from 'react';
import './App.css';
import PartList from './PartList';

const categories = [
 
  { name: 'body', total: 17, subcategories: [] },
  { name: 'eyes', total: 24, subcategories: [] },
  { name: 'hair', total: 73, subcategories: [] },
  { name: 'mouths', total: 24, subcategories: [] },
  { name: 'eyebrows', total: 10, subcategories: [] },
  { name: 'facial_hair', total: 17, subcategories: [] },
  { name: 'clothes', total: 3, subcategories: [
    {name: 'layer_1', total: 5},
    {name: 'layer_2', total: 5},
    {name: 'layer_3', total: 9}
  ] },
];

function App() {
  const [selectPart , setSelectPart] = useState([])
  
  const handleSelect = (part) => {
    setSelectPart(prev => [...prev,part])
  } 



  return (
    <>
      <div className='header-container'>
        <h1 className='title'>CHARACTER</h1>
        <h2 className='sub-title'>🛠️CUSTOMIZATION🛠️</h2>
        <div className='division'></div>
      </div>
      <div className='group-img'>
        <div className='left-column'>
          
          <button className='button'>RANDOMIZE!</button>
        </div>
        <div className='right-column'>
          {categories.map(category => (
            <div key={category.name} className='list-item'>
              <div className='title-item'>
                <h3>{category.name}</h3>     
              </div>
              <div className='img-item'>
                <PartList path={category.name} subcategories={category.subcategories} total={category.total} onSelectPart={handleSelect} />  
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;


