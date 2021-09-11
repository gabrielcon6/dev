import React from 'react';
import { Row, Col } from 'antd';
import style from './skill.module.less';



const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">Main Skills</h2>


    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2rem', fontSize: '15px' }}>
          <li><img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="React" className={style.img} />
            React | jQuery | Gatsby | Vanilla JavaScript </li>
          <li><img src="https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png" alt="Node" className={style.img} />
            Node.js | Express</li>
          <li><img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML" className={style.img} />
            HTML5</li>
          <li><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="CSS" className={style.img} />
            CSS3</li>
          <li><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub" className={style.img} />
            GitHub</li>
        </ul>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2rem' }}>
          <li><img src="https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png" alt="AWS" className={style.img} />
            AWS Services - Solutions Architect (Associate) Certified</li>
          <li><img src="https://cdn.freebiesupply.com/logos/large/2x/heroku-logo-png-transparent.png" alt="Heroku" className={style.img} />
            Heroku</li>
          <li><img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="MongoDB" className={style.img} />
            MongoDB | Mongoose</li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="PostgreSQL" className={style.img} />
            PostgreSQL</li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" alt="Ruby" className={style.img} />
            Ruby | Ruby on Rails</li>
        </ul>
      </Col>
    </Row>
  </div >
);

export default SkillsProgress;
