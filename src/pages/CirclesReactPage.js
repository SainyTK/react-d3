import React, { useRef, useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle';
import codeFormat from '../utils/codeFormat';

const code = codeFormat(`
const generateDataset = () => Array.from(new Array(10)).map(() => [Math.floor(Math.random() * 600 + 20), Math.floor(Math.random() * 600 + 20)])

const CirclesReactPage = () => {

    const [dataset, setDataset] = useState(generateDataset());

    useEffect(() => {
        const iv = setInterval(() => {
            setDataset(generateDataset());
        }, 2000);
        return () => clearInterval(iv)
    }, []);

    return (
        <div className='container'>
            <PageTitle title='Circles With React' />
            <svg width="768" height="768" viewBox="0 0 768 768" >
                {
                    dataset.map((d, i) => (
                        <circle cx={d[0]} cy={d[1]} r="20" />
                    ))
                }
            </svg>
        </div>
    )
}
`)

const generateDataset = () => Array.from(new Array(10)).map(() => [Math.floor(Math.random() * 600 + 20), Math.floor(Math.random() * 600 + 20)])

const CirclesReactPage = () => {

    const [dataset, setDataset] = useState(generateDataset());

    useEffect(() => {
        const iv = setInterval(() => {
            setDataset(generateDataset());
        }, 2000);
        return () => clearInterval(iv)
    }, []);

    return (
        <div className='container'>
            <PageTitle title='Circles With React' />
            <code>{code}</code>
            <svg width="768" height="768" viewBox="0 0 768 768" >
                {
                    dataset.map((d, i) => (
                        <circle cx={d[0]} cy={d[1]} r="20" />
                    ))
                }
            </svg>
        </div>
    )
}

export default CirclesReactPage
