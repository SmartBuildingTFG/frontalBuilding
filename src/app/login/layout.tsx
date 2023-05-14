import './styles.css'
import Footer from '@/components/common/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => (
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