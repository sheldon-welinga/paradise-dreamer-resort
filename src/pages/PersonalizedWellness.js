import React, { useEffect, useState } from "react";
import { StyledHero } from "../components/Styled";
import WellnessItem from "../components/WellnessItem";

const PersonalizedWellness = () => {
  const [wellness, setWellness] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();

      setWellness(data.wellness);
    };

    getData();
  }, []);

  if (!wellness) return <div className="page-height">Loading...</div>;

  return (
    <div className="page-height wellness">
      <StyledHero image="/images/wellness-2.jpg">
        <div className="overlay">
          <h4>Personalized Wellness</h4>
        </div>
      </StyledHero>
      <div className="wellness-section-one">
        <h2>Paradise Dreamer Intergrated Wellness</h2>
        <h4>Our wellness pillars</h4>
        <p>
          From the food you eat to the way you sleep and the earth beneath your
          feet, wellness is intergrated into your whole Paradise Dreamer
          experiece. We aim to enhance every aspect of your experience so you
          feel immediate, real benefits however long you stay.
        </p>
      </div>
      <div className="wellness-section-two">
        {wellness.map((item) => (
          <WellnessItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PersonalizedWellness;
