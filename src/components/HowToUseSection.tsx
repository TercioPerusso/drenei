import { Pill, Clock, Smile } from 'lucide-react';

export default function HowToUseSection() {
  const steps = [
    {
      icon: Pill,
      number: '1',
      title: 'Abrir o pote',
      description: 'Pegue seu Drenei pela manhã',
      color: 'rose',
      image: '/Abrir_o_pote.png'
    },
    {
      icon: Clock,
      number: '2',
      title: 'Misturar na água',
      description: 'Apenas 10 segundos do seu dia',
      color: 'pink',
      image: '/imagens_bloco_02.png'
    },
    {
      icon: Smile,
      number: '3',
      title: 'Continuar o dia',
      description: 'Leve e presente no seu corpo',
      color: 'orange',
      image: '/Continuar_o_dia.png'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Simples assim
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Seu ritual em 10 segundos
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Não precisa de receitas complicadas ou horas de preparo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 border-rose-100">
                <div className={`absolute -top-5 -right-5 w-14 h-14 rounded-full bg-gradient-to-br ${
                  step.color === 'rose' ? 'from-rose-400 to-rose-600' :
                  step.color === 'pink' ? 'from-pink-400 to-pink-600' :
                  'from-orange-400 to-orange-600'
                } flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                  {step.number}
                </div>

                <div className="mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                  <div className="text-3xl text-rose-300">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-8 md:p-10 rounded-3xl shadow-xl text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            10 segundos. Todo dia.
          </p>
          <p className="text-xl text-rose-50">
            É tudo que você precisa para começar seu ritual de leveza.
          </p>
        </div>
      </div>
    </section>
  );
}
