export default function Prescriptions() {
    return (
        <div className="m-6">

            <table className="tabul">
                <thead>
                    <tr>
                        <th className="tabuldh">
                            #
                        </th>
                        <th className="tabuldh">
                            Doctor
                        </th>
                        <th className="tabuldh">
                            Problem
                        </th>
                        <th className="tabuldh">
                            Prescription
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-gray-700">
                        <td className="border p-4 ">
                            1
                        </td>
                        <td className="border p-4 ">
                            Jean Marc
                        </td>
                        <td className="border p-4 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, molestiae?
                        </td>
                        <td className="border p-4 dark:border-dark-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quo inventore.
                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="border p-4 ">
                            2
                        </td>
                        <td className="border p-4 ">
                            Eric
                        </td>
                        <td className="border p-4 ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis?
                        </td>
                        <td className="border p-4 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam!
                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="border p-4 ">
                            3
                        </td>
                        <td className="border p-4 ">
                            Julien
                        </td>
                        <td className="border p-4 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique!
                        </td>
                        <td className="border p-4 ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolores nihil adipisci repellendus!
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
