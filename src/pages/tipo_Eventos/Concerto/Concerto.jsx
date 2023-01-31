import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faPanorama, faMasksTheater } from '@fortawesome/free-solid-svg-icons'
import "../../Main_ingresso/Main_ingresso"
import Section_eventos_alta from "../../section_eventos_alta/Section_eventos_alta"

export default function Concerto() {

    return (
        <>
            <div className="insivivel"></div>
            <div className="container container_fundo">

                <div className="container_eventos_listados">
                    <div className="container_eventos_listados_div">
                        <Link to={"/"}>
                            <FontAwesomeIcon icon={faTicket}
                                className="bilhete" />
                            <p className="fw-bold">Todos</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"concertos"}>
                            <FontAwesomeIcon icon={faMasksTheater}
                                className="bilhete" />
                            <p className="fw-bold">Concerto</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"festas"}>
                            <FontAwesomeIcon icon={faPanorama}
                                className="bilhete" />
                            <p className="fw-bold">Festa</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"danca"}>
                            <FontAwesomeIcon icon={faTicket}
                                className="bilhete" />
                            <p className="fw-bold">Dança</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"teatro"}>
                            <FontAwesomeIcon icon={faTicket}
                                className="bilhete" />
                            <p className="fw-bold">Teatro</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"espetaculos"}>
                            <FontAwesomeIcon icon={faTicket}
                                className="bilhete" />
                            <p className="fw-bold">Espetaculos</p>
                        </Link>
                    </div>

                
                </div>
            </div>

            <div className='container'>
            <div className="container_conteudo">
                        <div className="conteudo_eventos">
                            <div className="conteudo_eventos_vermais">
                                <h4 className="pb-3 pt-2 text-white"> Concertos</h4>
                            </div>
                        </div>
                    </div>


                    <div className="container_conteudo">
                        <div className="section_eventos">
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                        </div>
                    </div>
            </div>
        </>
    )

}