export interface FieldProps {
    label: string;
    icon?: React.ReactNode;
    type?: string;
    placeholder?: string;
    id: string;
    errors?: Array<string>;
    [x: string]: any;
}
