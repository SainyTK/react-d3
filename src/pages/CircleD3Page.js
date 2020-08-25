import React, { useRef, useEffect } from 'react'
import PageTitle from '../components/PageTitle';
import * as d3 from 'd3';
import codeFormat from '../utils/codeFormat';

const code = codeFormat(`
const CircleD3Page = () => {

    const ref = useRef();

    useEffect(() => {
        const svgElement = d3.select(ref.current);
        svgElement.append('circle')
            .attr("cx", 150)
            .attr("cy", 70)
            .attr("r", 30)
    }, [])

    return (
        <div className='container'>
            <PageTitle title='Circle With D3' />
            <svg width="300" height="300" viewBox="0 0 300 300" ref={ref} />
        </div>
    )
}`
)

const CircleD3Page = () => {

    const ref = useRef();

    useEffect(() => {
        const svgElement = d3.select(ref.current);
        svgElement.append('circle')
            .attr("cx", 150)
            .attr("cy", 70)
            .attr("r", 30)
    }, [])

    return (
        <div className='container'>
            <PageTitle title='Circle With D3' />
            <code>{code}</code>
            <svg width="300" height="300" viewBox="0 0 300 300" ref={ref} />
        </div>
    )
}

export default CircleD3Page
