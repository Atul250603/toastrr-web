export default function ToasterPropsTable() {
    const toasterProps = [
        {
            prop: "position",
            required: false,
            type: "string",
            possibleValues: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
            default: "'top-right'"
        },
        {
            prop: "theme",
            required: false,
            type: "string",
            possibleValues: "'light' | 'dark'",
            default: "'light'"
        },
        {
            prop: "duration",
            required: false,
            type: "number | 'infinite'",
            possibleValues: "any number (ms) or 'infinite'",
            default: "3000"
        },
        {
            prop: "closeButton",
            required: false,
            type: "boolean",
            possibleValues: "true | false",
            default: "true"
        }
    ];

    return (
        <div className="flex flex-col w-full justify-center">
            <div className="overflow-x-auto shadow-[inset_0_0_2px_rgba(0,0,0,0.3)] rounded-lg border border-gray-200">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium border-r border-gray-200">Prop</th>
                            <th scope="col" className="px-6 py-3 font-medium border-r border-gray-200">Required</th>
                            <th scope="col" className="px-6 py-3 font-medium border-r border-gray-200">Type</th>
                            <th scope="col" className="px-6 py-3 font-medium border-r border-gray-200">Possible Values</th>
                            <th scope="col" className="px-6 py-3 font-medium">Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toasterProps.map((prop, index) => (
                            <tr key={index} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium border-r border-gray-200">
                                    <div className="flex flex-row items-center gap-1">
                                        {prop.prop}
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-r border-gray-200">{prop.required ? "Yes" : "No"}</td>
                                <td className="px-6 py-4 border-r border-gray-200">{prop.type}</td>
                                <td className="px-6 py-4 border-r border-gray-200">{prop.possibleValues}</td>
                                <td className="px-6 py-4">{prop.default}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
