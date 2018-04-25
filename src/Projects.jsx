import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import Github from './Github';

const Name = styled.a`
    font-size: 1.5em;
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: underline;
    }
`;

const ProjectLink = styled.a`
    font-size: 1.5em;
`;

const Description = styled.p`
    text-indent: 18px;
    padding-left: 9px;
`;

const Link = styled.a`
    color: inherit;
    &:hover {
        text-decoration: underline;
    }
`;

const Label = styled.dt`
    display: flex;
    justify-content: space-between;
`;

const Projects = () => (
    <Section>
        <Label>
            <Name
                href="https://cube.ianhook.com"
                target='_blank'
                rel='noopener noreferrer'
            >
                Magic: the Gathering Cube Viewer
            </Name>
            <Github link="ianhook/cubevision" />
        </Label>
        <dd>
            <Description>
                {'My friends and I enjoy playing a specific limited format of '}
                <Link
                    href="https://en.wikipedia.org/wiki/Magic:_The_Gathering"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Magic: the Gathering
                </Link>
                {' called '}
                <Link
                    href="https://magic.wizards.com/en/articles/archive/how-build/building-your-first-cube-2016-05-19"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    cube
                </Link>.
            </Description>
            <Description>
                After many years of maintaining the contents of our cube in a spreadsheet I decided to upgrade.

                Hosted in heroku, this project has a phone view that is super helpful when trading at events,
                and a web view for a more in depth view of what's in the current cube.
            </Description>
        </dd>
    </Section>
);

export default Projects;
