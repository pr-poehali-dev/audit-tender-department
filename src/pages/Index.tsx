import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Icon name="FileCheck" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">ТендерПро</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#advantages" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Преимущества</a>
              <a href="#process" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Процесс</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Контакты</a>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Получить консультацию
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6 text-slate-800" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#services" className="block text-slate-600 hover:text-blue-600 py-2">Услуги</a>
              <a href="#advantages" className="block text-slate-600 hover:text-blue-600 py-2">Преимущества</a>
              <a href="#process" className="block text-slate-600 hover:text-blue-600 py-2">Процесс</a>
              <a href="#contact" className="block text-slate-600 hover:text-blue-600 py-2">Контакты</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                <Icon name="Award" className="w-4 h-4 mr-2" />
                Профессиональное тендерное сопровождение
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Победа в тендерах — наша специализация
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Комплексное сопровождение на всех этапах тендерных процедур. Увеличим ваши шансы на победу до 85%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  Узнать больше
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">Выигранных тендеров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-slate-600">Процент побед</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">12 лет</div>
                  <div className="text-sm text-slate-600">На рынке</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                alt="Тендерное сопровождение" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
              <Icon name="Briefcase" className="w-4 h-4 mr-2" />
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Комплексное тендерное сопровождение</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный цикл работ от поиска тендеров до заключения контракта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Search",
                title: "Поиск тендеров",
                description: "Мониторинг и отбор тендеров по вашим критериям на всех площадках",
                features: ["Автоматизированный поиск", "Анализ конкурентов", "Оценка перспективности"]
              },
              {
                icon: "FileText",
                title: "Подготовка документов",
                description: "Профессиональная подготовка заявок и необходимой документации",
                features: ["Проверка требований", "Оформление заявки", "Юридическая экспертиза"]
              },
              {
                icon: "Shield",
                title: "Правовое сопровождение",
                description: "Защита ваших интересов на всех этапах тендерной процедуры",
                features: ["Консультации юристов", "Обжалование решений", "Досудебное урегулирование"]
              },
              {
                icon: "TrendingUp",
                title: "Финансовый анализ",
                description: "Расчет коммерческого предложения и оптимизация ценообразования",
                features: ["Анализ себестоимости", "Конкурентное ценообразование", "Расчет рентабельности"]
              },
              {
                icon: "CheckCircle",
                title: "Участие в торгах",
                description: "Представление ваших интересов в электронных и очных торгах",
                features: ["Стратегия торгов", "Онлайн-сопровождение", "Ценовые предложения"]
              },
              {
                icon: "FileCheck",
                title: "Заключение контракта",
                description: "Полное сопровождение процесса заключения государственного контракта",
                features: ["Проверка договора", "Согласование условий", "Подписание контракта"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500 text-white hover:bg-blue-500 mb-4">
              <Icon name="Star" className="w-4 h-4 mr-2" />
              Почему выбирают нас
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Ваши преимущества при работе с нами</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Профессиональный подход и многолетний опыт гарантируют результат
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Target",
                title: "Высокий процент побед",
                description: "85% выигранных тендеров благодаря профессиональному подходу"
              },
              {
                icon: "Clock",
                title: "Экономия времени",
                description: "Освободите ресурсы компании для основной деятельности"
              },
              {
                icon: "Users",
                title: "Опытная команда",
                description: "Специалисты с опытом работы более 12 лет"
              },
              {
                icon: "Zap",
                title: "Быстрая реакция",
                description: "Оперативное реагирование на новые тендеры 24/7"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all group-hover:scale-110">
                  <Icon name={advantage.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-blue-100 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
              <Icon name="GitBranch" className="w-4 h-4 mr-2" />
              Процесс работы
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Как мы работаем</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Прозрачная схема сотрудничества на каждом этапе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Консультация",
                description: "Анализируем ваши потребности и возможности",
                icon: "MessageSquare"
              },
              {
                step: "02",
                title: "Поиск тендеров",
                description: "Находим подходящие тендеры на всех площадках",
                icon: "Search"
              },
              {
                step: "03",
                title: "Подготовка заявки",
                description: "Оформляем документы и готовим конкурентное предложение",
                icon: "FileEdit"
              },
              {
                step: "04",
                title: "Победа и контракт",
                description: "Сопровождаем до заключения контракта",
                icon: "Trophy"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
                  <div className="text-5xl font-bold text-blue-200 mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Связаться с нами
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Получите бесплатную консультацию</h2>
              <p className="text-xl text-slate-600">
                Обсудим ваши задачи и предложим оптимальное решение
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-blue-600 hover:text-blue-700">+7 (999) 123-45-67</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Email</div>
                    <a href="mailto:info@tenderpro.ru" className="text-blue-600 hover:text-blue-700">info@tenderpro.ru</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Адрес</div>
                    <div className="text-slate-600">г. Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4">Работаем по всей России</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Оказываем услуги тендерного сопровождения для компаний во всех регионах РФ
                  </p>
                  <ul className="space-y-3">
                    {[
                      "44-ФЗ и 223-ФЗ",
                      "Коммерческие тендеры",
                      "Электронные аукционы",
                      "Конкурсы и запросы котировок"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="w-5 h-5 text-blue-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12">
                <Icon name="Send" className="w-5 h-5 mr-2" />
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Icon name="FileCheck" className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">ТендерПро</span>
              </div>
              <p className="text-slate-400 mb-4">
                Профессиональное тендерное сопровождение для вашего бизнеса. Увеличиваем шансы на победу в государственных и коммерческих тендерах.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Поиск тендеров</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Подготовка документов</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Правовое сопровождение</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Участие в торгах</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@tenderpro.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ТендерПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
