import React from "react"

export interface FieldProps<T> {
    label: string;
    icon?: React.ReactNode;
    type?: string;
    placeholder?: string;
    id: string;
    errors?: Array<string>;
    value?: string | number | readonly string[];
    onChange?: (value: string) => void;
    [x: string]: any;
}
