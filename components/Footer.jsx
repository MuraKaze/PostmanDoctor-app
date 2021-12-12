export default function Footer() {
    return (
            <div className="container border-2 border-t-gray-300">

                <footer className="bg-white  pt-4 pb-8 xl:pt-8">
                    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 ">
                        <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
                            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                                <div className="text-center">
                                    <h2 className="text-gray-500  text-md uppercase mb-4">
                                        DEvelopers
                                    </h2>
                                    <ul>
                                        <li className="mb-4 hover:text-gray-800  transition-colors duration-200">
                                            <p href="#">
                                                Abdul Hannan MAlik
                                            </p>
                                        </li>
                                        <li className="mb-4 hover:text-gray-800  transition-colors duration-200">
                                            <p>
                                                Muhammad UmaR
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </footer>


            </div>
    )
}
