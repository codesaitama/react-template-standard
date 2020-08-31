/* eslint import/no-webpack-loader-syntax: off */
import BarChartComponent from './BarChartComponent';
import BubbleChartComponent from './BubbleChartComponent';
import DoughnutChartComponent from './DoughnutChartComponent';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import PolarChartComponent from './PolarChartComponent';
import RadarComponent from './RadarComponent';
import ScatterChartComponent from './ScatterChartComponent';

const BarChartComponentExampleSource = require('!!raw-loader!./BarChartComponent');
const BubbleChartComponentExampleSource = require('!!raw-loader!./BubbleChartComponent');
const DoughnutChartComponentExampleSource = require('!!raw-loader!./DoughnutChartComponent');
const LineChartComponentExampleSource = require('!!raw-loader!./LineChartComponent');
const PieChartComponentExampleSource = require('!!raw-loader!./PieChartComponent');
const PolarChartComponentExampleSource = require('!!raw-loader!./BarChartComponent');
const RadarComponentExampleSource = require('!!raw-loader!./BarChartComponent');
const ScatterChartComponentExampleSource = require('!!raw-loader!./BarChartComponent');

export const chartsObject = [
    {
        title: 'Bar',
        discription: 'A bar chart is a way of showing data as bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.',
        component: BarChartComponent,
        code: BarChartComponentExampleSource
    },
    {
        title: 'Line',
        discription: 'A line chart is a way of plotting data points on a line. Often, it is used to show trend data, and the comparison of two data sets.',
        component: LineChartComponent,
        code: LineChartComponentExampleSource
    },
    {
        title: 'Doughnut',
        discription: 'Doughnut charts are probably the most commonly used charts there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.',
        component: DoughnutChartComponent,
        code: DoughnutChartComponentExampleSource
    },
    {
        title: 'Pie',
        discription: 'Pie charts are probably the most commonly used charts there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.',
        component: PieChartComponent,
        code: PieChartComponentExampleSource
    },
    {
        title: 'Radar',
        discription: 'A radar chart is a way of showing multiple data points and the variation between them.',
        component: RadarComponent,
        code: RadarComponentExampleSource
    },
    {
        title: 'Bubble',
        discription: 'A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles.',
        component: BubbleChartComponent,
        code: BubbleChartComponentExampleSource
    },
    {
        title: 'Scatter',
        discription: 'Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties.',
        component: ScatterChartComponent,
        code: ScatterChartComponentExampleSource
    },
    {
        title: 'Polar',
        discription: 'A Polar chart is a graph drawn with circular, polar coordinates. As shown in the example that follows, data points often fall within a certain distance of the middle of the circular graph and another axis.',
        component: PolarChartComponent,
        code: PolarChartComponentExampleSource
    }
]