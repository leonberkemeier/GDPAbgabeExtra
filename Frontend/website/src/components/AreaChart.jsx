'use client';

import {AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const capitalInvestments =[
    {
        "amount": 10193.885230096468,
        "year": 0,
        "rate": 0.019388523009646802
    },
    {
        "amount": 7745.145287690644,
        "year": 1,
        "rate": -0.2402165501310682
    },
    {
        "amount": 8732.3495831084,
        "year": 2,
        "rate": 0.1274610428530914
    },
    {
        "amount": 11255.802487100524,
        "year": 3,
        "rate": 0.288977540348753
    },
    {
        "amount": 14601.642482390362,
        "year": 4,
        "rate": 0.29725468256255105
    },
    {
        "amount": 9316.824142267991,
        "year": 5,
        "rate": -0.3619331418705726
    },
    {
        "amount": 13771.457892499495,
        "year": 6,
        "rate": 0.47812792022358747
    },
    {
        "amount": 8417.34419619272,
        "year": 7,
        "rate": -0.3887833617980886
    },
    {
        "amount": 5816.75291359995,
        "year": 8,
        "rate": -0.30895627195203124
    }
]

const AreaChartComponent = ({data}) => {

    if (!data) {
        return <p style={{ color: "red" }}>"Es sind noch keine Daten verfügbar. Bitte geben Sie Ihre gewünschten Investitionsparameter ein und starten Sie die Simulation, um eine Prognose zu erhalten."</p>;
      }

    return (
        <ResponsiveContainer height="100%" width="100%">
            <AreaChart width={400} height={200} data={data}>
                <YAxis dataKey="amount"/>
                <XAxis dataKey='year'/>
                <CartesianGrid strokeDasharray="2 2"/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
                <Area type="monotone" stroke="32563eb" fill="#3b82f6" dataKey="amount" stackId="1"/>
                {/* <Area type="monotone" stroke="32563eb" fill="#eee" dataKey="year"/> */}
            </AreaChart>
        </ResponsiveContainer>
        
    );
};

const CustomTooltip = ({active, payload, label}) =>{
    if (active && payload && payload.length){
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
            <p className='text-medium text-lg'>{label}</p>
            <p className="text-sm text-blue-400">
                Amount:
                <span className='ml-2'>{payload[0].value} EUR</span>

            </p>
        </div>
    }
};

export default AreaChartComponent;