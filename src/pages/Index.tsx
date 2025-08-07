import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="FileCheck" className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-semibold text-gray-900">TenderAudit</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="#home" className="text-primary font-medium">Главная</a>
                <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
                <a href="#audit" className="text-gray-600 hover:text-primary transition-colors">Аудит</a>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Профессиональный аудит
            <span className="text-primary block">тендерного отдела</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Комплексный анализ системы управления тендерными документами для повышения эффективности закупочных процессов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="FileText" className="mr-2 h-5 w-5" />
              Заказать аудит
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по оптимизации работы тендерного отдела
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Анализ процессов</CardTitle>
                <CardDescription>
                  Детальное изучение существующих процедур подготовки и подачи тендерных документов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Контроль качества</CardTitle>
                <CardDescription>
                  Оценка системы контроля качества документооборота и соблюдения регламентов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Оптимизация</CardTitle>
                <CardDescription>
                  Разработка рекомендаций по улучшению эффективности тендерных процессов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Recommendations Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Рекомендации по увеличению производительности
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Проверенные методы оптимизации работы тендерного отдела для повышения эффективности на 40-60%
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Process Optimization */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Zap" className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Автоматизация процессов</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Внедрение системы управления документами (DMS)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Автоматизация создания типовых документов</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Интеграция с электронными торговыми площадками</span>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <div className="text-sm font-medium text-primary">Результат: сокращение времени на 45%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Users" className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Развитие персонала</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Обучение современным методам работы с тендерами</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Сертификация по управлению закупками</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Внедрение системы мотивации и KPI</span>
                  </div>
                  <div className="p-3 bg-secondary/5 rounded-lg">
                    <div className="text-sm font-medium text-secondary">Результат: повышение квалификации на 35%</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Strategic Optimization */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Target" className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Стратегическое планирование</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Создание базы данных потенциальных тендеров</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Анализ конкурентов и рыночных трендов</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Разработка долгосрочной стратегии участия</span>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <div className="text-sm font-medium text-primary">Результат: увеличение выигрышей на 25%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="BarChart3" className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Контроль и аналитика</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Внедрение системы отчетности и мониторинга</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Анализ эффективности участия в тендерах</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Оптимизация бюджета на участие в закупках</span>
                  </div>
                  <div className="p-3 bg-secondary/5 rounded-lg">
                    <div className="text-sm font-medium text-secondary">Результат: ROI увеличивается на 40%</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Ключевые показатели эффективности после оптимизации
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">-45%</div>
                <div className="text-gray-600">Время подготовки документов</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+25%</div>
                <div className="text-gray-600">Выигранных тендеров</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+40%</div>
                <div className="text-gray-600">ROI от участия</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Качество документов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section id="audit" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Аудит системы управления</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Анализ системы управления тендерными документами с фокусом на ключевые аспекты
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Структура документооборота
                    </h3>
                    <p className="text-gray-600">
                      Анализ организации хранения, обработки и передачи тендерной документации
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Процедуры контроля
                    </h3>
                    <p className="text-gray-600">
                      Оценка механизмов верификации и валидации тендерных заявок
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Автоматизация процессов
                    </h3>
                    <p className="text-gray-600">
                      Анализ уровня цифровизации и возможностей для внедрения IT-решений
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Ключевые показатели</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Время обработки заявок</span>
                  <Badge variant="secondary">-30%</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[70%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Качество документации</span>
                  <Badge variant="secondary">+45%</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Соответствие регламентам</span>
                  <Badge variant="secondary">+60%</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О компании</h2>
              <p className="text-gray-600 mb-6">
                Мы специализируемся на проведении комплексного аудита тендерных отделов 
                поставщиков. Наша команда экспертов имеет многолетний опыт работы в сфере 
                государственных и коммерческих закупок.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">Проведено аудитов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Наши преимущества</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Индивидуальный подход к каждому клиенту</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Глубокая экспертиза в области закупок</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Практические рекомендации по оптимизации</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Постаудиторское сопровождение</span>
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
              Готовы начать аудит вашего тендерного отдела? Свяжитесь с нами для получения консультации
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
                  +7 (495) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
                <CardDescription className="text-gray-300">
                  info@tenderaudit.ru
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-white">Адрес</CardTitle>
                <CardDescription className="text-gray-300">
                  г. Москва, ул. Деловая, д. 15
                </CardDescription>
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
            <div className="text-gray-400 text-sm">
              © 2024 TenderAudit. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}