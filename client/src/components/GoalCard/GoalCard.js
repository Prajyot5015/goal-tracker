import React from 'react'
import './GoalCard.css'
import { useState, useEffect } from 'react';
import RightImg from './correct.png'
import RemoveImg from './remove.png'

function GoalCard({ _id, goal, description, createdAt, loadGoals }) {

  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
  
    const storedRangeValue = localStorage.getItem(`rangeValue_${_id}`);
    if (storedRangeValue !== null) {
      setRangeValue(parseInt(storedRangeValue, 10));
    }
  }, [_id]);

  useEffect(() => {
    
    localStorage.setItem(`rangeValue_${_id}`, rangeValue);
  }, [rangeValue, _id]);

  const handleRightImgClick = () => {
    if(rangeValue === 100){
      setRangeValue(100);
    }
    else{
      setRangeValue(rangeValue+5);
    }
  };

  return (
    <div className='goal-card'>
      <div className='header-content'>
        <h3> {goal} </h3>
        <p className='desc'>{description}</p>
      </div>
      <div className='progress'>
        <input
          type="range"
          value={rangeValue}
          className="range"
          onChange={(e)=>{setRangeValue(e.target.value)}}
        />
        <p className='percentage'>{rangeValue}%</p>
      </div>
      <div>
        <img src={RemoveImg} alt='Img' className='add-remove-img' />
        <img src={RightImg} alt='Img' className='add-remove-img'  onClick={handleRightImgClick} />
      </div>

    </div>
  )
}

export default GoalCard