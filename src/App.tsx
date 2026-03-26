import { ChevronDown, Check, ShoppingCart, Droplets, Heart, Sparkles, Clock, Shield, Zap, Truck, Package, AlertCircle, Calendar, Utensils, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import UrgencyBanner from './components/UrgencyBanner';
import NewHeroSection from './components/NewHeroSection';
import KitsSection from './components/KitsSection';
import SocialProofSection from './components/SocialProofSection';
import GuaranteeSection from './components/GuaranteeSection';
import IngredientsSection from './components/IngredientsSection';
import IdentificationSection from './components/IdentificationSection';
import WhyThisHappensSection from './components/WhyThisHappensSection';
import RitualMechanismSection from './components/RitualMechanismSection';
import StorySection from './components/StorySection';
import TestimonialsSection from './components/TestimonialsSection';
import HowToUseSection from './components/HowToUseSection';
import StickyCheckoutBar from './components/StickyCheckoutBar';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [kitsSectionOffset, setKitsSectionOffset] = useState(0);

  const CHECKOUT_1_POTE = "https://ritual.drenei.com.br/cart/51012506616093:1";
  const CHECKOUT_2_POTES = "https://ritual.drenei.com.br/cart/51031061070109:1";
  const CHECKOUT_3_POTES = "https://ritual.drenei.com.br/cart/51031320199453:1";

  useEffect(() => {
    const kitsSection = document.getElementById('comprar');
    if (kitsSection) {
      const updateOffset = () => {
        const rect = kitsSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setKitsSectionOffset(rect.top + scrollTop - 200);
      };

      updateOffset();
      window.addEventListener('resize', updateOffset);
      return () => window.removeEventListener('resize', updateOffset);
    }
  }, []);

  const products = [
  {
    id: 1,
    name: 'Kit 1 Drenei',
    price: '129,90',
    oldPrice: '179,90',
    savings: '50,00',
    days: 30,
    tag: 'Mais Vendido'
  }
];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('comprar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToCheckout = (url: string) => {
    window.location.href = url;
  };

  const handleCheckout = () => {
    goToCheckout(CHECKOUT_1_POTE);
  };

  const handleKitCheckout = (kitId: number, checkoutUrl: string) => {
    goToCheckout(checkoutUrl);
  };

  const handleStickyCheckout = (productId: number) => {
    goToCheckout(CHECKOUT_1_POTE);
  };

return (
  <div className="min-h-screen bg-white">
      <UrgencyBanner />


      <NewHeroSection />

      {/* Seção de Identificação */}
      <IdentificationSection />

      {/* Por que isso acontece */}
      <WhyThisHappensSection />

      {/* Mecanismo do Ritual */}
      <RitualMechanismSection />

      {/* História do Drenei */}
      <StorySection />

      {/* Como usar */}
      <HowToUseSection />

      {/* Primeira Seção de Kits - Logo após Hero */}
      <KitsSection
        onCheckout={handleKitCheckout}
        variant="hero"
        checkoutUrls={{
          kit1: CHECKOUT_1_POTE,
          kit2: CHECKOUT_2_POTES,
          kit3: CHECKOUT_3_POTES
        }}
      />

      {/* Depoimentos Narrativos */}
      <TestimonialsSection />

      {/* Prova Social Forte */}
      <SocialProofSection />

      {/* Reframe do Problema */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              💭 O inchaço que você sente pode não ser peso.
            </h2>
            <p className="text-xl text-gray-600">
              Muitas mulheres convivem diariamente com a sensação de:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-rose-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <Droplets className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>corpo pesado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>roupas mais apertadas em determinados dias</span>
                </li>
              </ul>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>desconforto no próprio corpo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Activity className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>variações na forma como o corpo responde ao dia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-rose-50 p-8 rounded-2xl">
            <p className="text-lg text-gray-700 mb-6">
              Isso acontece porque o corpo feminino responde diretamente à rotina moderna.
            </p>
            <p className="text-gray-600 mb-4">Entre os fatores mais comuns estão:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-rose-500" />
                <span className="text-gray-700">estresse</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-rose-500" />
                <span className="text-gray-700">alimentação irregular</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-rose-500" />
                <span className="text-gray-700">rotina intensa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-rose-500" />
                <span className="text-gray-700">variações naturais do corpo feminino</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Com o tempo, esses fatores podem afetar a forma como o corpo é percebido.
            </p>
            <div className="bg-rose-500 text-white p-6 rounded-xl text-center">
              <p className="text-lg font-semibold">A Drenei chama esse fenômeno de:</p>
              <p className="text-2xl font-bold mt-2">redução da fluidez corporal feminina.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Identificação */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              💕 Seu corpo não está errado.
            </h2>
            <p className="text-2xl text-gray-700">
              Ele apenas pode estar pedindo mais cuidado. 🤲
            </p>
          </div>

          <p className="text-xl text-gray-600 text-center mb-8">
            Muitas mulheres reconhecem situações como:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">acordar com sensação de corpo inchado</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">sentir o corpo mudar ao longo do dia</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">roupas que parecem diferentes dependendo do dia</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">sensação de peso corporal recorrente</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">dificuldade de se sentir confortável no próprio corpo</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-2">
              Se você já passou por isso, saiba que não está sozinha.
            </p>
            <p className="text-lg text-gray-600">
              Essa é uma experiência comum na rotina feminina moderna.
            </p>
          </div>
        </div>
      </section>

      {/* Nova Forma de Entender o Corpo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              💧 O corpo feminino funciona melhor quando existe fluidez.
            </h2>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-8 rounded-2xl mb-8">
            <p className="text-lg text-gray-700 mb-6">
              O corpo da mulher possui um ritmo natural de funcionamento.
            </p>
            <p className="text-gray-600 mb-4">
              Esse ritmo pode ser influenciado por fatores cotidianos como:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-700">estresse</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-700">rotina intensa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Utensils className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-700">alimentação</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-700">variações naturais do ciclo feminino</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-rose-50 p-6 rounded-xl text-center">
              <Droplets className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-gray-700 font-semibold">mais pesado</p>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl text-center">
              <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-gray-700 font-semibold">menos confortável</p>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl text-center">
              <Activity className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-gray-700 font-semibold">menos leve ao longo do dia</p>
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-2xl">
            <p className="text-xl text-gray-700 mb-3">
              Não significa que o corpo está errado.
            </p>
            <p className="text-lg text-gray-600">
              Significa apenas que ele pode ter perdido parte da sua sensação natural de fluidez.
            </p>
          </div>
        </div>
      </section>

      {/* Sistema F³ Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Sistema F<sup>3</sup>
            </h2>
            <p className="text-2xl text-rose-600 font-semibold mb-4">
              Fluidez Feminina Funcional™
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Para explicar essa experiência corporal feminina, a marca Drenei utiliza um conceito próprio.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
              Esse sistema descreve três etapas comuns da rotina feminina.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1 — Acúmulo da Rotina</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Durante o dia a dia, o corpo feminino lida com diversas demandas.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>pressão da rotina</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Utensils className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>alimentação irregular</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>estresse constante</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Calendar className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>variações naturais do corpo feminino</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                Com o tempo, esse acúmulo pode gerar sensação de peso corporal.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2 — Redução da Fluidez Corporal</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Quando esse acúmulo se torna frequente, muitas mulheres passam a perceber o corpo como menos leve.
              </p>
              <p className="text-gray-600 mb-2">Isso pode gerar sensações como:</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <Droplets className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>corpo mais pesado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>menor conforto corporal</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Activity className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>sensação de inchaço</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3 — Restauração da Fluidez</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A terceira etapa envolve a criação de rituais de autocuidado que acompanham o corpo feminino.
              </p>
              <p className="text-gray-700 font-semibold mb-2">
                É nesse momento que entra o Drenei.
              </p>
              <p className="text-gray-600 text-sm">
                Um ritual diário desenvolvido para ajudar mulheres a restaurarem a sensação de leveza e bem-estar dentro da rotina moderna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posicionamento do Produto */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ✨ Drenei não é apenas um suplemento.
          </h2>
          <p className="text-2xl text-rose-600 font-semibold mb-8">
            💖 Ele faz parte de um ritual diário de autocuidado feminino.
          </p>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            Em vez de tratar o corpo como algo que precisa ser corrigido, a proposta da marca é simples:
          </p>
          <p className="text-2xl text-gray-900 font-semibold mb-8">
            acompanhar o corpo com mais cuidado, constância e atenção.
          </p>
          <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-8 rounded-2xl">
            <p className="text-lg text-gray-700">
              Com um gesto simples por dia, o ritual Drenei pode ajudar mulheres a se reconectarem com a sensação de leveza no próprio corpo.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="/Design_sem_nome.png"
              alt="Mulher com Drenei"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Benefícios Percebidos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🌟 Quando o corpo recupera a sensação de fluidez
            </h2>
            <p className="text-xl text-gray-600">
              Muitas mulheres relatam experiências como:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl border-2 border-rose-100">
              <div className="text-4xl mb-4">🦋</div>
              <p className="text-gray-700 font-medium">sensação de corpo mais leve</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-100">
              <div className="text-4xl mb-4">👗</div>
              <p className="text-gray-700 font-medium">mais conforto dentro das próprias roupas</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl border-2 border-pink-100">
              <div className="text-4xl mb-4">💧</div>
              <p className="text-gray-700 font-medium">menos sensação de inchaço ao longo do dia</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl border-2 border-rose-100">
              <div className="text-4xl mb-4">💝</div>
              <p className="text-gray-700 font-medium">mais bem-estar corporal</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-100">
              <div className="text-4xl mb-4">⚖️</div>
              <p className="text-gray-700 font-medium">sensação de equilíbrio dentro da rotina</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl border-2 border-pink-100">
              <div className="text-4xl mb-4">✨</div>
              <p className="text-gray-700 font-medium">processo gradual de cuidado</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 italic">
              Essas mudanças fazem parte de um processo gradual de cuidado com o corpo.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Ingredientes */}
      <IngredientsSection />

      {/* Ritual Diário + Experiência */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ⏰ Um ritual simples que cabe na sua rotina.
            </h2>
            <p className="text-xl text-gray-600">
              O ritual Drenei foi pensado para mulheres que vivem rotinas intensas. 💪
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">✨ Como funciona o ritual Drenei</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💧</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Misture uma dose em água</h4>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥤</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tome uma vez ao dia</h4>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💖</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Integre à sua rotina de autocuidado</h4>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 italic">
              Com o tempo, o ritual se torna parte natural do cuidado com o próprio corpo.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🌸 Cada corpo responde de forma única.
            </h3>
            <p className="text-lg text-gray-600 text-center mb-8">
              Mas muitas mulheres relatam perceber:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-rose-500 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">📅 Primeiros dias</h4>
                <p className="text-gray-600">sensação de adaptação do ritual na rotina.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">🌟 Primeiras semanas</h4>
                <p className="text-gray-600">maior percepção de leveza corporal.</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">💫 Uso contínuo</h4>
                <p className="text-gray-600">sensação de conforto no corpo e mais bem-estar ao longo do dia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda Seção de Kits - Para quem decidiu após entender */}
      <KitsSection
        onCheckout={handleKitCheckout}
        variant="bottom"
        checkoutUrls={{
          kit1: CHECKOUT_1_POTE,
          kit2: CHECKOUT_2_POTES,
          kit3: CHECKOUT_3_POTES
        }}
      />

      {/* Seção de Garantia */}
      <GuaranteeSection onCheckout={handleCheckout} />


      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ❓ Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "💧 Como usar o Drenei?",
                a: "Misture uma medida (dosador incluso) em 200ml de água gelada. Consuma uma vez ao dia, preferencialmente pela manhã. ☀️"
              },
              {
                q: "⏱️ Quanto tempo para ver resultados?",
                a: "Cada corpo responde de forma única. Mas muitas mulheres relatam perceber maior sensação de leveza nas primeiras semanas de uso contínuo. Para resultados mais consistentes, recomendamos o uso por pelo menos 90 dias. ✨"
              },
              {
                q: "⚠️ Tem contraindicações?",
                a: "Drenei é 100% natural 🌿, mas gestantes, lactantes e pessoas com condições médicas específicas devem consultar um profissional de saúde antes do uso."
              },
              {
                q: "📦 Como funciona a entrega?",
                a: "Enviamos para todo o Brasil via correios. O prazo varia de 5 a 15 dias úteis dependendo da sua região. 🚚 Frete grátis para compras acima de R$ 199."
              },
              {
                q: "🍓 Qual o sabor?",
                a: "Drenei tem sabor natural de frutas vermelhas (morango, framboesa e mirtilo). 😋"
              },
              {
                q: "✅ Tem garantia?",
                a: "Sim. Caso o produto não faça sentido dentro da sua rotina, você pode entrar em contato com nosso suporte em até 7 dias após o recebimento. Nossa equipe irá orientar você durante todo o processo. 💚"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-left font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ⚠️ Cada dia sem cuidar da sua fluidez corporal é mais um dia convivendo com desconforto.
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Drenei foi criado para mulheres que desejam se sentir mais leves dentro da própria rotina. 💝
          </p>
          <div className="space-y-2 mb-8 text-rose-50 text-lg">
            <p>✨ Um ritual simples.</p>
            <p>💧 Um gesto diário.</p>
            <p className="font-semibold">💖 Um novo cuidado com o seu corpo.</p>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-white hover:bg-gray-100 text-rose-500 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-3"
          >
            <span>✨ COMEÇAR MEU RITUAL DE LEVEZA</span>
          </button>
          <div className="mt-8 flex items-center justify-center space-x-2 text-rose-100">
            <Shield className="w-5 h-5" />
            <span>🔒 Compra 100% segura e protegida</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo-drenei.png" alt="Drenei" className="h-16 w-auto" />
              </div>
              <p className="text-sm">
                💖 Ritual Feminino Diário para uma vida mais leve e saudável.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">📦 Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#beneficios" className="hover:text-rose-400 transition-colors">✨ Benefícios</a></li>
                <li><a href="#comprar" className="hover:text-rose-400 transition-colors">🛒 Como Comprar</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">💧 Sistema F³</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">💬 Ajuda</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-rose-400 transition-colors">❓ FAQ</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">🚚 Envio</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">✅ Garantia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">📞 Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>📧 contato@drenei.com.br</li>
                <li>📱 (16) 99613-2056</li>
                <li>💬 WhatsApp</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Drenei. Todos os direitos reservados. 💝</p>
          </div>
        </div>
      </footer>

      {/* Bottom Sticky Checkout Bar */}
      <StickyCheckoutBar
        products={products}
        selectedProductId={1}
        onCheckout={handleStickyCheckout}
        showAfterScroll={kitsSectionOffset}
        showTimer={true}
        timerDuration={600}
        accentColor="#E95471"
      />
    </div>
  );
}

export default App;
