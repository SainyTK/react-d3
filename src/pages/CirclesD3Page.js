import React, { useRef, useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle';
import * as d3 from 'd3';
import codeFormat from '../utils/codeFormat';

const code = codeFormat(`
const generateDataset = () => Array.from(new Array(10)).map(() => [Math.floor(Math.random() * 600 + 20), Math.floor(Math.random() * 600 + 20)])

const CirclesD3Page = () => {

    const ref = useRef();

    const [dataset, setDataset] = useState(generateDataset());

    useEffect(() => {
        const svgElement = d3.select(ref.current);
        svgElement.selectAll('circle')
            .data(dataset)
            .join('circle')
            .attr("cx", d => d[0])
            .attr("cy", d => d[1])
            .attr("r", 20)
    }, [dataset]);

    useEffect(() => {
        const iv = setInterval(() => {
            setDataset(generateDataset());
        }, 2000);
        return () => clearInterval(iv)
    }, []);

    return (
        <div className='container'>
            <PageTitle title='Circles With D3' />
            <svg width="768" height="768" viewBox="0 0 768 768" ref={ref} />
        </div>
    )
}
`);

const generateDataset = () => Array.from(new Array(10)).map(() => [Math.floor(Math.random() * 600 + 20), Math.floor(Math.random() * 600 + 20)])

const CirclesD3Page = () => {

    const ref = useRef();

    const [dataset, setDataset] = useState(generateDataset());

    useEffect(() => {
        const svgElement = d3.select(ref.current);
        svgElement.selectAll('circle')
            .data(dataset)
            .join('circle')
            .attr("cx", d => d[0])
            .attr("cy", d => d[1])
            .attr("r", 20)
    }, [dataset]);

    useEffect(() => {
        const iv = setInterval(() => {
            setDataset(generateDataset());
        }, 2000);
        return () => clearInterval(iv)
    }, []);

    return (
        <div className='container'>
            <PageTitle title='Circles With D3' />
            <code>{code}</code>
            <svg width="768" height="768" viewBox="0 0 768 768" ref={ref} />
        </div>
    )
}

export default CirclesD3Page
