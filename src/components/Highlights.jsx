


function Highlights () {


  return (

    <section className=" mb-10" id="design" >
      <div className="max-w-7xl mx-auto" >

        <div className="text-center mb-20 ">
          <h2 className="font-bold text-3xl mb-2">Design revolucionário</h2>
          <p className="text-xl text-gray-300">Cada detalhe foi pensado para criar a melhor experiência.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">

          <div className=" bg-gray-900 rounded-xl p-5" >
            <img className=" w-full rounded-2xl mb-4" src="./public/img/titanium-design.jpg" />
            <h3 className="font-bold mb-5 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">Estrutua em titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-5 " >
            <img  className="w-full rounded-2xl mb-4" src="./public/img/ios-features.jpg" />
            <h3 className=" font-bold mb-5 text-3xl pr-5 ">iOS26</h3>
            <p className="text-gray-300">O sistema operacional mais avançado do mundo com IA integrada.</p>
          </div>  

        </div>


        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
          <h3 className="text-4xl font-medium mb-6 text-gradient">A18</h3>
          <p>O chip mais poderoso em um smartphone já criado</p>
          <img className="w-full rounded-2xl mb-4" src="./public/img/chip-a18-pro.jpg" alt="chip A18"  />

          <ul className="space-y-3 text-gray-300">
            <li className="">CPU 20% mais rápida</li>
            <li>GPU 25% mais eficiente</li>
            <li>Neural Engine com 16 núcleos</li>
            <li>Ray tracyng acelerado!</li>
          </ul>
        </div>

        <div className="text-center mb-15" id="camera" > 
          <h3 className="mb-15 text-3xl font-bold" >Sistema de câmera Pro avançado</h3>

          <div className="grid grid-cols-3 gap-5 mb-5 ">

            <div className="bg-gray-900 rounded-xl hover:scale-105 transition- duration-300">
              <div  className="text-blue-600 font-bold text-3xl m-3">48MP</div>
              <h4 className="font-bold mb-1 text-xl">Principal</h4>
              <p className="mb-5">Sensor quad-pixel com foco automático</p>
            </div>

            <div className="bg-gray-900 rounded-xl hover:scale-105 transition- duration-300">
              <div className="text-orange-500 font-bold text-3xl m-3">12MP</div>
              <h4 className="font-bold mb-1 text-xl">Ultra Wide</h4>
              <p>Campo de visão de 120° com modo noturno</p>
            </div>

            <div className="bg-gray-900 rounded-xl hover:scale-105 transition- duration-300">
              <div className="text-blue-600 font-bold text-3xl m-3">12MP</div>
              <h4 className="font-bold mb-1 text-xl">Telefoto 5x</h4>
              <p>Zoom óptico de 5x com estabilização</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Highlights;