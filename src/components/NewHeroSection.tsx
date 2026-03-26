import { ShoppingCart, Star, Users, Tag } from 'lucide-react';

const CHECKOUT_URL = 'https://ritual.drenei.com.br/cart/51012506616093:1';

export default function NewHeroSection() {
  const handleCTAClick = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl">
            <img
              src="/novo_baner_drenei.png"
              alt="Drenei - Ritual Feminino Diário - Frutas Vermelhas"
              className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              onClick={handleCTAClick}
            />

            {/* Seção de Preço */}
            <div
              onClick={handleCTAClick}
              className="mt-8 w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-6 border-2 border-pink-200 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-bold text-sm uppercase tracking-wide">Oferta Especial</span>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-2xl">R$ 179,90</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                    -28%
                  </span>
                </div>

                <div className="flex items-baseline justify-center gap-2 mb-3">
                  <span className="text-gray-700 text-3xl font-bold">R$</span>
                  <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
                    129,90
                  </span>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg py-2 px-4 mb-4">
                  <p className="text-green-700 font-bold text-base">
                    ou 3x de R$ 46,68 sem juros
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Economize <strong className="text-green-600">R$ 50,00</strong></span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span><strong className="text-gray-900">30 dias</strong> de tratamento</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">📦</span>
                    <span><strong className="text-gray-900">Envio Imediato</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleCTAClick}
              className="mt-6 w-full max-w-md mx-auto block bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-5 rounded-full text-xl md:text-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <ShoppingCart className="w-6 h-6" />
              COMEÇAR MEU RITUAL
            </button>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-gray-900">4.9/5.0</span>
              <span className="text-gray-600 text-sm">Avaliações</span>
            </div>

            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <Users className="w-5 h-5 text-pink-600" />
              <span className="font-bold text-gray-900">+9.387</span>
              <span className="text-gray-600 text-sm">Mulheres Satisfeitas</span>
            </div>

            <div className="flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-green-800">100% Natural</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[23, 24, 25, 26, 27].map((i) => (
                <img
                  key={i}
                  src={`/${i}.png`}
                  alt={`Cliente satisfeita ${i}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 ml-2">
              <span className="font-bold text-gray-900">247 mulheres</span> compraram hoje
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
