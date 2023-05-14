const Header = () => <header>
  <nav className="flex items-center justify-between p-6 lg:px-8 bg-white bg-opacity-70 rounded-b-lg">
    <img
      className="h-8 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
    </img>

    <div className="lg:flex lg:gap-x-12">
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