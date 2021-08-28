import React from 'react';
import style from './about.module.less';

const AboutTile = (props) => {
  const {
    img, textH1, textH4, textH3, alt, height, width,
  } = props;
  return (
    <div className={style.aboutTile}>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h1>{textH1 || ''}</h1>
        <h4>{textH4 || ''}</h4>
        <h3>{textH3 || ''}</h3>
      </div>
    </div>
  );
};

export default AboutTile;
