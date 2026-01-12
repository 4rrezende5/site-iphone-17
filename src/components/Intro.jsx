
function Intro() {

  const specs = [
    {value: '6.3"', label: 'Display Super Retina XDR', color: 'text-blue-600'},
    {value: 'A18 Pro', label: 'Chip mais rápido', color: 'text-orange-500'},
    {value: '48MP"', label: 'Sistema de câmera', color: 'text-blue-600'},
    {value: '29h', label: 'Bateria', color: 'text-orange-500'}
  ];

  return(
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center ">
        
        {/*Já aplicando a responsividade de tela dom o "md", que significa tela média.*/}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 ">iPhone 17 Pro</h1>
        <p className="text-2xl md:text-4xl mb-4  text-gradient " >Titânio. Tão forte. Tão leve. Tão Pro!</p>
        <p className="text-xl md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">Design mais refinado que já criamos. Titânio de grau aeroespacial. Chip A18 Pro. Sistema de câmera Pro revolucionário.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
        <button className="bg-blue-600 shadow-lg shadow-blue-500/30 hover:scale-105 hover:bg-blue-800 rounded-full px-5 cursor-pointer transition-all duration-300" >Compre agora</button>
        <button className="border px-5 cursor-pointer font-normal text-white hover:text-black hover:bg-white rounded-full shadow-lg shadow-white-500/50 hover:scale-105 transition-all duration-300">Saiba mais</button>
      </div>

      {/* Javascript */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl ">
        {specs.map( (spec, index) => (

          <div key={index} className="cursor-pointer bg-gray-900 hover:bg-gray-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105">
            <p className={`text-3xl ${spec.color}`}>{spec.value}</p>
            <p className="text-sm text-gray-300 mt-2">{spec.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Intro;