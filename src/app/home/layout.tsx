import { Footer, Header } from '@/components/common'
import './styles.css'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div id="home-background" className="gap-5 w-full h-full flex flex-col grow">
      <main className="container bg-gray-200 grow rounded-lg p-5 bg-opacity-70 max-w-7xl mx-auto mt-5">
        { children }
      </main>
      <Footer />
    </div>
  </div>
)

export default Layout