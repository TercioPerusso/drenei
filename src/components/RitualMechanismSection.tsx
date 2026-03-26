import { Calendar, Heart, Sparkles } from 'lucide-react';

export default function RitualMechanismSection() {
  const pillars = [
    {
      number: '1',
      icon: Calendar,
      title: 'Constância',
      description: 'Pequenos gestos diários que fazem o corpo voltar ao ritmo.',
      color: 'rose',
      image: '/constancia.png'
    },
    {
      number: '2',
      icon: Heart,
      title: 'Cuidado gentil',
      description: 'Sem extremos ou soluções agressivas.',
      color: 'pink',
      image: '/Cuidado_gentil.png'
    },
    {
      number: '3',
      icon: Sparkles,
      title: 'Reconexão corporal',
      description: 'Um momento diário de presença no próprio corpo.',
      color: 'orange',
      image: '/reconexao_corporal.png'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-rose-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Como funciona
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Ritual Drenei
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Um sistema simples construído sobre 3 pilares essenciais
          </p>
          <div className="mt-8">
            <img
              src="/Como_funciona.png"
              alt="Como funciona o Ritual Drenei"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 overflow-hidden"
            >
              <div className={`absolute top-4 left-4 z-10 w-12 h-12 rounded-full bg-gradient-to-br ${
                pillar.color === 'rose' ? 'from-rose-400 to-rose-600' :
                pillar.color === 'pink' ? 'from-pink-400 to-pink-600' :
                'from-orange-400 to-orange-600'
              } flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {pillar.number}
              </div>

              <div className="w-full h-64 md:h-72">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-rose-500 to-pink-500 p-8 md:p-10 rounded-3xl shadow-xl">
          <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
            A marca existe para acompanhar mulheres em sua rotina diária de autocuidado.
          </p>
        </div>
      </div>
    </section>
  );
}
