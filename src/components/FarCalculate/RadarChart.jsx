import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);




const RadarChart = () => {

    const data = {
        labels: ['plot', 'area', 'incentive'],
        datasets: [
            {
                label: 'chart',
                data: [6, 4, 5, 0, 0, 5, 6, 0, 0], //need set t1-6, r-4,l-5
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };
    return <Radar data={data} />;
};

export default RadarChart;