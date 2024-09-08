import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

const Team: React.FC = () => {
  const contestants = useSelector((state: RootState) => state.contestants);

  return (
    <section>
    <h2>Team</h2>
    <div>
    {contestants.map((item, index) => (
      <div>
        <span>{item.name}</span>
        <span>{item.fishCaught}</span>
        <span>{item.firesStarted}</span>
        <span>{item.berriesGathered}</span>
      </div>
    ))}
    </div>
  </section>
  )
}

export default Team;
