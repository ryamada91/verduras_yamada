import React, { useState, useRef } from 'react';
import { Phone, CheckCircle, Leaf, Truck, Clock, Users, ShoppingBag, Menu, X, ArrowRight, ChevronLeft, ChevronRight, Home, Store, Tractor, DollarSign, MapPin, Mail, Instagram } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const whatsappLink = "https://wa.me/5511989079490";
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Função para rolar o carrossel
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const products = [
    // Folhas
    { name: "Alface Americana", type: "Folha", img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=600&q=80", desc: "Crocante e fresquinha" },
    { name: "Alface Crespa", type: "Folha", img: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?auto=format&fit=crop&w=600&q=80", desc: "Ideal para saladas diárias" },
    { name: "Rúcula", type: "Folha", img: "https://plus.unsplash.com/premium_photo-1673469222859-7c716f646c13?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Sabor marcante e selecionada" },
    { name: "Agrião", type: "Folha", img: "https://images.unsplash.com/photo-1664355048238-65d3dda1a0c2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Folhas verdes escuras" },
    { name: "Espinafre", type: "Folha", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80", desc: "Nutritivo para refogados" },
    { name: "Repolho roxo", type: "Folha", img: "https://plus.unsplash.com/premium_photo-1672149634454-7f8098865c1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Roxo intenso e crocante" },
    { name: "Repolho", type: "Folha", img: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Firme e crocante" },
    // Ervas e Temperos
    { name: "Manjericão", type: "Erva", img: "https://images.unsplash.com/photo-1558070510-504a0db43997?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Aroma inconfundível" },
    { name: "Orégano Fresco", type: "Erva", img: "https://images.unsplash.com/photo-1688633767797-455f59c98272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Perfeito para molhos" },
    { name: "Coentro", type: "Erva", img: "https://images.unsplash.com/photo-1535189487909-a262ad10c165?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Essencial no feijão" },
    { name: "Hortelã", type: "Erva", img: "https://images.unsplash.com/photo-1618130070080-91f4d55a2383?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Refrescante e aromática" },
    { name: "Alecrim", type: "Erva", img: "https://images.unsplash.com/photo-1603895544146-3b0636f1348f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Para carnes e assados" },
  ];

  const WhatsappButton = ({ text, className, subtext }) => (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 md:px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-center ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-2 text-lg md:text-xl">
        <Phone size={24} className="animate-pulse flex-shrink-0" />
        <span className="break-words max-w-full">{text}</span>
      </div>
      {subtext && (
        <span className="text-xs md:text-sm font-normal text-green-100 mt-1 opacity-90 max-w-[280px] sm:max-w-none leading-tight">
          {subtext}
        </span>
      )}
    </a>
  );

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-green-900 tracking-tight">Verduras Yamada</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('sobre')} className="text-slate-600 hover:text-green-600 font-medium transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('produtos')} className="text-slate-600 hover:text-green-600 font-medium transition-colors">Produtos</button>
              <button onClick={() => scrollToSection('publico')} className="text-slate-600 hover:text-green-600 font-medium transition-colors">Atacado e Varejo</button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold hover:bg-green-200 transition-colors flex items-center gap-2"
              >
                <Phone size={18} />
                Pedir agora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-green-600 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-green-50 rounded-lg">Sobre</button>
              <button onClick={() => scrollToSection('produtos')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-green-50 rounded-lg">Produtos</button>
              <button onClick={() => scrollToSection('publico')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-green-50 rounded-lg">Para Negócios</button>
              <a 
                href={whatsappLink}
                className="block w-full text-center mt-4 bg-green-600 text-white px-3 py-3 rounded-lg font-bold"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 lg:pt-28 pb-16 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Folhas frescas fundo" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/80 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-balance">
            Folhas frescas todos os dias para quem não pode <span className="text-green-600">errar na qualidade.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed px-2 text-balance">
            Para sua casa ou seu negócio, folhas frescas com padrão, agilidade e confiança.
          </p>
          
          <div className="flex flex-col items-center gap-4 px-2">
            <WhatsappButton 
              text="Pedir agora no WhatsApp" 
              subtext="Atendimento rápido • Varejo e atacado • Sem complicação"
              className="w-full md:w-auto min-w-[300px]"
            />
          </div>
        </div>
      </header>

      {/* Value Proof Bar */}
      <section className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y divide-emerald-800 md:divide-y-0 md:divide-x">
            <div className="flex flex-col items-center p-4">
              <Leaf className="mb-3 text-emerald-400" size={32} />
              <h3 className="text-xl font-bold mb-1">Folhas sempre frescas</h3>
              <p className="text-emerald-200 text-sm px-4">Colhidas e entregues no auge da qualidade</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Clock className="mb-3 text-emerald-400" size={32} />
              <h3 className="text-xl font-bold mb-1">Ideal para o dia a dia</h3>
              <p className="text-emerald-200 text-sm px-4">Para quem compra todos os dias</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CheckCircle className="mb-3 text-emerald-400" size={32} />
              <h3 className="text-xl font-bold mb-1">Padrão de qualidade</h3>
              <p className="text-emerald-200 text-sm px-4">Segurança para o seu negócio</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1591586116988-62fe65164f8d?q=80&w=1010&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Seleção de folhas frescas e saladas" 
                className="rounded-2xl shadow-2xl w-full object-cover h-64 md:h-[400px]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                Sobre a <span className="text-green-600">Verduras Yamada</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed text-justify md:text-left">
                <p>
                  A Verduras Yamada faz parte da história do CEAG desde os seus primeiros anos. São mais de duas décadas atuando diariamente no maior centro de abastecimento do país, acompanhando de perto a evolução do mercado e construindo relações baseadas em confiança, qualidade e constância.
                </p>
                <p>
                  Ao longo do tempo, aprimoramos processos e fortalecemos parcerias diretas com produtores. Essa experiência nos permite garantir frescor e padrão, atendendo com segurança tanto o consumo diário quanto negócios que dependem de regularidade para operar.
                </p>
                <p className="font-semibold text-slate-800 border-l-4 border-green-500 pl-4 py-1">
                  Tradição, quando bem cuidada, se transforma em excelência. É isso que entregamos todos os dias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section (Carousel) */}
      <section id="produtos" className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Produtos</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
              Folhas crocantes, ervas aromáticas e temperos frescos selecionados.
            </p>
          </div>

          <div className="relative group px-2 md:px-0">
            {/* Scroll Buttons */}
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg text-slate-700 hover:text-green-600 transition-all hover:scale-110 hidden md:block -ml-4"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg text-slate-700 hover:text-green-600 transition-all hover:scale-110 hidden md:block -mr-4"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 md:gap-6 pb-8 px-2 snap-x snap-mandatory scroll-smooth hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product, idx) => (
                <div 
                  key={idx} 
                  className="snap-center shrink-0 w-[85vw] sm:w-[280px] md:w-[300px] bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group/card"
                >
                  <div className="h-48 overflow-hidden bg-slate-200 relative">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm">
                      {product.type}
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-slate-500">{product.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-slate-600 mb-4 italic text-sm md:text-base">Arraste para o lado para ver mais variedades <span className="md:hidden">👆</span></p>
            <a 
              href={whatsappLink}
              className="inline-block border-2 border-green-600 text-green-700 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-colors w-full md:w-auto"
            >
              Ver catálogo completo
            </a>
          </div>
        </div>
      </section>

      {/* Dual Audience Section */}
      <section id="publico" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mb-12">
            
            {/* Retail Card */}
            <div className="bg-green-50 rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col items-start border border-green-100 h-full">
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
                <ShoppingBag className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Para sua Casa</h3>
              <p className="text-base md:text-lg text-slate-600 mb-8 flex-grow">
                Verduras frescas para sua casa, com qualidade que você percebe no prato. Ideal para quem busca saúde e sabor na mesa da família.
              </p>
              <ul className="space-y-3 w-full">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" /> Pedidos fracionados
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" /> Durabilidade superior
                </li>
              </ul>
            </div>

            {/* Wholesale Card */}
            <div className="bg-slate-900 rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col items-start text-white relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-32 bg-green-600 rounded-full blur-3xl opacity-10 translate-x-10 -translate-y-10"></div>
              
              <div className="bg-slate-800 p-4 rounded-2xl shadow-sm mb-6 relative z-10">
                <Users className="text-green-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Para seu Negócio</h3>
              <p className="text-base md:text-lg text-slate-300 mb-8 flex-grow relative z-10">
                Fornecimento confiável para restaurantes, mercados e comércios que não podem parar. Preço, constância e pontualidade.
              </p>
              <ul className="space-y-3 w-full relative z-10">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" /> Preços de atacado
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" /> Entrega programada
                </li>
              </ul>
            </div>

          </div>

          {/* Unified CTA Block */}
          <div className="max-w-4xl mx-auto bg-white border-2 border-green-100 rounded-3xl p-6 md:p-10 shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
            <h4 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">
              Atendimento centralizado e ágil
            </h4>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Seja para repor a geladeira de casa ou abastecer o estoque do seu restaurante, nosso canal é único. Ao entrar em contato, nossa equipe direcionará você para a tabela de preços ideal.
            </p>
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold text-base md:text-lg py-4 px-6 md:px-12 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all w-full md:w-auto text-center"
            >
              <Phone size={24} className="animate-pulse flex-shrink-0" />
              <span>Falar com atendente (Varejo ou Atacado)</span>
            </a>
            <p className="text-sm text-slate-500 mt-4">
              Clique para iniciar a conversa no WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Triggers */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-center text-slate-900 mb-10">Por que escolher a Verduras Yamada?</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: Store,
                  title: "Para seu comércio",
                  desc: "Fornecimento constante, qualidade padronizada e pontualidade para restaurantes, mercados e comércios."
                },
                {
                  icon: Home,
                  title: "Para sua casa",
                  desc: "Verduras frescas, bem selecionadas e com maior durabilidade, levando mais sabor e qualidade para a sua rotina."
                },
                {
                  icon: Tractor,
                  title: "Direto do produtor",
                  desc: "Parcerias diretas que garantem frescor, consistência e equilíbrio em toda a cadeia, do campo até você."
                },
                {
                  icon: DollarSign,
                  title: "Preços justos",
                  desc: "Valores competitivos, com condições adequadas tanto para compras do dia a dia quanto para pedidos em maior volume."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                    <item.icon className="text-green-600" size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Precisa de folhas frescas hoje?
          </h2>
          <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Fale agora com a Verduras Yamada e resolva seu pedido em minutos. Garantia de qualidade na sua porta.
          </p>
          <div className="flex justify-center w-full px-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-green-700 font-bold text-lg md:text-xl py-5 px-6 md:px-10 rounded-full shadow-2xl hover:bg-slate-100 hover:scale-105 transition-all w-full md:w-auto"
            >
              <Phone size={28} className="fill-green-700 flex-shrink-0" />
              Chamar no WhatsApp agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            
            {/* Brand & Mission */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Leaf className="text-green-500" size={28} />
                <span className="text-2xl font-bold text-white tracking-tight">Verduras Yamada</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Qualidade e compromisso com o campo, levando saúde para sua mesa e eficiência para seu negócio.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('sobre')} className="text-slate-400 hover:text-green-400 transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('produtos')} className="text-slate-400 hover:text-green-400 transition-colors">Nossos Produtos</button></li>
                <li><button onClick={() => scrollToSection('publico')} className="text-slate-400 hover:text-green-400 transition-colors">Atacado e Varejo</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-4 inline-block text-left">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-green-400 transition-colors group">
                    <Phone size={20} className="text-green-500 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                    <span>(11) 98907-9490</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/verduras_yamada_ceag" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-green-400 transition-colors">
                    <Instagram size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>@verduras_yamada_ceag</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="break-all">verdurasyamada03@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Estr. do Caminho Velho, 130 - Box 03<br/>Jd. Nova Cidade, Guarulhos - SP</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Verduras Yamada. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors z-40 md:hidden animate-bounce"
        aria-label="Fale no WhatsApp"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default App;