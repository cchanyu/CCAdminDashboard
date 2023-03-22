import React, { useState } from 'react'
import '../css/Card.css';

import { LayoutGroup, motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { UilTimes } from '@iconscout/react-unicons';

const Card = (props) => {

    const [ expanded, setExpanded ] = useState(false);

    return (
        <LayoutGroup>
            {
                expanded ? (<ExpandedCard param={props} setExpanded={() => setExpanded(false)} />) : 
                <CompactCard param = {props} setExpanded={() => setExpanded(true)} />
            }
        </LayoutGroup>
    )
}

// Compact Card
function CompactCard ({param, setExpanded}) {
    const IconPng = param.png;
    return (
        <div className="compactcard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        >
            <div className='radialbar'>
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <IconPng />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}

// Expanded Card
function ExpandedCard ({param, setExpanded}) {
    return (
        <div className="ExpandedCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
        >
        <div>
            <UilTimes onClick={setExpanded} />
        </div>
        <span>{param.title}</span>
        <div className='chartContainer'>
            Chart
        </div>
        <span>Last 24 hours</span>

        </div>
    )
}

export default Card