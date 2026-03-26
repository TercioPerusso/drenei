import { CheckCircle, CreditCard, Banknote, ShoppingBag, Truck, AlertCircle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const CHECKOUT_URL = 'https://ritual.drenei.com.br/cart/51031061070109:1';

export default function SpecialOfferCard() {
  const handleCTAClick = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-red-500 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 animate-pulse" />
              <span className="font-bold text-lg md:text-xl">OFERTA POR TEMPO LIMITADO</span>
            </div>
            <CountdownTimer initialMinutes={15} size="large" className="text-white" />
          </div>

          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-red-100 text-red-700 px-6 py-2 rounded-full font-bold text-lg mb-4">
                33% DE DESCONTO + FRETE GRÁTIS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kit 2 Potes Drenei
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                2 meses de ritual completo
              </p>

              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl text-gray-400 line-through">De R$ 359,80</span>
                  <span className="text-5xl md:text-6xl font-bold text-green-600">R$ 239,80</span>
                </div>
                <div className="text-gray-600 text-lg">
                  ou <span className="font-bold text-gray-900">3x de R$ 79,93</span> sem juros
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Banknote className="w-6 h-6 text-green-600" />
                  <span className="text-xl font-bold text-green-800">5% OFF no PIX</span>
                </div>
                <p className="text-3xl font-bold text-green-700">R$ 227,81</p>
              </div>

              <button
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-6 rounded-full text-xl md:text-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mb-6"
              >
                <ShoppingBag className="w-7 h-7" />
                GARANTIR MINHA OFERTA AGORA
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <span>Cartão de Crédito</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <Banknote className="w-5 h-5 text-gray-400" />
                  <span>PIX</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-gray-400" />
                  <span>Frete Grátis</span>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                O que está incluso:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  '2 potes de Drenei (540g total)',
                  'Sabor Frutas Vermelhas',
                  '100% Natural e Vegano',
                  'Fórmula exclusiva F3',
                  'Envio imediato em 24h',
                  'Garantia de 30 dias',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-blue-900">
              Compra 100% Segura e Protegida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
