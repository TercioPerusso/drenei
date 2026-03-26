import { Heart } from 'lucide-react';

export default function IdentificationSection() {
  const feelings = [
    {
      text: 'sensação de corpo pesado no fim do dia',
      image: '/imagem01.png'
    },
    {
      text: 'roupas que parecem mais apertadas em alguns dias',
      image: '/imagem02.png'
    },
    {
      text: 'dificuldade de manter uma rotina de autocuidado',
      image: '/imagem03.png'
    },
    {
      text: 'sensação de estar sempre correndo',
      image: '/imagem04.png'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-rose-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Talvez você já tenha sentido algo assim…
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {feelings.map((feeling, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full">
                <img
                  src={feeling.image}
                  alt={feeling.text}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-gradient-to-r from-rose-50 to-pink-50 border-t-4 border-rose-400">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium text-center">
                  {feeling.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg md:text-xl text-gray-600 italic">
            Você não está sozinha.
            Muitas mulheres sentem isso todos os dias.
          </p>
        </div>
      </div>
    </section>
  );
}
