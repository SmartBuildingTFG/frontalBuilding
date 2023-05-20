const Header = () => <header>
  <nav className="flex items-center justify-between lg:px-8 bg-white bg-opacity-70 rounded-b-lg">
    <a href="/home">
      <img
        style={{ height: '55px', width: '60px' }}
        src="favicon.ico" alt="logo">
      </img>
    </a>

    <div className="lg:flex lg:gap-x-12 p-6 lg:px-8">
      <a> Basura </a>
      <a> Infecta </a>
      <a> Recollía </a>
    </div>

    <div>
      <a 
        className="text-sm font-semibold leading-6 text-gray-900"
        href="/login"
        >
        Inicia sesión <span aria-hidden="true" >&rarr;</span>
      </a>
    </div>

  </nav>
</header>

export default Header