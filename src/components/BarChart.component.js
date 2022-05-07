import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Bar} from 'react-chartjs-2';
import faker from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Bar Chart',
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
                text: 'sample Bar chart',
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

const dataList = [faker.datatype.number({min: 0, max: 100}), faker.datatype.number({min: 0, max: 100}), faker.datatype.number({min: 0, max: 100}), faker.datatype.number({min: 0, max: 100}), faker.datatype.number({min: 0, max: 100}), faker.datatype.number({min: 0, max: 100}), faker.datatype.number({min: 0, max: 100})]


export const data ={
    labels: labels,
    datasets:[
        {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: dataList
        }
    ]
}

const BarChart = () =>{
    return(
        <>
            <Bar height={500} data={data} options={options} />
        </>
    )
}

export {BarChart}