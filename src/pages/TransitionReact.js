import React, { useRef, useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle';
import * as d3 from 'd3';
import codeFormat from '../utils/codeFormat';
import useInterval from '../hooks/useInterval';
import { useSpring, animated } from 'react-spring';

const allCircles = Array.from(new Array(10)).map((_, i) => i);

const generateDataset = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        if (Math.random() >= 0.5)
            arr.push(i);
    }
    return arr;
}

const TransitionReact = () => {

    const [visibleCircles, setVisibleCircles] = useState(generateDataset());

    useInterval(() => {
        setVisibleCircles(generateDataset());
    }, 2000);

    return (
        <div className='container'>
            <PageTitle title='Transition With D3' />
            <svg width="768" height="768" viewBox="0 0 768 768">
                {
                    allCircles.map((c) => (
                        <AnimatedCircle key={c} index={c} isShowing={visibleCircles.includes(c)}/>
                    ))
                }
            </svg>
        </div>
    )
}

const AnimatedCircle = ({ index, isShowing }) => {
    const wasShowing = useRef(false);

    useEffect(() => {
        wasShowing.current = isShowing;
    }, [isShowing]);

    const style = useSpring({
        config: {
            duration: 1200
        },
        r: isShowing ? 20 : 0,
        opacity: isShowing ? 1 : 0
    });

    return (
        <animated.circle
            {...style}
            cx={(index + 1) * 15 * 10}
            cy={30}
            fill={
                !isShowing ? "tomato" :
                    !wasShowing.current ? "cornflowerblue" : "lightGrey"
            }
        />
    )
}

export default TransitionReact
