// * RepDeets means report details

//in this you will add picture, name, doctor and date

export default function RepDeets(props) {
    return (
        <>
            <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <a href="#" class="block relative">
                                <img alt="profil" src={props.picture} class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                        </div>
                        <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {props.name}
                            </p>
                        </div>
                    </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {props.doctor}
                    </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {props.date}
                    </p>
                </td>

            </tr>
        </>
    )
}
