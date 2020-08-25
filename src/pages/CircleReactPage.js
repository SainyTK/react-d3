import React, { useRef, useEffect } from 'react'
import PageTitle from '../components/PageTitle';
import * as d3 from 'd3';
import codeFormat from '../utils/codeFormat';

const code = codeFormat(`
const CircleReactPage = () => {

    return (
        <div className='container'>
            <PageTitle title='Circle With React' />
            <svg width="300" height="300" viewBox="0 0 300 300" >
                <circle cx="150" cy="70" r="30"/>
            </svg>
        </div>
    )
}
`)

const CircleReactPage = () => {

    return (
        <div className='container'>
            <PageTitle title='Circle With React' />
            <code>{code}</code>
            <svg width="300" height="300" viewBox="0 0 300 300" >
                <circle cx="150" cy="70" r="30"/>
            </svg>
        </div>
    )
}

export default CircleReactPage
