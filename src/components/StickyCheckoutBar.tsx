'use client';

import { useState, useEffect } from 'react';
import { Clock, Gift, Package, Truck } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  savings?: string;
  tag?: string;
  days?: number;
}

interface StickyCheckoutBarProps {
  products: Product[];
  selectedProductId: number;
  onCheckout: (productId: number) => void;
  showAfterScroll?: number;
  showTimer?: boolean;
  timerDuration?: number;
  accentColor?: string;
}

export default function StickyCheckoutBar({
  products,
  selectedProductId,
  onCheckout,
  showAfterScroll = 800,
  showTimer = true,
  timerDuration = 600,
  accentColor = '#2DB0CD'
}: StickyCheckoutBarProps) {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const [progressWidth, setProgressWidth] = useState(100);
  const [socialProof, setSocialProof] = useState('');

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  const randomCount = () => Math.floor(Math.random() * (31 - 14 + 1)) + 14;

  const buildDynamicMessages = () => [
    `🔥 ${randomCount()} clientes escolheram este kit hoje`,
    `💖 ${randomCount()} clientes já selecionaram esta oferta hoje`,
    `✨ Uma escolha frequente para 60 dias de ritual`,
    `🚚 Frete grátis ativo neste kit`,
    `🌿 Ideal para quem quer mais constância na rotina`,
    `⭐ Um dos kits mais escolhidos do dia`,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  useEffect(() => {
    if (!showTimer) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setProgressWidth(100);
          return timerDuration;
        }
        const newTime = prev - 1;
        setProgressWidth((newTime / timerDuration) * 100);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showTimer, timerDuration]);

  useEffect(() => {
    const rotateMessage = () => {
      const messages = buildDynamicMessages();
      const randomIndex = Math.floor(Math.random() * messages.length);
      setSocialProof(messages[randomIndex]);
    };

    rotateMessage();

    const interval = setInterval(() => {
      rotateMessage();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!showStickyBar) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-white to-gray-50 shadow-2xl z-50 md:hidden overflow-hidden ${
        timeLeft < 60 ? 'animate-pulse' : ''
      }`}
    >
      {showTimer && (
        <div
          className="h-1 bg-gradient-to-r from-[#E95471] via-[#FF6B6B] to-[#E95471] transition-all duration-1000 ease-linear"
          style={{ width: `${progressWidth}%` }}
        />
      )}

      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between gap-2">
          {showTimer && (
            <div className="flex items-center gap-1.5 bg-red-50 px-2 py-1 rounded-full">
              <Clock
                className={`w-3 h-3 text-[#E95471] ${
                  timeLeft < 120 ? 'animate-pulse' : ''
                }`}
              />
              <span className="text-xs font-bold text-[#E95471]">
                {timeLeft < 120 ? 'ÚLTIMA CHANCE • ' : 'Oferta expira em '}
                {formatTime(timeLeft)}
              </span>
            </div>
          )}

          {selectedProduct.savings && (
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <Gift className="w-3 h-3 text-green-600" />
              <span className="text-xs font-bold text-green-600">
                Economize R$ {selectedProduct.savings}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 space-y-1">
            {selectedProduct.tag && (
              <div className="flex items-center gap-2">
                {selectedProduct.tag === 'Frete Grátis' ? (
                  <div className="flex items-center gap-1 bg-[#2DB0CD]/10 px-2 py-0.5 rounded">
                    <Truck className="w-3 h-3" style={{ color: accentColor }} />
                    <span className="text-xs font-bold" style={{ color: accentColor }}>
                      {selectedProduct.tag}
                    </span>
                  </div>
                ) : (
                  <span className="text-xs font-medium text-gray-600">
                    {selectedProduct.tag}
                  </span>
                )}
              </div>
            )}

            <div className="flex items-baseline gap-2">
              {selectedProduct.oldPrice && (
                <span className="text-xs text-gray-400 line-through">
                  R$ {selectedProduct.oldPrice}
                </span>
              )}
              <span className="text-xl font-bold" style={{ color: accentColor }}>
                R$ {selectedProduct.price}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600">
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

            {selectedProduct.days && (
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Package className="w-3 h-3" />
                    <span>{selectedProduct.days} dias</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#E95471]">
                  {socialProof}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => onCheckout(selectedProduct.id)}
            className={`font-bold shadow-lg flex items-center gap-2 px-6 py-3 rounded-xl text-white ${
              timeLeft < 60 ? 'animate-bounce' : ''
            }`}
            style={{ backgroundColor: accentColor }}
          >
            Começar meu ritual
            <Package className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}