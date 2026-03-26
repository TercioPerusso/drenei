export default function StorySection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como nasceu o Drenei
          </h2>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-8 md:p-10 rounded-3xl shadow-lg">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              Drenei surgiu a partir de uma pergunta simples:
            </p>
            <p className="text-2xl md:text-3xl font-bold text-rose-600 leading-relaxed">
              Por que tantas mulheres sentem o corpo pesado mesmo tentando se cuidar?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-rose-100 p-6 rounded-2xl">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Rotina intensa
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mulheres que equilibram trabalho, casa, família e ainda buscam tempo para si.
              </p>
            </div>

            <div className="bg-white border-2 border-rose-100 p-6 rounded-2xl">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Busca por algo gentil
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Não queremos soluções radicais. Queremos cuidado real e sustentável.
              </p>
            </div>

            <div className="bg-white border-2 border-rose-100 p-6 rounded-2xl">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Criação do ritual
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Um momento diário de reconexão com o próprio corpo.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg md:text-xl text-gray-600 italic">
              Drenei não é apenas um produto. É um compromisso diário de cuidado com você mesma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
