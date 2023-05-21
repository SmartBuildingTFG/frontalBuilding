import { Footer, type LayoutProps } from '@/components/common'
import './styles.css'
import React from 'react'

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => (
  <div id="login-background" className="w-full h-full flex flex-col grow min-h-screen">
    <main className="grow max-w-5xl mx-auto" >
      <div className='container bg-white rounded-lg p-5 mt-40'>
        { children }
      </div>
    </main>
    <Footer />
  </div>
)

export default Layout
