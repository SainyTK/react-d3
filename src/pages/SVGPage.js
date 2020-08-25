import React from 'react'
import { useHistory } from 'react-router-dom'
import PageTitle from '../components/PageTitle';
import codeFormat from '../utils/codeFormat';

const code = codeFormat(`
const SVGPage = () => {
    return (
        <div>
            <svg style={{border: '1px solid gold'}}/>
        </div>
    )
}
`)

const SVGPage = () => {

    return (
        <div className='container'>
            <PageTitle title="Basic SVG" />
            <div>
                <code>{code}</code>
            </div>
            <div>
                <svg style={{ border: '1px solid gold' }} />
            </div>
        </div>
    )
}

export default SVGPage
