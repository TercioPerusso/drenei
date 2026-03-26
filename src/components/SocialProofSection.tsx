import { Star, Users, ShoppingBag, Heart } from 'lucide-react';

export default function SocialProofSection() {
  const testimonials = [];

const stats = [
    
    {
      number: "12mil+",
      label: "Mulheres confiam",
      icon: Users,
      color: "rose"
    },
    {
      number: "4.8/5",
      label: "Avaliação média",
      icon: Star,
      color: "orange"
    },
    {
      number: "95%",
      label: "Clientes satisfeitas",
      icon: Heart,
      color: "pink"
    },
    {
      number: "5mil+",
      label: "Rituais iniciados",
      icon: ShoppingBag,
      color: "rose"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            💬 Milhares de mulheres já transformaram seu ritual diário
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se a uma comunidade de mulheres que escolheram priorizar leveza e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              rose: 'bg-rose-100 text-rose-600',
              orange: 'bg-orange-100 text-orange-600',
              pink: 'bg-pink-100 text-pink-600'
            }[stat.color];

            return (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${colorClasses} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 md:px-6 py-3 md:py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-base md:text-lg font-semibold text-gray-900">4.8 de 5.0</span>
            <span className="text-sm md:text-base text-gray-600">• 12.847 avaliações</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="text-3xl md:text-4xl flex-shrink-0">
                  {testimonial.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-gray-700 mb-3 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-block bg-green-100 text-green-800 px-4 md:px-6 py-3 md:py-4 rounded-full">
            <p className="text-sm md:text-base font-semibold">
              ✅ +3.200 mulheres iniciaram seu ritual este mês
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
