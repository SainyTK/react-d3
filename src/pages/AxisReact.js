import React, { useMemo } from 'react'
import PageTitle from '../components/PageTitle'
import * as d3 from 'd3';

const AxisReact = () => {

    const ticks = useMemo(() => {
        const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, 290]);

        return xScale.ticks().map(value => ({
            value,
            xOffset: xScale(value)
        }))
    }, []);

    return (
        <div className='container'>
            <PageTitle title="Axis with React" />
            <svg>
                <path
                    d="M 9.5 0.5 H 290.5"
                    stroke="currentColor"
                />
                {
                    ticks.map(({ value, xOffset }) => (
                        <g key={value} transform={`translate(${xOffset}, 0)`}>
                            <line
                                y2="6"
                                color="currentColor"
                            />
                            <text
                                key={value}
                                style={{
                                    fontSize: "10px",
                                    textAnchor: "middle",
                                    transform: "translateY(20px)"
                                }}
                            >
                                {value}
                            </text>
                        </g>
                    ))
                }
            </svg>
        </div>
    )
}

export default AxisReact
