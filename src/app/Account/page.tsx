"use client"
import style from "./page.module.css"
import { useState } from "react"
import UserInfoPanel from "@/src/Components/Account/UserInfoPanel"
import UserOrdersPanel from "@/src/Components/Account/UserOrdersPanel"

function AccountPage() {

    const [renderizar, setRenderizar] = useState(<UserInfoPanel />)

    const onClickOrders = () => {
        setRenderizar(<UserOrdersPanel />)
    }

    const onClickInfo = () => {
        setRenderizar(<UserInfoPanel />)
    }

    return (
        <main className={style.grid}>
            <div className="col-start-1 col-end-3 col-span-2"></div>
            <div className="  border-white border-solid border mr-4 rounded-lg flex flex-col text-center">
                <div className=" mt-4 border-b-2 m-10 text-2xl">
                    <h1>
                        Perfil de Usuario
                    </h1>
                </div>
                <button
                    onClick={onClickInfo}
                    className="text-2xl m-10 relative group overflow-hidden"
                >
                    Perfil
                    <div className="absolute inset-0 border-b-2 border-l-2 border-t-0 border-r-0 group-hover:border-green-500 transition duration-300 ease-in-out"></div>
                </button>
                <button onClick={onClickOrders} className="text-2xl m-10 relative group overflow-hidden"
                >
                    Ordenes
                    <div className="absolute inset-0 border-b-2 border-l-2 border-t-0 border-r-0 group-hover:border-green-500 transition duration-300 ease-in-out"></div>
                </button>

            </div>
            <div className="  border-white border-solid border mr-4 rounded-lg flex flex-col text-center">
                {renderizar}
            </div>
        </main>
    )
}

export default AccountPage