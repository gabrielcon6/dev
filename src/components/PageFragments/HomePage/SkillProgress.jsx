import React from 'react';
import { Row, Col } from 'antd';
import style from './skill.module.less';



const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">Main Skills</h2>


    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2rem', fontSize: '15px' }}>
          <li><img src="js.png" alt="React" className={style.img} />
            React | jQuery | Gatsby | Vanilla JavaScript
          </li>
          <li><img src="node.png" alt="Node" className={style.img} />
            Node.js | Express
          </li>
          <li><img src="html.png" alt="HTML" className={style.img} />
            HTML5
          </li>
          <li><img src="css.png" alt="CSS" className={style.img} />
            CSS3
          </li>
          <li><img src="git.png" alt="GitHub" className={style.img} />
            GitHub
          </li>
        </ul>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2rem' }}>
          <li><img src="aws.png" alt="AWS" className={style.img} />
            AWS - Solutions Architect (Associate) Certified
          </li>
          <li><img src="heroku.png" alt="Heroku" className={style.img} />
            Heroku
          </li>
          <li><img src="mongo.png" alt="MongoDB" className={style.img} />
            MongoDB | Mongoose
          </li>
          <li><img src="sql.png" alt="PostgreSQL" className={style.img} />
            PostgreSQL
          </li>
          <li><img src="ruby.png" alt="Ruby" className={style.img} />
            Ruby | Ruby on Rails
          </li>
        </ul>
      </Col>
    </Row>
  </div >
);

export default SkillsProgress;
