import React from 'react';
import style from './tags.module.less';

const TagCard = (props) => {
  const {
    img, name, description, stack, color, demo, code
  } = props;
  return (
    <div className={style.tagCard}>
      <div className={style.tagCard}>
        <img src={img} alt={name} className={style.tagImg} />
        <div className={style.pd20px}>
          <div className="textCenter">
            <div className={style.name}>
              {name}
            </div>
          </div>

          <p>
            <a className={style.down} target="_blank" href={demo}>live demo</a>
            <span className={style.verticalBar}>|</span>
            <a className={style.down} target="_blank" href={code}>source code</a>
          </p>

          <p>
            {description}
          </p>
          <p>
            {stack}
          </p>



          {/* <div className={style.codeButtons}>
            <div className={style.buttonDemo}>
              <a className={style.down} target="_blank" href={demo}>
                <span className={style.codes}>live demo</span>
              </a>
            </div>
            <div className={style.buttonCode}>
              <a className={style.down} target="_blank" href={code}>
                <span className={style.codes}>source code</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TagCard;
