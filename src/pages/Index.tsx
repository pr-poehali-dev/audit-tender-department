import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", company: "", text: "", rating: 5 });
  const [reviews, setReviews] = useState([
    {
      name: "Михаил Сергеев",
      company: "",
      text: "Благодаря профессионализму команды мы выиграли государственный контракт на 15 млн рублей. Особенно хочу отметить качество подготовки технической документации.",
      rating: 5,
      date: "15.11.2024"
    },
    {
      name: "Елена Николаева",
      company: "",
      text: "Сопровождение на всех этапах было безупречным. Помогли разобраться с электронным актированием, что сэкономило массу времени.",
      rating: 5,
      date: "08.11.2024"
    },
    {
      name: "Александр Петров",
      company: "",
      text: "Отличная работа с техническими заданиями. Специалисты учли все нюансы нашей отрасли и подготовили грамотное описание объекта закупки.",
      rating: 5,
      date: "02.11.2024"
    },
    {
      name: "Дмитрий Волков",
      company: "",
      text: "Профессиональный подход к каждому тендеру. Помогли выиграть сложный аукцион, где конкуренция была очень высокой. Рекомендую!",
      rating: 5,
      date: "28.10.2024"
    },
    {
      name: "Ольга Смирнова",
      company: "",
      text: "Отличное юридическое сопровождение. Помогли обжаловать неправомерные действия заказчика, и мы получили контракт. Спасибо!",
      rating: 5,
      date: "20.10.2024"
    },
    {
      name: "Игорь Федоров",
      company: "",
      text: "Работаю с этой компанией уже второй год. Всегда оперативно реагируют на новые тендеры и качественно готовят документацию.",
      rating: 5,
      date: "12.10.2024"
    }
  ]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewForm.name && reviewForm.text) {
      const newReview = {
        ...reviewForm,
        date: new Date().toLocaleDateString('ru-RU')
      };
      setReviews([newReview, ...reviews]);
      setReviewForm({ name: "", company: "", text: "", rating: 5 });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-lg flex items-center justify-center shadow-lg shadow-amber-600/50">
                <Icon name="Dog" className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">ТендерМаркет</span>
                <div className="text-xs text-slate-400">Премиальное тендерное сопровождение</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Услуги</a>
              <a href="#advantages" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Преимущества</a>
              <a href="#reviews" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Отзывы</a>
              <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Контакты</a>
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-600/50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Консультация
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#services" className="block text-slate-300 hover:text-amber-400 py-2">Услуги</a>
              <a href="#advantages" className="block text-slate-300 hover:text-amber-400 py-2">Преимущества</a>
              <a href="#reviews" className="block text-slate-300 hover:text-amber-400 py-2">Отзывы</a>
              <a href="#contact" className="block text-slate-300 hover:text-amber-400 py-2">Контакты</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-slate-950 to-slate-950"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30">
                <Icon name="Award" className="w-4 h-4 mr-2" />
                Премиальное тендерное сопровождение
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ваш надёжный партнёр в мире госзакупок
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Комплексное сопровождение тендеров, электронное актирование, разработка технических заданий. Работаем на результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg shadow-xl shadow-amber-600/30" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-950/50 text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  Наши услуги
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-amber-600/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">12+ лет</div>
                  <div className="text-sm text-slate-400 mt-2">Опыт работы на рынке</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-amber-600/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Санкт-Петербург</div>
                  <div className="text-sm text-slate-400 mt-2">Работаем по всей России</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop" 
                alt="Тендерное сопровождение" 
                className="relative rounded-2xl shadow-2xl w-full border border-amber-600/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30 mb-4">
              <Icon name="Briefcase" className="w-4 h-4 mr-2" />
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Полный спектр тендерных услуг</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              От поиска тендера до электронного актирования работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Search",
                title: "Поиск и анализ тендеров",
                description: "Ежедневный мониторинг всех площадок электронных торгов и отбор перспективных закупок",
                features: ["Мониторинг ЕИС", "Анализ конкурентов", "Оценка рентабельности"]
              },
              {
                icon: "FileEdit",
                title: "Техническое задание",
                description: "Разработка технических заданий и описаний объектов закупок любой сложности",
                features: ["Составление ТЗ", "Описание ОЗ", "Техническая экспертиза"]
              },
              {
                icon: "FileText",
                title: "Подготовка документов",
                description: "Профессиональная подготовка полного пакета документов для участия в тендере",
                features: ["Заявки на участие", "Коммерческие предложения", "Обеспечительные документы"]
              },
              {
                icon: "FileCheck2",
                title: "Электронное актирование",
                description: "Полное сопровождение процесса электронного актирования выполненных работ",
                features: ["Подготовка актов выполненных работ", "Согласование с заказчиком", "Документооборот"]
              },
              {
                icon: "Shield",
                title: "Правовое сопровождение",
                description: "Защита ваших интересов на всех этапах закупочной процедуры",
                features: ["Юридические консультации", "Обжалование действий заказчика", "Досудебное урегулирование"]
              },
              {
                icon: "TrendingUp",
                title: "Участие в торгах",
                description: "Представление интересов в электронных аукционах и конкурсах",
                features: ["Стратегия ценообразования", "Онлайн-сопровождение", "Работа с ценовыми предложениями"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border border-amber-600/30 hover:border-amber-500 group bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-600/50">
                    <Icon name={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-400">{feature}</span>
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
      <section id="advantages" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30 mb-4">
              <Icon name="Star" className="w-4 h-4 mr-2" />
              Наши преимущества
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Профессионализм, опыт и индивидуальный подход к каждому клиенту
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Award",
                title: "Опыт и экспертиза",
                description: "Более 12 лет успешной работы в сфере государственных закупок"
              },
              {
                icon: "Clock",
                title: "Экономия времени",
                description: "Полное освобождение от рутинных процедур подготовки к тендерам"
              },
              {
                icon: "Users",
                title: "Команда профессионалов",
                description: "Юристы, экономисты и специалисты по закупкам в одной команде"
              },
              {
                icon: "Zap",
                title: "Быстрая реакция",
                description: "Оперативное реагирование на новые тендеры и изменения в законодательстве"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all shadow-lg shadow-amber-600/50">
                  <Icon name={advantage.icon} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-slate-400 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30 mb-4">
              <Icon name="MessageSquare" className="w-4 h-4 mr-2" />
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Что говорят о нас</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Мнения наших клиентов — лучшая оценка нашей работы
            </p>
          </div>

          {/* Reviews Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <Card key={index} className="border border-amber-600/30 bg-gradient-to-br from-slate-900 to-slate-800">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed italic">"{review.text}"</p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="font-bold text-white">{review.name}</div>
                    {review.company && <div className="text-sm text-slate-400">{review.company}</div>}
                    <div className="text-xs text-slate-500 mt-1">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Review Form */}
          <Card className="max-w-3xl mx-auto border border-amber-600/30 bg-gradient-to-br from-slate-900 to-slate-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Оставить отзыв</h3>
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2">Ваше имя *</label>
                  <Input 
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                    className="bg-slate-800 border-slate-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Компания</label>
                  <Input 
                    value={reviewForm.company}
                    onChange={(e) => setReviewForm({...reviewForm, company: e.target.value})}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Оценка</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewForm({...reviewForm, rating: star})}
                        className="focus:outline-none"
                      >
                        <Icon 
                          name="Star" 
                          className={`w-8 h-8 ${star <= reviewForm.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-600'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Ваш отзыв *</label>
                  <Textarea 
                    value={reviewForm.text}
                    onChange={(e) => setReviewForm({...reviewForm, text: e.target.value})}
                    className="bg-slate-800 border-slate-700 text-white min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-600/30">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить отзыв
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-600/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-12 relative z-10">
              <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30 mb-4">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Свяжитесь с нами
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">Получите бесплатную консультацию</h2>
              <p className="text-xl text-slate-300">
                Ответим на все вопросы и подберём оптимальное решение для вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-amber-600/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Телефон</div>
                    <a href="tel:+79117090557" className="text-amber-400 hover:text-amber-300 text-lg">+7 (911) 709-05-57</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-amber-600/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href="mailto:IPAvilovSP@yandex.ru" className="text-amber-400 hover:text-amber-300">IPAvilovSP@yandex.ru</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-amber-600/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Адрес</div>
                    <div className="text-slate-300">г. Санкт-Петербург</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-amber-600/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">ОГРНИП</div>
                    <div className="text-slate-300 font-mono">324784700271894</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm border border-amber-500/30 text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">Режим работы</h3>
                  <div className="space-y-3 text-slate-300">
                    <div className="flex justify-between pb-2 border-b border-amber-600/30">
                      <span>Понедельник - Пятница</span>
                      <span className="text-amber-400 font-semibold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-amber-600/30">
                      <span>Суббота</span>
                      <span className="text-amber-400 font-semibold">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье</span>
                      <span className="text-slate-500">Выходной</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-amber-600/30">
                    <h4 className="font-bold mb-3 text-amber-400">Работаем с:</h4>
                    <ul className="space-y-2">
                      {[
                        "44-ФЗ (госзакупки)",
                        "223-ФЗ (закупки отдельных видов юрлиц)",
                        "Коммерческие тендеры",
                        "Электронные торговые площадки"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="CheckCircle" className="w-5 h-5 text-amber-500" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center relative z-10">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg px-12 shadow-xl shadow-amber-600/30">
                <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-amber-600/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-lg shadow-amber-600/50">
                  <Icon name="Dog" className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">ТендерМаркет</span>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Профессиональное тендерное сопровождение для вашего бизнеса. Полный цикл услуг от поиска тендеров до электронного актирования.
              </p>
              <div className="text-sm text-slate-500">
                <div>ОГРНИП: 324784700271894</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Поиск тендеров</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Техзадания</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Электронное актирование</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Правовое сопровождение</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+7 (911) 709-05-57</li>
                <li>IPAvilovSP@yandex.ru</li>
                <li>г. Санкт-Петербург</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ИП Авилов С.П. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}