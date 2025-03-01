export default function ToastPropsTable({ toastType }: { toastType: 'regular' | 'promise' }) {
    const regularToastProps = [
        {
            prop: "message",
            required: true,
            type: "string",
            description: "The text content to display in the toast notification",
            possibleValues: "any string",
            default: "-"
        },
        {
            prop: "duration",
            required: false,
            type: "number | 'infinite'",
            description: "Override the default duration for this specific toast",
            possibleValues: "any number (ms) or 'infinite'",
            default: "from Toaster config"
        },
        {
            prop: "theme",
            required: false,
            type: "string",
            possibleValues: "'light' | 'dark'",
            default: "from Toaster config"
        },
        {
            prop: "closeButton",
            required: false,
            type: "boolean",
            description: "Whether to show a close button on the toast",
            possibleValues: "true | false",
            default: "from Toaster config"
        }
    ];

    const promiseToastProps = [
        {
            prop: "loadingMessage",
            required: true,
            type: "string",
            description: "Message to show while the promise is pending",
            possibleValues: "any string",
            default: "-"
        },
        {
            prop: "successMessage",
            required: true,
            type: "string",
            description: "Message to show when the promise resolves successfully",
            possibleValues: "any string",
            default: "-"
        },
        {
            prop: "errorMessage",
            required: true,
            type: "string",
            description: "Message to show when the promise is rejected",
            possibleValues: "any string",
            default: "-"
        },
        {
            prop: "duration",
            required: false,
            type: "number | 'infinite'",
            description: "Override the default duration for this specific toast",
            possibleValues: "any number (ms) or 'infinite'",
            default: "from Toaster config"
        },
        {
            prop: "theme",
            required: false,
            type: "string",
            possibleValues: "'light' | 'dark'",
            default: "from Toaster config"
        },
        {
            prop: "closeButton",
            required: false,
            type: "boolean",
            description: "Whether to show a close button on the toast",
            possibleValues: "true | false",
            default: "from Toaster config"
        }
    ];

    const TableComponent = ({ props }: { props: typeof regularToastProps }) => (
        <div className="mb-8">
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
                        {props.map((prop, index) => (
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
    );

    return (
        <div className="flex flex-col w-full justify-center">
            {(toastType === 'regular') ? <TableComponent props={regularToastProps}/>
            :<TableComponent props={promiseToastProps}/>}
        </div>
    );
}
