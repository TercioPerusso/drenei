import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  days: number;
  text: string;
  emoji: string;
  image: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: 'Marina',
      days: 45,
      text: 'Passei a sentir meu corpo mais leve ao longo do dia.',
      emoji: '🦋',
      image: '/23.png'
    },
    {
      name: 'Juliana',
      days: 30,
      text: 'Minhas roupas voltaram a ficar mais confortáveis.',
      emoji: '👗',
      image: '/24.png'
    },
    {
      name: 'Carla',
      days: 60,
      text: 'Finalmente encontrei algo simples que cabe na minha rotina.',
      emoji: '✨',
      image: '/25.png'
    },
    {
      name: 'Ana',
      days: 21,
      text: 'Menos sensação de inchaço, mais bem-estar.',
      emoji: '💧',
      image: '/26.png'
    },
    {
      name: 'Paula',
      days: 52,
      text: 'O ritual que meu corpo precisava.',
      emoji: '💖',
      image: '/27.png'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Histórias reais de transformação
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Mulheres que encontraram no ritual Drenei um momento de reconexão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-rose-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-rose-200"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    usando Drenei há {testimonial.days} dias
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{testimonial.emoji}</span>
                <p className="text-gray-700 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full">
            <p className="text-lg font-semibold">
              +9.387 mulheres já começaram seu ritual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
