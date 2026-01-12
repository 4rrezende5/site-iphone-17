

import { useState } from "react";

function Colors() {



  const colors = [
    {id: 'black', name: 'Titânio Preto', image: '/img/iphone-black.jpg' , colorClass: 'bg-gray-600'},
    {id: 'silver', name: 'Titânio Natural', image: '/img/iphone-silver.jpg' , colorClass: 'bg-gray-300'},
    {id: 'orange', name: 'Titânio Laranja', image: '/img/iphone-orange.jpg' , colorClass: 'bg-orange-500'}
  ];

  const models = [
    {name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de vídeo' , weight: '199g'},
    {name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo' , weight: '221g'},
  ];


  models;

  
  const [ selectedColor, setSelectedColor ] = useState("black");

  setSelectedColor;

  return (
    <section id="cores" className="bg-black py-20 px-8  " >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb:text-6xl font-bold mb-4">Escolha sua cor</h2>
          <p className="text-xl text-gray-400">Acabamento em titânio lindo</p>
        </div>

        <div className="flex justify-center mb-5">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-125">

              <img src={colors.find( color => color.id === selectedColor).image} 
              // Dentro do "src", em "colors", encontre o color.id com o mesmo nome do "selectedColor": useState("blue"), e pegue a imagem desse id.
               
               alt="iphone 17" className="max-w-full max-h-150 mx-auto"/>

            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-gray/40 inline-block">
                <h3 className="text-2xl font-semibold">{colors.find( color => color.id === selectedColor).name}</h3>
                 {/* // Dentro do "src", em "colors", encontre o color.id com o mesmo nome do "selectedColor": useState("blue"), e pegue a nome desse id. */}
              </div>
            </div>
                

          </div>
        </div>

      </div>

      <div className="flex justify-center items-center gap-4">
        {/* Para alinhar o conteúdo ao centro */}
        
        { colors.map( color => (
          <button  key={color.id} onClick={() => setSelectedColor(color.id)} className={` cursor-pointer relative transition-all duration-300`}>
            <div className={` w-15 h-15 rounded-full border-4 mx-2 ${color.colorClass} ${selectedColor === color.id ? 'border-white' : 'border-gray-600'}`}></div>
          </button>
        )) }
      </div>

      
      <div className="grid grid-cols-2 gap-8 mt-20 ">
        {models.map( (model, index) => (
          <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800">
            {/* br: bottom to right / gradiente para baixo a direita. */}

            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
            <p className="text-gray-400 text-xl mb-4">{model.screen}</p>
            <ul className="space-y-2"> 
              {/* space-y-2: espaçamento no eixo y de 2px */}

              <li>{model.storage}</li>
              <li>{model.weight}</li>
              <li>{model.battery}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-2 cursor-pointer hover:scale-105 shadow-md shadow-blue-500/60">
          Compre agora á partir de R$ 9.950,00
        </button>
        <p>Ou em até 12x de R$ 994,92 sem juros!</p>
      </div>
    </section>
  )
}

export default Colors;