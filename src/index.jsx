import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Projects from './Projects';
import Resume from './Resume';

const Title = styled.h1`
    font-size: 2em;
`;

const Header = styled.h2`
    font-size: 1.75em;
`;

const Spacer = styled.hr`
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;

const Wrapper = styled.section`
    padding: 1em 4em;
    font-family: 'Ubuntu', sans-serif;
`;

ReactDOM.render(
    <Wrapper>
      <Title>Ian Hook</Title>
      <Spacer />
      <Header>Resume</Header>
      <Resume />
      <Spacer />
      <Header>Projects</Header>
      <Projects />
    </Wrapper>,
    document.getElementById('root')
);
