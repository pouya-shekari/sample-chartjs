import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


import {Line} from 'react-chartjs-2';
import faker from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Line Chart',
            font: {
                size: 20,
            }
        },
        legend: {
            position: 'top',
            labels:{
                font:{
                    size: 15,
                }
            },
            subtitle: {
                display: true,
                text: 'sample Line chart',
            },
            tooltip: {
                enabled: true,

            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    scales: {
        x:{
            type: 'category',
        },
        y:{
            ticks: {
                beginAtZero: true,
            },
            min: 0,
            max: 100,
        }
    },
    /*animation: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
    }*/
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data ={
    labels: labels,
    datasets:[
        {
            label: 'My First dataset',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderWidth: 1,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        },
        {
            label: 'My Second dataset',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderWidth: 1,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        }
    ]
}

const LineChart = () =>{
    return(
        <>
            <Line height={500} data={data} options={options} />
        </>
    )
}

export {LineChart}