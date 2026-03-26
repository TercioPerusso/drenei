import { Clock, Zap, Wind } from 'lucide-react';

export default function WhyThisHappensSection() {
  const reasons = [
    {
      icon: Zap,
      title: 'Estresse constante',
      description: 'O corpo em modo alerta o tempo todo'
    },
    {
      icon: Clock,
      title: 'Rotina corrida',
      description: 'Sempre entre uma tarefa e outra'
    },
    {
      icon: Wind,
      title: 'Pouca pausa para o corpo',
      description: 'Falta de momento para desacelerar'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O problema não é falta de cuidado.
          </h2>
          <p className="text-2xl md:text-3xl text-rose-500 font-semibold">
            É o ritmo da vida moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-4">
                <reason.icon className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-rose-100 to-orange-100 p-8 rounded-2xl text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Quando o corpo não tem espaço para desacelerar,
            <span className="font-semibold text-rose-600"> ele acumula.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
