import RepDeets from "./RepDeets";

export default function Reports() {
    return (
        <>

            <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div class="py-8">
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" class="rtable">
                                            Patient
                                        </th>
                                        <th scope="col" class="rtable">
                                            Doctor
                                        </th>
                                        <th scope="col" class="rtable">
                                            MRI Generation Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <RepDeets picture="https://picsum.photos/200/300" name="Bro dude" doctor="weird Doc" 
                                    date="11-DEC-21"/>
                                    <RepDeets picture="https://picsum.photos/200/300" name="Bro dude" doctor="weird Doc" 
                                    date="11-DEC-21"/>
                                    <RepDeets picture="https://picsum.photos/200/300" name="Bro dude" doctor="weird Doc" 
                                    date="11-DEC-21"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
