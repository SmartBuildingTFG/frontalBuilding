import type React from 'react'

export interface FieldProps {
  label: string
  icon?: React.ReactNode
  type?: string
  placeholder?: string
  id: string
  errors?: string[]
  value?: string | number | readonly string[]
  onChange?: (value: string) => void
  [x: string]: any
}
