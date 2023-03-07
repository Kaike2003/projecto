import React from "react";
import "./Caroucel.css"
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
    const { scrollX } = useScroll();
    const scrollVelocity = useVelocity(scrollX);
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
        let moveBy = directionFactor.current * baseVelocity * (delta / 3000);

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
                <span>{children} </span>
                <span>{children} </span>


            </motion.div>
        </div>
    );
}

export default function Carousel() {
    const carousel = useRef()

    useEffect(() => {

        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)


    }, [])

    const [width, setWidth] = useState()


    return (
        <section>

            <ParallaxText baseVelocity={3}>
                <motion.div className="container_motion_caroucel" >
                    <motion.div className="caroucel" ref={carousel}
                        whileTap={{ cursor: "grabbing" }}>
                        <motion.div className="inner" /*drag={"x"}*/
                            dragTransition={{ timeConstant: 200 }}
                            dragConstraints={{ right: 0, left: - width }}
                        /*initial={{ x: 0 }}
                        animate={{ x: 0, scale: 1.04}}
                        transition={
                            {
                                times: [0, 0.1, 0.9, 1],
                                delay: 0.5, x: {
                                    repeatDelay: 3,
                                    type: "spring",
                                    bounce: 0.25,
                                    velocity: 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 3,
                                    ease: ["linear"]
                                }, mass: 400, stiffness: 20
                            }} */
                        >

                            <motion.div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/todosEventos"}>
                                        <div className="link_style">
                                            <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" />
                                            <p className="">Todos</p>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/concertos"}>
                                        <div className="link_style">
                                            <FontAwesomeIcon icon={faMasksTheater}
                                                className="bilhete" />
                                            <p className="">Concerto</p>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/festas"}>
                                        <div className="link_style">
                                            <FontAwesomeIcon icon={faPanorama}
                                                className="bilhete" />
                                            <p className="">Shows</p>
                                        </div>
                                    </Link>

                                </div>
                            </motion.div>

                            <motion.div

                                className="item" >

                                <div className="container_eventos_listados_div">
                                    <Link to={"/palestra"}>
                                        <div className="link_style">
                                            <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" />
                                            <p className="">Palestra</p>
                                        </div>
                                    </Link>
                                </div>

                            </motion.div>

                            <motion.div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/teatro"}>
                                        <div className="link_style">
                                            <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" />
                                            <p className="">Teatro</p>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div

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
                            </motion.div>

                            <motion.div

                                className="item" >
                                <div className="container_eventos_listados_div">
                                    <Link to={"/"}>
                                        <div className="link_style">
                                            <FontAwesomeIcon icon={faTicket}
                                                className="bilhete" />
                                            <p className="">Seminários</p>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>

                        </motion.div>
                    </motion.div>

                </motion.div>
            </ParallaxText>


        </section>
    );
}
