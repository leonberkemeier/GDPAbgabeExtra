'use client';

import {LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const LineChartComponent = ({data}) => {
    if (!data || data.length === 0) {
        return <p>No data available. Run a simulation first.</p>;
    }

    // Formatierte Daten debuggen
    console.log("Chart Data:", data);

    // Sicherstellen, dass die Datenstruktur korrekt ist
    const chartData = data.map((entry, index) => ({
        year: entry.year, // X-Achse bleibt gleich
        stock: entry.stock ?? 0,  // Falls undefined, setze auf 0
        bond: entry.bond ?? 0,
        real_estate: entry.real_estate ?? 0
    }));

    console.log("Formatted Chart Data:", chartData);

    return (
        <ResponsiveContainer width="90%" height={400}>
            <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />

                {/* Drei Linien für Aktien, Anleihen & Immobilien */}
                <Line type="monotone" dataKey="stock" stroke="blue" name="Aktien" />
                <Line type="monotone" dataKey="bond" stroke="green" name="Anleihen" />
                <Line type="monotone" dataKey="real_estate" stroke="red" name="Immobilien" />
            </LineChart>
        </ResponsiveContainer>
    );
};
export default LineChartComponent;