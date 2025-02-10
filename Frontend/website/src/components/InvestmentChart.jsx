import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const colors = {
    stock: "blue",
    bond: "green",
    real_estate: "red",
};

const InvestmentChart = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No data available. Run a simulation first.</p>;
    }

    // Daten umformatieren, sodass alle Anlageklassen in einem gemeinsamen Array sind
    const chartData = data[0].years.map((year, index) => ({
        year,
        stock: data[0].values[index], // Aktienwerte
        bond: data[1].values[index],  // Anleihenwerte
        real_estate: data[2].values[index], // Immobilienwerte
    }));

    return (
        <ResponsiveContainer width="90%" height={400}>
            <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />

                {/* Drei Linien für Aktien, Anleihen & Immobilien */}
                <Line type="monotone" dataKey="stock" stroke={colors.stock} name="Aktien" />
                <Line type="monotone" dataKey="bond" stroke={colors.bond} name="Anleihen" />
                <Line type="monotone" dataKey="real_estate" stroke={colors.real_estate} name="Immobilien" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default InvestmentChart;
