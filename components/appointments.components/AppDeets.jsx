// * AppDeets means Appointment Details


export default function AppDeets(props) {
    return (
            <tr className="text-gray-700">
                <td className="border p-4">
                    {props.sr}
                </td>
                <td className="border p-4">
                    {props.name}
                </td>
                <td className="border p-4">
                    {props.day}
                </td>
                <td className="border p-4">
                    {props.time}
                </td>
            </tr>
    )
}
