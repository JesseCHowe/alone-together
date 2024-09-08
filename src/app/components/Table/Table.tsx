"use client";

// components/GridTable.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { updateCount } from '../../store/aloneContestantSlice';
import Counter from '../Counter/Counter';
import './Table.css';


const GridTable: React.FC = () => {
  // Access contestants from the Redux store
  const contestants = useSelector((state: RootState) => state.contestants);
  const dispatch = useDispatch();

  const handleCounterChange = (index: number, field: keyof typeof contestants[0], newCount: number) => {
    dispatch(updateCount({ index, field, value: newCount }));
  };

  return (
    <div className="table">
      {/* Table Header */}
      <div className="table-hed">
        <span/>
        <span/>
        <span className="">Fish Caught</span>
        <span className="">Fires Started</span>
        <span className="">Berries Gathered</span>
        <span className="">Small Game</span>
        <span className="">Big Game</span>
      </div>
      {/* Table Body */}
      <div className="table-body">
      {contestants.map((item, index) => (
        <div className="row" key={index}>
          <div className="profile-icon">
            <i/>
          </div>
          <div className="">{item.name}</div>
          <Counter
          count={item.fishCaught}
          onCountChange={(newCount) => handleCounterChange(index, 'fishCaught', newCount)}
          />
          <Counter
          count={item.firesStarted}
          onCountChange={(newCount) => handleCounterChange(index, 'firesStarted', newCount)}
          />
          <Counter
          count={item.berriesGathered}
          onCountChange={(newCount) => handleCounterChange(index, 'berriesGathered', newCount)}
          />
          <Counter
          count={item.bigGame}
          onCountChange={(newCount) => handleCounterChange(index, 'bigGame', newCount)}
          />
          <Counter
          count={item.smallGame}
          onCountChange={(newCount) => handleCounterChange(index, 'smallGame', newCount)}
          />
        </div>
      ))}
      </div>

    </div>
  );
};

export default GridTable;
