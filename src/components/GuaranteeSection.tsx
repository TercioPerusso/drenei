import { Shield, Clock, Heart, CheckCircle, Package, Sparkles } from 'lucide-react';

interface GuaranteeSectionProps {
  onCheckout: () => void;
}

export default function GuaranteeSection({ onCheckout }: GuaranteeSectionProps) {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de Satisfação",
      description: "Se o produto não fizer sentido dentro da sua rotina, basta entrar em contato",
      color: "green"
    },
    {
      icon: Package,
      title: "Envio Seguro",
      description: "Produto protegido e enviado com todo cuidado para sua casa",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Suporte Dedicado",
      description: "Nossa equipe está aqui para te ajudar em qualquer dúvida",
      color: "orange"
    },
    {
      icon: Heart,
      title: "Qualidade Premium",
      description: "Produto 100% natural, desenvolvido especialmente para mulheres",
      color: "rose"
    }
  ];

  const benefits = [
    "Experimente por 07 dias",
    "Sem riscos para você",
    "Suporte via WhatsApp",
    "Compra 100% segura",
    "Entrega garantida",
    "Produto certificado"
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full mb-4 md:mb-6">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            ✨ Experimente Drenei com Total Tranquilidade
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Entendemos que iniciar um novo ritual de autocuidado é uma decisão importante. Por isso, queremos que você se sinta completamente segura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              green: 'bg-green-100 text-green-600 border-green-200',
              blue: 'bg-blue-100 text-blue-600 border-blue-200',
              orange: 'bg-orange-100 text-orange-600 border-orange-200',
              rose: 'bg-rose-100 text-rose-600 border-rose-200'
            }[item.color];

            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-gray-100"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 ${colorClasses} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-8 md:mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Nossa Promessa para Você
            </h3>
            <p className="text-lg md:text-xl text-rose-50 mb-6 md:mb-8 leading-relaxed">
              Se você não sentir que Drenei está contribuindo para seu bem-estar e leveza corporal, basta entrar em contato com nossa equipe. Queremos que você experimente sem preocupações.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onCheckout}
              className="bg-white hover:bg-gray-100 text-rose-500 px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-3"
            >
              <span>💝 COMEÇAR MEU RITUAL COM SEGURANÇA</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">07 dias</div>
            <p className="text-sm md:text-base text-gray-600">para experimentar</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-sm md:text-base text-gray-600">compra segura</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">24/7</div>
            <p className="text-sm md:text-base text-gray-600">suporte disponível</p>
          </div>
        </div>
      </div>
    </section>
  );
}