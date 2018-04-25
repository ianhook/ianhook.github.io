import React from 'react';
import styled from 'styled-components';

import Description from './Description';
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

const Link = styled.a`
    color: inherit;
    &:hover {
        text-decoration: underline;
    }
`;

const JobList = styled.ol`
    list-style-type: none;
`;

const Job = styled.li`
    &:last-child {
        padding-bottom: 1em;
    }
`;

const JobTitle = styled.div`
    font-weight: bold;
    font-size: 1.1em;
    padding: 9px 0;
`;

const Dates = styled.div`
    padding-top: 9px;
`;

const Company = styled.div`
    font-weight: bold;
`;

const Experience = styled.div`

`;

const Projects = () => (
    <JobList>
        <Job>
            <JobTitle>Senior Software Engineer</JobTitle>
            <Company>OpenDNS - now a part of Cisco</Company>
            <Dates>Apr 2015 - Current</Dates>
            <Experience>
                <Description>
                    Replace legacy billing system third party payment processor and ensure PCI compliance of all properties
                </Description>
                <Description>
                    Consolidate customer onboarding process from multiple contradicting pieces of spaghetti code into one simple interface
                </Description>
                <Description>
                    Work with Business Operations to allow flexible automated customer onboarding
                </Description>
                <Description>
                    Redesign and maintain internal support website, switching from legacy PHP code with direct DB access to ReactJS frontend using new and existing APIs.
                </Description>
                <Description>
                    Migrate legacy PHP code into ORM backend API endpoints for easier consumption
                </Description>
                <Description>
                    Architect ReactJS design pattern library and advocate usage across web products
                </Description>
                <Description>
                    Build docker containers for servers and create Jenkins jobs enable CI/CD
                </Description>
            </Experience>
        </Job>
        <Job>
            <JobTitle>CTO</JobTitle>
            <Company>Relevvant</Company>
            <Dates>Feb 2011 - Apr 2015</Dates>
            <Experience>
                <Description>
                    Responsible for setting overall technical vision, team leadership, and core engineering that helped Relevvant scale.
                </Description>
                <Description>
                    Designed and implemented a cross channel marketing orchestration platform that used targeted SMS and email to engage and collect data from users.
                </Description>
                <Description>
                    Built and managed small engineering team to define the architecture and design/implement common components necessary to productize new analytical applications at scale on the cloud.
                </Description>
                <Description>
                    Led and executed on a migration of MySQL to SAP HANA/Casandra to split analytic and data warehousing workloads as well as improve query time on complex queries by as much as 14x.
                </Description>
                <Description>
                    Launched and designed a highly scalable backend using Gearman for message queuing, which in many cases allowed us to easily saturate third party pipelines, and do background batch processing easily.
                </Description>
                <Description>
                    Defined and managed Proof Of Concept projects to demonstrate new use-cases for real time data analysis
                </Description>
                <Description>
                    Integrated the product with such third party platforms such as Facebook, ExactTarget, OpenMarket and more.
                </Description>
                <Description>
                    Acted in the role of dev ops for our AWS backed servers, defining standards to allow managed continuous deployment of a highly complex environment
                </Description>
            </Experience>
        </Job>
        <Job>
            <JobTitle>Web Application Developer</JobTitle>
            <Company>Tecent America</Company>
            <Dates>Jun 2008 - Jan 2011</Dates>
            <Experience>
                <Description>
                    Designed and implemented a PHP framework to allow plug and play integration of flash based web games into Facebook. Work with all facets of the Facebook platform (FBML, XFBML, FBJS, REST API, JS SDK)
                </Description>
                <Description>
                    Designed and developed an analytics suite, including the integration of Kontagent and additional core functionality internally
                </Description>
                <Description>
                    Developed an A/B testing interface of stream posts to allow easy analysis of stream effectiveness
                </Description>
                <Description>
                    Designed and lead development on a JSON flash interface to allow easy maintenance on Facebook integration to keep up with Facebook’s changing API
                </Description>
                <Description>
                    Architected and maintained a database in MYSQL of user activities within social game
                </Description>
                <Description>
                    Helped the design and production teams understand the Facebook functionality and how it could be used to increase user engagement as well as any limitations it may impose
                </Description>
                <Description>
                    Did every single piece of Facebook API integration for all released social games, including Published User Actions, Invites, Notifications, Dashboards, etc.
                </Description>
                <Description>
                    Designed and implemented a versioned release method using SVN to promote code from testing to live environments
                </Description>
            </Experience>
        </Job>
    </JobList>
);

export default Projects;
