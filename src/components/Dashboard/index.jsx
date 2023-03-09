import { Outlet, Routes, Route } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard/Dashboard";

export default function DashboardLayout() {

    return (
        <>

            <section>
                <Dashboard>
                    <Outlet />
                </Dashboard>
            </section>

            {/* <main>

            </main> */}

        </>
    )

}