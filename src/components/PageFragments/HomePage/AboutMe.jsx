import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `I am a `,
  paraTwo: `software engineer`,
  paraThree: ` with a background in consulting. I'm a true people person and love working with teams and/or clients. I have always been curious about learning different things, such as human languages and technology and I enjoy finding creative solutions to problems. I particularly love seeing my work turn into a practical product and that's why I decided to become a software developer.`
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)} ${(pageText.paraThree)
    }`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Gabriel', 'Conceicao', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">Hello!</h1>
        <p>
          {pageText.paraOne} <b>{pageText.paraTwo}</b> {pageText.paraThree}
        </p>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={18} sm={18} md={8} lg={6}>
          <AboutTile
            textH1="🇧🇷"
            textH4="Born and bought up in"
            textH3="Porto Alegre, Brazil"
          />
        </Col>
        <Col xs={18} sm={18} md={8} lg={6}>
          <AboutTile
            textH1="🥾"
            textH4="Love Hikes"
            textH3="Sydney is the perfect place for it"
          />
        </Col>
        <Col xs={18} sm={18} md={8} lg={6}>
          <AboutTile
            textH1="💻"
            textH4="Self Taught Programmer"
            textH3="Web Resources + Bootcamp"
          />
        </Col>
        <Col xs={18} sm={18} md={8} lg={6}>
          <AboutTile
            textH1="🌍"
            textH4="Previous Career"
            textH3="12 years as a Travel Agent"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
