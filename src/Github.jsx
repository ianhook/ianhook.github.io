import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    color: inherit;
    &:hover {
        text-decoration: underline;
    }
`;

const Github = ({ link }) => (
    <Link href={`http://github.com/${link}`} >
        <i className="fab fa-github"></i>
    </Link>
);

export default Github;
