import { FieldProps } from "./Field.interface"

const Field = <T extends string | number | readonly string[],>({
    label, icon, placeholder, type, id, errors, value, onChange, ...props
} : FieldProps<T>) => (
    <div className="flex flex-col gap-1">
        <label className="block" htmlFor={id}>
            {label}
        </label>
        <div className="flex">
            {icon && <span className="
                inline-flex items-center
                px-3
                text-gray-900 bg-gray-200
                border border-r-0 rounded-l-lg border-gray-300
            ">
                {icon}
            </span>
            }
            <input
                className={`
                    block border rounded-r-lg ${icon || 'rounded-l-lg'}
                    w-full p-2.5
                    bg-gray-50 text-gray-900
                    focus:outline-none
                    ${errors && errors.length > 0 ? 
                        'border-red-500'
                        : 'border-gray-300'}
                    
                `}
                id="username"
                type={type || "text"}
                placeholder={placeholder}
                value={value}
                onChange={onChange ? (e => onChange(e.target.value)) : undefined}
                {...props}
            />
        </div>
        {errors && errors.length > 0 &&
            errors.map((error: string, id: number) => <p key={id} className="text-red-500 text-xs italic">{error}</p>)
        }
    </div>
)


export default Field