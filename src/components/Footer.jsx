
function Footer() {


  const sections = [
    {
      title: 'Comprar e Saber Mais',
      links: ['iPhone 17 Pro ', 'iPhone 17 Pro Max ', 'Comparar modelos ', 'Acessórios']
    },
    {
      title: 'Especificações',
      links: ['Características técnicas ', 'Câmera ', 'Bateria ', 'Disply']
    },
    {
      title: 'Suporte',
      links: ['Suporte do iPhone ', 'Applecare+ ', 'iOS 19 ', 'Contato']
    },
    {
      title: 'Apple',
      links: ['Sobre a Apple ', 'Newsroom ', 'Privacidade ', 'Carreiras']
    }
  ];

  const buttonLinks = [ ' Política de Privacidade ', ' Termos de Uso ', ' Vendas'
  
  ];

  sections;
  buttonLinks;


  return (
    <footer className="bg-gray-900 border-t border-gray-800 ">
      <div className=" bg-linear-to-br from-gray-900 to-transparent max-w-7xl mx-auto px-6 py-12  ">
        <div className="grid md:grid-cols-4 gap-8 ">
          {sections.map((section, index) => (
            <div className="cursor-pointer " key={index}>
              <h4 className="font-semibold mb-3 cursor-pointer">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">{section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="hover:text-white">{link}</a>
                </li>
               ))}
              </ul>
            </div>
          ))}
        </div>


        <div className=" border-t border-gray-500 mt-10  justify-center flex items-center">
          <div className="mt-5 flex  ">
            <p className="mr-70 text-gray-400">Copyright &; 2026 Inc. Todos os direitos reservados.</p>
            <div >
              {buttonLinks.map((link, index) => (
                <a href="#" className="mx-5 cursor-pointer text-gray-400 hover:text-white" key={index}>{link}</a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )

}

export default Footer;