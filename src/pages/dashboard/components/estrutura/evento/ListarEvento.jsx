import React, { useEffect, useState } from "react";
import Tabela from "../../Tabela/Tabela";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "./css/Criar.css"
import axios from "axios";


export default function ListarEvento() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);



    return (
        <>



            <div>


                <Formik>
                    {({ isSubmitting, errors, touched, values }) => (
                        <div className="mt-4 mb-3">
                            <Tabela></Tabela>
                        </div>
                    )}
                </Formik>
            </div>























        </>

    )

}

