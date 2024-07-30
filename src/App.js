import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import PartList from './PartList';



function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [hair, setHair] = useState(1);
  const [mouths, setMouths] = useState(1)
  const [eyebrows, setEyebrows] = useState(1)
  const [facialHair, setFacialHair] = useState(1)
  const [layer1, setLayer1] = useState(1)
  const [layer2, setLayer2] = useState(1);
  const [layer3, setLayer3] = useState(1);

  const maxValues = {
    body: 17,
    eyes: 24,
    hair: 73,
    mouths: 24,
    eyebrows: 10,
    facial_hair: 17,
    layer_1: 5,
    layer_2: 5,
    layer_3: 9
  };

  const handleRandom = useCallback(() => {
    setBody(Math.floor(Math.random() * maxValues.body) + 1);
    setEyes(Math.floor(Math.random() * maxValues.eyes) + 1);
    setHair(Math.floor(Math.random() * maxValues.hair) + 1);
    setMouths(Math.floor(Math.random() * maxValues.mouths) + 1);
    setEyebrows(Math.floor(Math.random() * maxValues.eyebrows) + 1);
    setFacialHair(Math.floor(Math.random() * maxValues.facial_hair) + 1);
    setLayer1(Math.floor(Math.random() * maxValues.layer_1) + 1);
    setLayer2(Math.floor(Math.random() * maxValues.layer_2) + 1);
    setLayer3(Math.floor(Math.random() * maxValues.layer_3) + 1);
  }, []);

  useEffect(() => {
    handleRandom();
  }, [handleRandom]);


  const categories = [
    { name: 'body', total: 17, subcategories: [], setSelect: setBody },
    { name: 'eyes', total: 24, subcategories: [], setSelect: setEyes },
    { name: 'hair', total: 73, subcategories: [], setSelect: setHair },
    { name: 'mouths', total: 24, subcategories: [], setSelect: setMouths },
    { name: 'eyebrows', total: 10, subcategories: [], setSelect: setEyebrows },
    { name: 'facial_hair', total: 17, subcategories: [], setSelect: setFacialHair },
    { name: 'clothes', total: 3, subcategories: [
      {name: 'layer_1', total: 5, setSelect: setLayer1},
      {name: 'layer_2', total: 5, setSelect: setLayer2},
      {name: 'layer_3', total: 9, setSelect: setLayer3}
    ] },
  ];
  

  return (
    <>
      <div className='header-container'>
        <h1 className='title'>CHARACTER</h1>
        <h2 className='sub-title'>🛠️CUSTOMIZATION🛠️</h2>
        <div className='division'></div>
      </div>
      <div className='group-img'>
        <div className='left-column'>
          <div className='avatar-wrapper'>
            <img className='avatar' src={`/img/body/${body}.png`} alt='' ></img>
            <img className='avatar' src={`/img/eyes/${eyes}.png`} alt='' ></img>
            <img className='avatar' src={`/img/hair/${hair}.png`} alt='' ></img>
            <img className='avatar' src={`/img/mouths/${mouths}.png`} alt='' ></img>
            <img className='avatar' src={`/img/eyebrows/${eyebrows}.png`} alt='' ></img>
            <img className='avatar' src={`/img/facial_hair/${facialHair}.png`} alt='' ></img>
            <img className='avatar' src={`/img/clothes/layer_1/${layer1}.png`} alt=''></img>
            <img className='avatar' src={`/img/clothes/layer_2/${layer2}.png`} alt=''></img>
            <img className='avatar' src={`/img/clothes/layer_3/${layer3}.png`} alt=''></img>
          </div>
          <div className='text-center'>
            <button onClick={handleRandom} className='button'>RANDOMIZE!</button>
          </div>
        </div>
        <div className='right-column'>
          {categories.map(category => (
            <div key={category.name} className='list-item'>
              <div className='title-item'>
                <h3>{category.name}</h3>     
              </div>
              <div className='img-item'>
                <PartList 
                path={category.name} 
                subcategories={category.subcategories} 
                total={category.total} 
                onSelectPart={category.setSelect} />  
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;


