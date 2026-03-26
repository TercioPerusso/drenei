import { Check } from 'lucide-react';

interface Kit {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  oldPrice: string;
  savings: string;
  discount: string;
  potes: number;
  days: number;
  badge?: string;
  badgeColor?: string;
  isHighlight?: boolean;
  benefits: string[];
  cta: string;
}

interface KitsSectionProps {
  onCheckout: (kitId: number, checkoutUrl: string) => void;
  variant?: 'hero' | 'bottom';
  checkoutUrls: {
    kit1: string;
    kit2: string;
    kit3: string;
  };
}

const kits: Kit[] = [
  {
    id: 1,
    name: 'KIT EXPERIMENTAÇÃO',
    subtitle: 'Começar seu ritual',
    price: '129,90',
    oldPrice: '179,90',
    savings: '50',
    discount: '28% OFF',
    potes: 1,
    days: 30,
    benefits: [
      '1 pote Drenei',
      'Ritual diário por aproximadamente 30 dias',
      'Forma mais simples de conhecer o produto'
    ],
    cta: 'EXPERIMENTAR DRENEI'
  },
  {
    id: 2,
    name: 'KIT 2 DRENEI',
    subtitle: 'Mais constância para o seu ritual de leveza',
    price: '239,80',
    oldPrice: '359,80',
    savings: '120',
    discount: '33% OFF',
    potes: 2,
    days: 60,
    badge: 'FAVORITO DAS CLIENTES',
    badgeColor: 'yellow',
    isHighlight: true,
    benefits: [
      '2 potes Drenei',
      'Ritual contínuo por aproximadamente 60 dias',
      'Mais economia por pote',
      'Mais consistência no autocuidado'
    ],
    cta: 'GARANTIR KIT 2'
  },
  {
    id: 3,
    name: 'KIT 3 DRENEI',
    subtitle: 'O ritual completo',
    price: '329,70',
    oldPrice: '539,70',
    savings: '210',
    discount: '39% OFF',
    potes: 3,
    days: 90,
    badge: 'MAIS VENDIDO',
    badgeColor: 'rose',
    benefits: [
      '3 potes Drenei',
      'Ritual por aproximadamente 90 dias',
      'Melhor custo por pote',
      'Ideal para manter o ritual no dia a dia'
    ],
    cta: 'COMPRAR KIT 3'
  }
];

export default function KitsSection({ onCheckout, variant = 'hero', checkoutUrls }: KitsSectionProps) {
  const isHero = variant === 'hero';

  const getCheckoutUrl = (kitId: number) => {
    if (kitId === 1) return checkoutUrls.kit1;
    if (kitId === 2) return checkoutUrls.kit2;
    return checkoutUrls.kit3;
  };

  return (
    <section id="comprar" className={`py-16 md:py-20 ${isHero ? 'bg-white' : 'bg-gradient-to-br from-rose-50 via-white to-orange-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {isHero ? '✨ Escolha Seu Ritual de Leveza' : '💝 Garanta Seu Ritual Drenei'}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {isHero
              ? 'Quanto mais você cuida de si, mais consistência no autocuidado'
              : 'Milhares de mulheres já começaram seu ritual diário de bem-estar'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className={`p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                kit.isHighlight
                  ? 'bg-gradient-to-br from-rose-500 to-pink-500 transform hover:scale-105'
                  : 'bg-white border-2 border-gray-100'
              }`}
            >
              {kit.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs md:text-sm font-bold flex items-center whitespace-nowrap ${
                  kit.badgeColor === 'yellow'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-rose-500 text-white'
                }`}>
                  <span>🔥 {kit.badge}</span>
                </div>
              )}

              <div className={`absolute -top-4 -right-4 px-3 md:px-4 py-2 rounded-full text-base md:text-lg font-bold shadow-lg ${
                kit.id === 1 ? 'bg-blue-500 text-white' :
                kit.id === 2 ? 'bg-green-500 text-white' :
                'bg-orange-500 text-white'
              }`}>
                {kit.discount}
              </div>

              <div className="flex justify-center mb-6 h-24 md:h-32 gap-2">
                {Array.from({ length: kit.potes }).map((_, i) => (
                  <img
                    key={i}
                    src="/Design_sem_nome_(3).png"
                    alt={`Pote Drenei ${i + 1}`}
                    className={`object-contain ${
                      kit.potes === 1 ? 'w-20 md:w-24 h-20 md:h-24' :
                      kit.potes === 2 ? 'w-16 md:w-20 h-16 md:h-20' :
                      'w-12 md:w-16 h-12 md:h-16'
                    } ${
                      i === 0 ? 'animate-float' :
                      i === 1 ? 'animate-float-delayed' :
                      'animate-float-slow'
                    }`}
                  />
                ))}
              </div>

              <div className="text-center mb-6">
                <h3 className={`text-lg md:text-xl font-bold mb-1 ${kit.isHighlight ? 'text-white' : 'text-gray-900'}`}>
                  {kit.name}
                </h3>
                <p className={`text-xs md:text-sm mb-2 ${kit.isHighlight ? 'text-rose-100' : 'text-gray-600'}`}>
                  {kit.subtitle}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className={`text-sm line-through mb-1 ${kit.isHighlight ? 'text-rose-100' : 'text-gray-500'}`}>
                  De R$ {kit.oldPrice}
                </div>
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${kit.isHighlight ? 'text-white' : 'text-gray-900'}`}>
                  R$ {kit.price}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                  kit.isHighlight ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  💰 Economize R$ {kit.savings}
                </div>

                <div className={`mt-3 flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 text-xs ${kit.isHighlight ? 'text-rose-50' : 'text-gray-600'}`}>
                  <span className="flex items-center gap-1">
                    <span>💳</span>
                    <span><strong>3x</strong> sem juros</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span>⚡</span>
                    <span><strong>5% OFF</strong> no Pix</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span>🚚</span>
                    <span>Frete grátis <strong>acima de R$199</strong></span>
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {kit.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <Check className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 ${kit.isHighlight ? 'text-white' : 'text-rose-500'}`} />
                    <span className={`text-xs md:text-sm ${kit.isHighlight ? 'text-rose-50' : 'text-gray-600'}`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onCheckout(kit.id, getCheckoutUrl(kit.id))}
                className={`w-full py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  kit.isHighlight
                    ? 'bg-white hover:bg-gray-100 text-rose-500'
                    : kit.id === 1
                    ? 'bg-gray-900 hover:bg-gray-800 text-white'
                    : 'bg-rose-500 hover:bg-rose-600 text-white'
                }`}
              >
                {kit.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
