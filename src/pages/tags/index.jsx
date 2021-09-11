/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Layout, Row, Col,
} from 'antd';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import TagCard from '../../components/TagCard';

const myProjects = [{
  img: "tripplanner.gif",
  name: "TRIPPLANNER",
  description: "App for travellers to plan their itinerary, inserting daily activities in a calendar.",
  stack: "Built with Ruby on Rails, CSS & PostgreSQL.",
  color: "",
  demo: "https://my-trip-planner-app.herokuapp.com/",
  code: "https://github.com/gabrielcon6/tripplanner"
}, {
  img: "https://res.cloudinary.com/gabrielcon6/image/upload/v1585871895/myPortfolio/mockedin_yda2gr.gif",
  name: "MOCKEDIN",
  description: "App for job seekers to simulate an update of their LinkedIn profile. This then shares with the admin (their HR/Career coach), who will review it via our app.",
  stack: "Built with React, SASS, Express.js & MongoDB.",
  color: "",
  demo: "https://mockedin.herokuapp.com/",
  code: "https://github.com/gabrielcon6/mockedin"
}, {
  img: "https://res.cloudinary.com/gabrielcon6/image/upload/v1585871730/myPortfolio/xiio_ujs0m2.gif",
  name: "X|| 0 TIC-TAC-TOE",
  description: "A simple tic-tac-toe game. My very first project",
  stack: "Built with jQuery/vanilla JavaScript, HTML & CSS.",
  color: "",
  demo: "https://gabrielcon6.github.io/tic-tac-toe/",
  code: "https://github.com/gabrielcon6/tic-tac-toe"
}, {
  img: "tripplanner.gif",
  name: "PERSONAL WEBSITE",
  description: "My portfolio website.",
  stack: "Built with Gatsby.js.",
  color: "",
  demo: "https://my-trip-planner-app.herokuapp.com/",
  code: "https://github.com/gabrielcon6/tripplanner"
},

]

const Tags = () => {
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title="Tags"
          description="This page consists of various Tags on various technologies that I'll be using
          to write blogs. You can check the blogs related to the tags by clicking on any of the tags below."
          path="tags"
        />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h2 className="titleSeparate">Projects</h2>
            </div>
            <Row gutter={[30, 20]}>
              {
                myProjects.map((val) => (
                  <Col key={val.name} xs={24} sm={24} md={12} lg={12}>
                    <TagCard
                      img={val.img}
                      name={val.name}
                      description={val.description}
                      stack={val.stack}
                      color={val.color}
                      demo={val.demo}
                      code={val.demo}
                    />
                  </Col>
                ))
              }
            </Row>
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};


export default Tags;
