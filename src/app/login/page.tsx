'use client'
import { Field } from '@/components/form'
import React, { useState } from 'react'
import { IdentityManager } from '@/api'

const UserIcon = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
)

const PasswordIcon = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>
)

const Login: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form className="flex flex-col gap-5">
        <Field
            id="username"
            label="Correo electrónico"
            placeholder='Correo electrónico'
            icon={<UserIcon />}
            value={username}
            onChange={setUsername}
            />
        <Field
            id="password"
            type="password"
            label="Contraseña"
            placeholder='Contraseña'
            icon={<PasswordIcon />}
            onChange={setPassword}
            />
        <div className="flex items-center justify-between">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  IdentityManager.login(username, password).then((response) => {
                    console.log(response)
                  }).catch((error) => {
                    console.log(error)
                  })
                }}>
                Inicia Sesión
            </button>
            <a
                className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 pl-4"
                href="http://orion-ld.ruzafa.me/password/request/"
            >
                He olvidado mi contraseña
            </a>
        </div>
    </form>
  )
}

export default Login
