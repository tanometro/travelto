import { LoginForm } from "@/Components/login/LoginForm";
import Image from 'next/image'

export default function dashboardLogin() {
    return (
        <section className="h-screen">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="flex justify-center items-start mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <Image
                            src="/image/traveltoLogin.jpg"
                            className="h-[500px]"
                            width={300}
                            height={500}
                            alt="Phone image" />
                    </div>
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">

                        <LoginForm />
                    </div>
                </div>
            </div>

        </section>
    )
}