import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
    height: 1.2em;
`;

const Github = ({ link }) => (
    <a href={`http://github.com/${link}`} >
        <Icon src="./public/images/GitHub-Mark-32px.png" />
    </a>
);

export default Github;
