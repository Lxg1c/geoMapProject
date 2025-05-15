import Header from "@/widgets/header/header";
import {Outlet} from "react-router-dom";

export default function  Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* Это место, где будут отображаться страницы */}
            </main>
        </>
    )
}