import HomePage from './pages/HomePage';
import SVGPage from './pages/SVGPage';
import CircleD3Page from './pages/CircleD3Page';
import CirclesD3Page from './pages/CirclesD3Page';
import CircleReactPage from './pages/CircleReactPage';
import CirclesReactPage from './pages/CirclesReactPage';
import TransitionD3 from './pages/TransitionD3';
import TransitionReact from './pages/TransitionReact';
import AxisD3 from './pages/AxisD3';
import AxisReact from './pages/AxisReact';

const ROUTES = [
    {
        name: 'svg',
        path: '/svg',
        component: SVGPage
    },
    {
        name: 'circle d3',
        path: '/circle-d3',
        component: CircleD3Page
    },
    {
        name: 'circle react',
        path: '/circle-react',
        component: CircleReactPage
    },
    {
        name: 'circles d3',
        path: '/circles-d3',
        component: CirclesD3Page
    },
    {
        name: 'circles react',
        path: '/circles-react',
        component: CirclesReactPage
    },
    {
        name: 'transition with d3',
        path: '/transition-d3',
        component: TransitionD3
    },
    {
        name: 'transition with react',
        path: '/transition-react',
        component: TransitionReact
    },
    {
        name: 'axis with d3',
        path: '/axis-d3',
        component: AxisD3
    },
    {
        name: 'axis with react',
        path: '/axis-react',
        component: AxisReact
    },
    {
        name: 'home',
        path: '/',
        component: HomePage
    }
]

export default ROUTES;