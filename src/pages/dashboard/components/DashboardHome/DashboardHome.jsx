import React from "react";
import DashboardHomeHeader from "./DashboardHomeHeader";
import HomeCards from "./HomeCards";
import "./DashboardHome.css"


export default function DashboardHome() {

    return (
        <>

            <div className="container">

                <div>
                    <DashboardHomeHeader></DashboardHomeHeader>
                </div>

                <div className="classHomeCards">
                    <HomeCards></HomeCards>
                </div>

            </div>

        </>
    )

}