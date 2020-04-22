import React from "react";
import TeacherSlider from "../Shared/Banners/TeacherSlider";

const SliderSettings = {
  arrows: true
};
const ATBTListen = () => {
  return (
    <section className="ATBT-Listen easya-bgc-trans-seance">
      <h2>Listen to them, not us</h2>
      <div className="ATBT-Listen-Slides">
        <TeacherSlider ExtraSettings={SliderSettings} />
      </div>
    </section>
  );
};

export default ATBTListen;
