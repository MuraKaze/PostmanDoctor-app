import Link from "next/link";

export default function Header() {
    return (
        <div>

            <nav className="flex bg-white flex-wrap justify-between border-b-2 border-b-gray-500 my-5">
                <div className="lg:order-2 w-auto ">
                    <Link href='/'>
                    <a className="text-xl text-gray-800 font-semibold font-heading">
                        Dr. WHO?
                    </a>
                    </Link>
                </div>
                <div className="navbar-menu mr-4 lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
                    <Link href="/appointments">
                    <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" >
                        Appointments
                    </a>
                    </Link>
                    <Link href="/reports">
                    <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" >
                        Reports
                    </a>
                    </Link>
                    <Link href="/prescription">
                    <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" >
                        Presciptions
                    </a>
                    </Link>
                </div>
            </nav>

        </div>
    )
}
