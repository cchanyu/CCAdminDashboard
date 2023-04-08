import React, { useState } from 'react'
import '../css/Card.css';

import Chart from 'react-apexcharts';
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

    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
        }
    }

    return (
        <div className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
        >
        <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}>
            <UilTimes onClick={setExpanded} />
        </div>
        <span>{param.title}</span>
        <div className='chartContainer'>
            <Chart series={param.series} type='area' options={data.options} />
        </div>
        <span>Last 24 hours</span>

        </div>
    )
}

export default Card