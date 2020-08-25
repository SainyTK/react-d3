import React, { useRef, useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle';
import * as d3 from 'd3';
import codeFormat from '../utils/codeFormat';
import useInterval from '../hooks/useInterval';

const generateDataset = () => Array.from(new Array(10)).map(() => [Math.floor(Math.random() * 600 + 20), Math.floor(Math.random() * 600 + 20)])

const TransitionD3 = () => {

    const [visibleCircles, setVisibleCircles] = useState(generateDataset());

    const ref = useRef();

    useInterval(() => {
        console.log('test')
        setVisibleCircles(generateDataset());
    }, 2000);

    useEffect(() => {
        console.log('data', visibleCircles);
        const svgElement = d3.select(ref.current);
        svgElement.selectAll('circle')
            .data(visibleCircles, d => d)
            .join(
                enter => (
                    enter.append("circle")
                        .attr("cx", d => d[0])
                        .attr("cy", d => d[1])
                        .attr("r", 0)
                        .attr("fill", "cornflowerblue")
                        .call(enter => (
                            enter.transition().duration(1200)
                                .attr("r", 20)
                                .style("opacity", 1)
                        ))
                ),
                update => (
                    update.attr("fill", "lightgrey")
                ),
                exit => (
                    exit.attr("fill", "tomato")
                        .call(exit => (
                            exit.transition().duration(1200)
                                .attr("r", 0)
                                .style("opacity", 0)
                                .remove()
                        ))
                ),
            )
    }, [visibleCircles]);

    return (
        <div className='container'>
            <PageTitle title='Transition With D3' />
            <svg width="768" height="768" viewBox="0 0 768 768" ref={ref} />
        </div>
    )
}

export default TransitionD3
