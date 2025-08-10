import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import PremiumTestimonial from "@/components/PremiumTestimonial";
import TenderSpecialistsReviews from "@/components/TenderSpecialistsReviews";

export default function Index() {
  return (
    <div className="min-h-screen bg-premium-dark animate-fade-in">
      {/* Navigation */}
      <nav className="bg-premium-gray/95 backdrop-blur-md premium-shadow border-b border-gold/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/img/3288d581-fe6d-4184-94a4-5fd9b20dcf73.jpg" 
                alt="Tender Audit Heraldry" 
                className="h-8 w-8 mr-3 object-contain" 
              />
              <span className="text-xl font-semibold text-gold">Inc AVILOV TENDER AUDIT</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="#home" className="text-gold font-medium">Главная</a>
                <a href="#services" className="text-gray-300 hover:text-gold transition-colors">Услуги</a>
                <a href="#audit" className="text-gray-300 hover:text-gold transition-colors">Аудит</a>
                <a href="#about" className="text-gray-300 hover:text-gold transition-colors">О нас</a>
                <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Контакты</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-24 px-4 sm:px-6 lg:px-8 premium-dark-gradient relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-1/3 w-24 h-24 bg-gold/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 animate-slide-up drop-shadow-2xl leading-tight">
            Профессиональный аудит
            <span className="text-white block font-display drop-shadow-lg">тендерного отдела</span>
          </h1>
          <p className="text-xl text-white/95 mb-12 max-w-4xl mx-auto animate-slide-up drop-shadow-lg font-medium" style={{animationDelay: '0.2s'}}>
Получите эксклюзивный аудит тендерного отдела от эксперта-практика. Увеличьте прибыль на 40-60% уже через 3 месяца!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="gold-gradient hover:scale-110 text-black font-bold text-lg px-8 py-4 premium-shadow" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="FileText" className="mr-2 h-5 w-5" />
ПОЛУЧИТЬ ПРЕМИАЛЬНЫЙ АУДИТ
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-4 backdrop-blur-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-premium-accent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative group">
                {/* Premium Golden Frame */}
                <div className="absolute -inset-4 gold-gradient rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl blur-[1px] opacity-20"></div>
                
                {/* Main Image */}
                <div className="relative bg-gradient-to-br from-premium-gray/60 via-premium-dark/40 to-premium-gray/70 p-4 rounded-xl shadow-glow border border-gold/30 hover:border-gold/50 transition-all duration-500">
                  <img
                    src="https://cdn.poehali.dev/files/1ab43665-1c59-4ca0-932c-ae07ec0892a5.jpg"
                    alt="Станислав Авилов"
                    className="w-48 h-48 mx-auto object-scale-down rounded-lg border border-gold/40 shadow-lg hover:scale-110 hover:shadow-glow transition-all duration-500 filter brightness-115 contrast-110"
                  />
                  
                  {/* Premium Accents */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gold-light to-gold text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                    ⭐ EXPERT
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-gold to-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    🏆 #1 В РОССИИ
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-xl pointer-events-none"></div>
                  
                  {/* Luxury Badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 gold-gradient px-4 py-1 rounded-full text-black text-xs font-bold tracking-wider shadow-lg">
                    EXPERT
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 gold-gradient rounded-full opacity-20 animate-float blur-sm"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-float blur-sm" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
            <div className="lg:w-2/3 animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                Станислав Авилов
              </h2>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <span className="text-gold font-semibold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Эксперт с многолетним опытом управления тендерным отделом со стороны Поставщика</span>
              </p>
              <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-8 border-l-4 border-gold pl-6 bg-premium-gray/30 backdrop-blur-sm rounded-r-lg p-6 premium-shadow border border-gold/20">
                "Государственные закупки — это не просто процедуры и документы. Это инструмент развития экономики, 
                создания справедливой конкуренции и эффективного использования бюджетных средств. За каждой тендерной 
                процедурой стоят люди, их потребности и будущее нашего общества. 
                
                Моя миссия — помочь организациям построить прозрачную и эффективную систему закупок, которая служит 
                общественным интересам и способствует устойчивому развитию бизнеса."
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gold-gradient hover:scale-105 text-black font-bold shadow-glow hover:shadow-xl transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Записаться на консультацию
                </Button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-premium-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-6">ЭКСКЛЮЗИВНЫЕ УСЛУГИ</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-medium">
              Премиальные решения для максимизации прибыли от тендерных процедур
            </p>
            <div className="w-24 h-1 gold-gradient mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-premium-gray border-gold/20 shadow-lg hover:shadow-xl transition-shadow premium-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-white">Анализ процессов</CardTitle>
                <CardDescription className="text-gray-300">
                  Детальное изучение существующих процедур подготовки и подачи тендерных документов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-premium-gray border-gold/20 shadow-lg hover:shadow-xl transition-shadow premium-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-white">Контроль качества</CardTitle>
                <CardDescription className="text-gray-300">
                  Оценка системы контроля качества документооборота и соблюдения регламентов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-premium-gray border-gold/20 shadow-lg hover:shadow-xl transition-shadow premium-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-white">Оптимизация</CardTitle>
                <CardDescription className="text-gray-300">
                  Разработка рекомендаций по улучшению эффективности тендерных процессов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Recommendations Section */}
      <section className="py-16 bg-premium-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Рекомендации по увеличению производительности
            </h2>
            <p className="text-gray-100 max-w-3xl mx-auto">
              Проверенные методы оптимизации работы тендерного отдела для повышения эффективности на 40-60%
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Process Optimization */}
            <div className="space-y-6">
              <Card className="bg-premium-gray border-gold/20 premium-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <Icon name="Zap" className="h-5 w-5 text-gold" />
                    </div>
                    <CardTitle className="text-lg text-white">Автоматизация процессов</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Внедрение системы управления документами (DMS)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Автоматизация создания типовых документов</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Интеграция с электронными торговыми площадками</span>
                  </div>
                  <div className="p-3 bg-gold/10 rounded-lg border border-gold/20">
                    <div className="text-sm font-medium text-gold">Результат: сокращение времени на 45%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-premium-gray border-gold/20 premium-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <Icon name="Users" className="h-5 w-5 text-gold" />
                    </div>
                    <CardTitle className="text-lg text-white">Развитие персонала</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Обучение современным методам работы с тендерами</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Сертификация по управлению закупками</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Внедрение системы мотивации и KPI</span>
                  </div>
                  <div className="p-3 bg-gold/10 rounded-lg border border-gold/20">
                    <div className="text-sm font-medium text-gold">Результат: повышение квалификации на 35%</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Strategic Optimization */}
            <div className="space-y-6">
              <Card className="bg-premium-gray border-gold/20 premium-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <Icon name="Target" className="h-5 w-5 text-gold" />
                    </div>
                    <CardTitle className="text-lg text-white">Стратегическое планирование</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Создание базы данных потенциальных тендеров</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Анализ конкурентов и рыночных трендов</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Разработка долгосрочной стратегии участия</span>
                  </div>
                  <div className="p-3 bg-gold/10 rounded-lg border border-gold/20">
                    <div className="text-sm font-medium text-gold">Результат: увеличение выигрышей на 25%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-premium-gray border-gold/20 premium-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <Icon name="BarChart3" className="h-5 w-5 text-gold" />
                    </div>
                    <CardTitle className="text-lg text-white">Контроль и аналитика</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Внедрение системы отчетности и мониторинга</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Анализ эффективности участия в тендерах</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Оптимизация бюджета на участие в закупках</span>
                  </div>
                  <div className="p-3 bg-gold/10 rounded-lg border border-gold/20">
                    <div className="text-sm font-medium text-gold">Результат: ROI увеличивается на 40%</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-12 rounded-xl p-8 premium-shadow bg-premium-gray border border-gold/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Ключевые показатели эффективности после оптимизации
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-gold mb-2">-45%</div>
                <div className="text-gray-300">Время подготовки документов</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="h-8 w-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-gold mb-2">+25%</div>
                <div className="text-gray-300">Выигранных тендеров</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" className="h-8 w-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-gold mb-2">+40%</div>
                <div className="text-gray-300">ROI от участия</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" className="h-8 w-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-gold mb-2">95%</div>
                <div className="text-gray-300">Качество документов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Detection Section */}
      <section className="py-16 bg-premium-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Выявление рисков и нарушений
            </h2>
            <p className="text-gray-100 max-w-3xl mx-auto">
              Комплексный анализ для выявления недобросовестных сотрудников и фактов упущенной выгоды
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Staff Misconduct Detection */}
            <Card className="bg-premium-gray border-red-500/30 premium-shadow">
              <CardHeader className="bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-t-lg border-b border-red-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Icon name="AlertTriangle" className="h-6 w-6 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Выявление недобросовестных сотрудников
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Системный анализ действий персонала для выявления нарушений и злоупотреблений
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-3">Методы выявления:</h4>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Eye" className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">Анализ временных паттернов</div>
                      <div className="text-gray-300 text-sm">Выявление аномальных задержек в подаче заявок</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="FileX" className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">Контроль качества документов</div>
                      <div className="text-gray-300 text-sm">Выявление преднамеренных ошибок и упущений</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="Network" className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">Анализ связей с поставщиками</div>
                      <div className="text-gray-300 text-sm">Выявление конфликта интересов и сговора</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="Activity" className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">Мониторинг активности</div>
                      <div className="text-gray-300 text-sm">Отслеживание подозрительного поведения в системах</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Shield" className="h-4 w-4 text-red-400" />
                    <span className="font-medium text-red-300">Результат проверки</span>
                  </div>
                  <div className="text-sm text-red-300">
                    Выявление нарушений в 87% случаев проведенных аудитов
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lost Profit Analysis */}
            <Card className="bg-premium-gray border-yellow-500/30 premium-shadow">
              <CardHeader className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-t-lg border-b border-yellow-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Icon name="TrendingDown" className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Анализ упущенной выгоды
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Выявление потенциальных возможностей и оценка финансовых потерь компании
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-3">Области анализа:</h4>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Calendar" className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">Пропущенные тендеры</div>
                      <div className="text-gray-300 text-sm">Анализ неучастия в подходящих закупках</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="Calculator" className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">Неоптимальное ценообразование</div>
                      <div className="text-gray-300 text-sm">Выявление завышенных или заниженных ставок</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">Несвоевременная подача</div>
                      <div className="text-gray-300 text-sm">Потери от опоздания с документами</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="Target" className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">Неэффективная стратегия</div>
                      <div className="text-gray-300 text-sm">Анализ выбора неперспективных направлений</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="DollarSign" className="h-4 w-4 text-yellow-400" />
                    <span className="font-medium text-yellow-300">Средняя упущенная выгода</span>
                  </div>
                  <div className="text-sm text-yellow-300">
                    15-30% от общего оборота тендерного отдела
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investigation Process */}
          <div className="rounded-xl p-8 bg-premium-gray border border-gold/20 premium-shadow">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Процесс проведения расследования
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Сбор данных</h4>
                <p className="text-gray-300 text-sm">Анализ документооборота за последние 2 года</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Анализ паттернов</h4>
                <p className="text-gray-300 text-sm">Выявление аномалий и подозрительных действий</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Расчет ущерба</h4>
                <p className="text-gray-300 text-sm">Оценка финансовых потерь от выявленных нарушений</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">4</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Рекомендации</h4>
                <p className="text-gray-300 text-sm">Предложения по устранению проблем</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section id="audit" className="py-16 bg-premium-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Аудит системы управления</h2>
            <p className="text-gray-100 max-w-2xl mx-auto">
              Анализ системы управления тендерным отделом с фокусом на ключевые аспекты
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Структура документооборота
                    </h3>
                    <p className="text-gray-300">
                      Анализ организации хранения, обработки и передачи тендерной документации
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Процедуры контроля
                    </h3>
                    <p className="text-gray-300">
                      Оценка механизмов верификации и валидации тендерных заявок
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Автоматизация процессов
                    </h3>
                    <p className="text-gray-300">
                      Анализ уровня цифровизации и возможностей для внедрения IT-решений
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-premium-gray p-8 rounded-lg premium-shadow border border-gold/20">
              <h3 className="text-xl font-semibold text-white mb-6">Ключевые показатели</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Время обработки заявок</span>
                  <Badge variant="secondary" className="bg-gold/20 text-gold border-gold/30">-30%</Badge>
                </div>
                <div className="w-full bg-premium-dark rounded-full h-2">
                  <div className="bg-gold h-2 rounded-full w-[70%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Качество документации</span>
                  <Badge variant="secondary" className="bg-gold/20 text-gold border-gold/30">+45%</Badge>
                </div>
                <div className="w-full bg-premium-dark rounded-full h-2">
                  <div className="bg-gold h-2 rounded-full w-[85%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Соответствие регламентам</span>
                  <Badge variant="secondary" className="bg-gold/20 text-gold border-gold/30">+60%</Badge>
                </div>
                <div className="w-full bg-premium-dark rounded-full h-2">
                  <div className="bg-gold h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <PremiumTestimonial />

      {/* Tender Specialists Reviews */}
      <TenderSpecialistsReviews />

      {/* About Section */}
      <section id="about" className="py-16 bg-premium-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">О компании</h2>
              <p className="text-gray-300 mb-6">
                Мы специализируемся на проведении комплексного аудита тендерных отделов 
                поставщиков. Наша команда экспертов имеет многолетний опыт работы в сфере 
                государственных и коммерческих закупок.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">150+</div>
                  <div className="text-gray-400">Проведено аудитов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">12</div>
                  <div className="text-gray-400">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="bg-premium-gray p-8 rounded-lg premium-shadow border border-gold/20">
              <h3 className="text-xl font-semibold text-white mb-4">Наши преимущества</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Индивидуальный подход к каждому клиенту</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Глубокая экспертиза в области закупок</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Практические рекомендации по оптимизации</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Постаудиторское сопровождение</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Готовы начать аудит Вашего тендерного отдела? Свяжитесь с нами для получения консультации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-white">Телефон</CardTitle>
                <CardDescription className="text-gray-300">
                  <a href="tel:+79117090557" className="hover:text-primary transition-colors">
                    +7 (911) 709-05-57
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
                <CardDescription className="text-gray-300">ipavilovsp@yandex.ru</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-white">Адрес</CardTitle>
                <CardDescription className="text-gray-300">г. Санкт-Петербург</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="FileCheck" className="h-6 w-6 text-primary mr-2" />
              <span className="text-white font-semibold">TenderAudit</span>
            </div>
            <div className="text-gray-400 text-sm">© ИП Авилов С.П.
ОГРНИП324784700271894
 Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}