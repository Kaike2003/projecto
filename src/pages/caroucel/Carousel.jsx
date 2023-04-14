/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Caroucel.css"
import Concerto from "../../assets/icons/concerto.png"
import Teatro from "../../assets/icons/teatro.png"
import Palestra from "../../assets/icons/palestra.png"
import Seminario from "../../assets/icons/seminario.png"
import Festa from "../../assets/icons/festa.png"
import Todos from "../../assets/icons/todos.png"





import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { faPanorama } from '@fortawesome/free-solid-svg-icons'
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    delay
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useState } from "react";
import { useEffect } from "react";


function ParallaxText({ children, baseVelocity = 150 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 6500);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>    


            </motion.div>
        </div>
    );
}

export default function Carousel() {
    const carousel = useRef()

    useEffect(() => {

        // console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)


    }, [])

    const [width, setWidth] = useState()


    return (
        <section>

            <ParallaxText baseVelocity={5}>
                <div className="container_motion_caroucel" >
                    <div className="caroucel" ref={carousel}>
                        <div className="inner">

                            <div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/todosEventos"}>
                                        <div className="link_style">
                                            <img src={Todos} alt="" 
                                            className="bilhete"/>
                                            {/* <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" /> */}
                                            <p className="">Todos</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/concertos"}>
                                        <div className="link_style">
                                            <img
                                            className="bilhete"
                                            src={Concerto}></img>
                                            {/* <FontAwesomeIcon icon={faMasksTheater}
                                                className="bilhete" /> */}
                                            <p className="">Concerto</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/festas"}>
                                        <div className="link_style">
                                        <img
                                            className="bilhete"
                                            src={Festa}></img>
                                            {/* <FontAwesomeIcon icon={faPanorama}
                                                className="bilhete" /> */}
                                            <p className="">Shows</p>
                                        </div>
                                    </Link>

                                </div>
                            </div>

                            <div

                                className="item" >

                                <div className="container_eventos_listados_div">
                                    <Link to={"/palestra"}>
                                        <div className="link_style">
                                        <img
                                            className="bilhete"
                                            src={Palestra}></img>
                                            {/* <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" /> */}
                                            <p className="">Palestra</p>
                                        </div>
                                    </Link>
                                </div>

                            </div>

                            <div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/teatro"}>
                                        <div className="link_style">
                                        <img
                                            className="bilhete"
                                            src={Teatro}></img>
                                            {/* <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" /> */}
                                            <p className="">Teatro</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* <div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/espetaculos"}>
                                        <div className="link_style">
                                            <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" />
                                            <p className="">Espetaculos</p>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}

                            <div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/"}>
                                        <div className="link_style">
                                        <img
                                            className="bilhete"
                                            src={Seminario}></img>
                                            {/* <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" /> */}
                                            <p className="">Seminário</p>
                                        </div>
                                    </Link>
                                </div>
                            </div> 

                        </div>
                    </div>

                </div>
            </ParallaxText>


        </section>
    );
}
