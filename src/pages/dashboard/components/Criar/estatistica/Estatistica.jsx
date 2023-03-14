
import React from "react";
import "./Estatistica.css"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import PrimeiroHeader from "../../primeiroHeader/PrimeiroHeader";



export default function Estatistica() {

    const data = [
        { name: 'Group A', value: 500 },
        { name: 'Group B', value: 100 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (

        <>
           <PrimeiroHeader nome={"Estatistica"}></PrimeiroHeader>

            <div className="container criar_evento_Estatistica">
                <div>
                    <label htmlFor="">Evento<span
                        className="nao_Obrigatorio"
                    >*</span></label>
                    <select
                        className="select_criarEvento_CriarEvento"
                        name="" id="" >
                        <option value="">Selecionar evento</option>
                        <option value="">Palestra</option>
                        <option value="">Shows</option>
                        <option value="">Concerto</option>
                        <option value="">Seminário</option>


                    </select>
                </div>

                <div>
                    <label htmlFor="">Bilhete<span
                        className="nao_Obrigatorio"
                    >*</span></label>
                    <select
                        className="select_criarEvento_CriarEvento"
                        name="" id="" >
                        <option value="">Selecionar evento</option>
                        <option value="">Palestra</option>
                        <option value="">Shows</option>
                        <option value="">Concerto</option>
                        <option value="">Seminário</option>


                    </select>
                </div>

            </div>


            <div className="container criar_evento_Estatistica container">
                <div className="criar_evento_Estatistica_conteudo">
                   <p>Azul</p>
                   <p>Verde</p>
                   <p>Laranja</p>
                   <p>vermelho</p>
                </div>
                <div className="criar_evento_Estatistica_conteudo">
                   <p>Azul</p>
                   <p>Verde</p>
                   <p>Laranja</p>
                   <p>vermelho</p>
                </div>
            </div>

            <div className="container estatistica_evento">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={160}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>

    )

}