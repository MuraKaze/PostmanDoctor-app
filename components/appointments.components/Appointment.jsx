import AppDeets from "./AppDeets";

export default function Appointment() {
    return (
        <div className="m-6">

            <table className="tabul">
                <thead>
                    <tr>
                        <th className="tabuldh">
                            #
                        </th>
                        <th className="tabuldh">
                            Patient Name
                        </th>
                        <th className="tabuldh">
                            Day
                        </th>
                        <th className="tabuldh">
                            Date and Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <AppDeets sr='1' name='Jane' day="Tuesday" time=" 09-Dec-2021 (1 AM)"/>
                    <AppDeets sr='2' name='Eric' day='Monday' time='13-Dec-2021 (2 AM)'/>
                    <AppDeets sr='3' name='Julien' day='Wednesday' time='15-Dec-2021 (2 AM)'/>
                </tbody>
            </table>

        </div>
    )
}
