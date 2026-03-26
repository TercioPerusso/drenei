import { Leaf, Droplets, Sparkles, Heart } from 'lucide-react';

export default function IngredientsSection() {
  const ingredients = [
    {
      name: "Hibisco",
      icon: "🌺",
      description: "Flor delicada, rica em antioxidantes naturais, tradicionalmente usada para apoiar o bem-estar corporal feminino.",
      benefit: "Contribui para a sensação de leveza",
      color: "from-rose-100 to-pink-100"
    },
    {
      name: "Cavalinha",
      icon: "🌿",
      description: "Planta conhecida por suas propriedades naturais que acompanham o corpo feminino na busca por fluidez.",
      benefit: "Apoia a sensação de conforto corporal",
      color: "from-green-100 to-emerald-100"
    },
    {
      name: "Chá Verde",
      icon: "🍃",
      description: "Folhas selecionadas, ricas em compostos naturais, que fazem parte de rituais de bem-estar há séculos.",
      benefit: "Ritual de cuidado milenar",
      color: "from-emerald-100 to-teal-100"
    },
    {
      name: "Gengibre",
      icon: "🫚",
      description: "Raiz aromática, valorizada por sua capacidade de acompanhar o corpo feminino com suavidade e cuidado.",
      benefit: "Sensação de acolhimento corporal",
      color: "from-orange-100 to-amber-100"
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Ingredientes de origem botânica"
    },
    {
      icon: Droplets,
      title: "Sabor Natural",
      description: "Experiência leve de frutas"
    },
    {
      icon: Heart,
      title: "Pensado para Mulheres",
      description: "Fórmula desenvolvida especialmente"
    },
    {
      icon: Sparkles,
      title: "Sabor Frutas Vermelhas",
      description: "Experiência prazerosa"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold mb-6">
            <Leaf className="w-4 h-4 md:w-5 md:h-5" />
            <span>Ingredientes Naturais</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            🌿 O que tem dentro do seu ritual Drenei
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Cada ingrediente foi cuidadosamente selecionado para acompanhar o corpo feminino com leveza e naturalidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${ingredient.color} p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-5xl md:text-6xl flex-shrink-0">
                  {ingredient.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    {ingredient.description}
                  </p>
                  <div className="inline-block bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-xs md:text-sm font-semibold text-gray-800">
                      ✨ {ingredient.benefit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 md:mb-12">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              💝 Por que esses ingredientes?
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada ingrediente presente em Drenei foi escolhido por sua tradição no cuidado feminino e por sua capacidade de acompanhar o corpo com suavidade. Não são promessas milagrosas, mas sim componentes que fazem parte de um ritual diário de autocuidado.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-rose-50 to-white rounded-2xl"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-rose-600" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 md:p-8 text-white text-center">
          <p className="text-lg md:text-xl font-semibold mb-2">
            🍓 Sabor natural de frutas vermelhas
          </p>
          <p className="text-sm md:text-base text-rose-100">
            Morango, framboesa e mirtilo — uma experiência agradável a cada gole
          </p>
        </div>
      </div>
    </section>
  );
}
