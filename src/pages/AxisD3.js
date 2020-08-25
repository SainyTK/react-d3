import React, { useRef, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import * as d3 from 'd3';

const AxisD3 = () => {

    const ref = useRef();

    useEffect(() => {
        const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([10, 290])

        const svgElement = d3.select(ref.current);
        const axisGenerator = d3.axisBottom(xScale);

        svgElement.append('g').call(axisGenerator);
    }, []);

    return (
        <div className='container'>
            <PageTitle title="Axis with D3"/>
            <svg ref={ref}/>
        </div>
    )
}

export default AxisD3
