// components/PlanetDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlanetDetail = () => {
  const { planetId } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    // Fetch planet data based on planetId
    // Update the state with fetched data
  }, [planetId]);

  return (
    <div>
      
    </div>
  );
};

export default PlanetDetail;
