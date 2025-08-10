import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ReviewModal from "./ReviewModal";

export default function TenderSpecialistsReviews() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
  const reviews = [
    {
      name: "Елена Смирнова",
      position: "Начальник тендерного отдела",
      company: "ООО 'ПромИнвест'",
      experience: "8 лет опыта",
      rating: 5,
      text: "Станислав провёл аудит нашего отдела и выявил критические ошибки, которые мы допускали годами. После внедрения его рекомендаций мы увеличили долю выигранных тендеров с 23% до 67%. Сэкономили более 12 млн рублей на процессах.",
      result: "+44% выигранных тендеров"
    },
    {
      name: "Михаил Воронов",
      position: "Ведущий специалист по закупкам",
      company: "АО 'СтройТех'",
      experience: "12 лет опыта",
      rating: 5,
      text: "Работа со Станиславом - это инвестиция в будущее компании. Он не просто проводит аудит, а обучает команду, меняет подходы. За полгода мы полностью трансформировали отдел. Теперь участвуем в тендерах в 3 раза активнее.",
      result: "₽28M дополнительных контрактов"
    },
    {
      name: "Анна Кузнецова",
      position: "Специалист тендерного отдела",
      company: "ИП 'Логистика Плюс'",
      experience: "5 лет опыта",
      rating: 5,
      text: "Станислав выявил, что наш специалист намеренно срывал подачу заявок на крупные тендеры. Оказалось, он работал на конкурентов! Ущерб составлял около 45 млн в год. Теперь у нас прозрачная система контроля.",
      result: "Выявлено мошенничество на ₽45M"
    },
    {
      name: "Дмитрий Петров",
      position: "Руководитель отдела госзакупок",
      company: "ООО 'МегаСтрой'",
      experience: "15 лет опыта",
      rating: 5,
      text: "До аудита мы тратили 6-8 часов на подготовку одной заявки. Станислав внедрил систему автоматизации и шаблонов. Теперь тот же объём работы занимает 2 часа. Освободившееся время используем для поиска новых тендеров.",
      result: "-75% времени на подготовку"
    },
    {
      name: "Ольга Николаева",
      position: "Главный специалист по тендерам",
      company: "АО 'ТехСервис'",
      experience: "10 лет опыта",
      rating: 5,
      text: "Станислав помог нам пересмотреть стратегию участия в закупках. Раньше мы участвовали везде подряд. Теперь фокусируемся на перспективных направлениях. ROI вырос с 12% до 89%. Каждый рубль, вложенный в тендеры, приносит почти рубль прибыли.",
      result: "+77% ROI от участия"
    },
    {
      name: "Сергей Волков",
      position: "Менеджер по государственным закупкам",
      company: "ИП 'ЭкоСтрой'",
      experience: "7 лет опыта",
      rating: 5,
      text: "После работы со Станиславом качество наших заявок кардинально выросло. Раньше 40% заявок отклонялись по техническим ошибкам. Сейчас процент брака менее 3%. Это позволило участвовать в более сложных и прибыльных тендерах.",
      result: "Качество заявок 97%"
    },
    {
      name: "Татьяна Морозова",
      position: "Ведущий эксперт по тендерам",
      company: "ООО 'ИнноваТех'",
      experience: "9 лет опыта",
      rating: 5,
      text: "Станислав научил нас работать не количеством, а качеством. Вместо участия в 200 тендерах в месяц, мы участвуем в 80, но выигрываем 60% из них. Прибыль выросла в 2,4 раза, а стресс у команды снизился.",
      result: "Прибыль выросла в 2.4 раза"
    },
    {
      name: "Алексей Соколов",
      position: "Начальник отдела закупок",
      company: "АО 'Энерго+'",
      experience: "13 лет опыта",
      rating: 5,
      text: "Благодаря аудиту Станислава мы обнаружили, что упускали огромный пласт федеральных закупок. Просто не знали о специфике подачи заявок на крупные госконтракты. За год освоили новую нишу и заработали дополнительно 67 млн.",
      result: "₽67M новых контрактов"
    },
    {
      name: "Марина Лебедева",
      position: "Старший специалист тендерного отдела",
      company: "ИП 'СпецМонтаж'",
      experience: "6 лет опыта",
      rating: 5,
      text: "Станислав не только улучшил процессы, но и поднял мотивацию команды. Внедрил систему KPI и бонусов. Теперь каждый специалист лично заинтересован в результате. Производительность отдела выросла на 156%.",
      result: "+156% производительности"
    },
    {
      name: "Владимир Козлов",
      position: "Ведущий менеджер по закупкам",
      company: "ООО 'ГлобалТрейд'",
      experience: "11 лет опыта",
      rating: 5,
      text: "До работы со Станиславом мы участвовали в тендерах интуитивно. Он создал нам систему аналитики: какие тендеры выигрываем, какие проигрываем и почему. Теперь каждое решение основано на данных. Эффективность выросла на 89%.",
      result: "+89% эффективности"
    }
  ];

  return (
    <section className="py-20 bg-premium-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            ОТЗЫВЫ СПЕЦИАЛИСТОВ ТЕНДЕРНЫХ ОТДЕЛОВ
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
            Реальные результаты от профессионалов, которые работают с тендерами каждый день
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reviews.map((review, index) => (
            <Card key={index} className="premium-shadow hover:shadow-glow transition-all duration-500 bg-premium-gray/80 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-500 mr-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div className="gold-gradient px-3 py-1 rounded-full text-black text-xs font-bold">
                    {review.result}
                  </div>
                </div>
                
                <blockquote className="text-gray-300 leading-relaxed mb-6 text-base">
                  "{review.text}"
                </blockquote>
                
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-white text-lg">{review.name}</div>
                    <div className="text-gold font-semibold text-sm">{review.position}</div>
                    <div className="text-gray-400 text-xs mt-1">{review.experience}</div>
                  </div>
                  <div className="text-right">
                    <Icon name="Quote" className="h-8 w-8 text-gold opacity-30" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Работали с нами? Поделитесь опытом!
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ваш отзыв поможет другим компаниям принять правильное решение и улучшить свои тендерные процессы
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsReviewModalOpen(true)}
            className="gold-gradient text-black font-bold hover:scale-105 transition-all duration-300 shadow-glow"
          >
            <Icon name="PenTool" className="mr-2 h-5 w-5" />
            Оставить отзыв
          </Button>
        </div>

      </div>
      
      {/* Review Modal */}
      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
      />
    </section>
  );
}