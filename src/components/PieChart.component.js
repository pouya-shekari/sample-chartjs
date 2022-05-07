import React from 'react';

import { Chart as ChartJS, ArcElement,Title, Tooltip, Legend } from 'chart.js';


import {Pie} from 'react-chartjs-2';
import faker from '@faker-js/faker'

ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Pie Chart',
            font: {
                size: 20,
            }
        },
        legend: {
            position: 'bottom',
            labels:{
                font:{
                    size: 15,
                }
            },
            subtitle: {
                display: true,
                text: 'sample Pie chart',
            },
            tooltip: {
                enabled: true,

            }
        }
    },
    layout: {
        padding: {
            left: 0,
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
}

const labels= ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

export const data ={
    labels: labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(63,204,96,0.4)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ]
}

const PieChart = () =>{
    return(
        <>
            <Pie height={500} data={data} options={options} />
        </>
    )
}

export {PieChart}