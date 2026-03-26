import { Clock, Truck, Zap, CreditCard, Percent } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function UrgencyBanner() {
  return (
    <div className="sticky top-0 z-50 shadow-lg">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-sm md:text-base">OFERTA EXPIRA EM:</span>
              <CountdownTimer initialMinutes={15} size="small" className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap py-2.5 flex items-center">
          <div className="inline-flex items-center gap-8 px-8">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">Frete Grátis acima de R$199</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">Envio Imediato</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">5% OFF no PIX</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">3x sem juros no cartão</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-8 px-8">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">Frete Grátis acima de R$199</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">Envio Imediato</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">5% OFF no PIX</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">3x sem juros no cartão</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
