import { FieldProps } from "./Field.interface"

const Field = ({ label, icon, ...props } : FieldProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="block" htmlFor="username">
                {label}
            </label>
            <div className="flex">
                <span className="
                    inline-flex items-center
                    px-3
                    text-gray-900 bg-gray-200
                    border border-r-0 rounded-l-lg border-gray-300
                ">
                    {icon}
                </span>
                <input
                    className="
                        block border rounded-r-lg
                        w-full p-2.5
                        bg-gray-50 text-gray-900
                        border-gray-300
                        focus:outline-none
                    "
                    id="username"
                    type="text"
                    placeholder="Usuario"
                    {...props}
                />
            </div>
        </div>
    )
}

export default Field