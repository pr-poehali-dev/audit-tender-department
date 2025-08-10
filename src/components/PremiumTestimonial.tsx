import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function PremiumTestimonial() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            РЕЗУЛЬТАТЫ КЛИЕНТОВ
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="premium-shadow bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-gold text-5xl font-bold mb-4">+187%</div>
              <div className="text-xl font-semibold mb-2">Рост прибыли</div>
              <div className="text-white/80">ООО "СтройИнвест"</div>
              <div className="text-white/60 text-sm mt-2">за 6 месяцев</div>
            </CardContent>
          </Card>

          <Card className="premium-shadow bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-gold text-5xl font-bold mb-4">₽52M</div>
              <div className="text-xl font-semibold mb-2">Дополнительных контрактов</div>
              <div className="text-white/80">АО "ТехноСервис"</div>
              <div className="text-white/60 text-sm mt-2">в первый год</div>
            </CardContent>
          </Card>

          <Card className="premium-shadow bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-gold text-5xl font-bold mb-4">-67%</div>
              <div className="text-xl font-semibold mb-2">Сокращение времени</div>
              <div className="text-white/80">ИП "Логистика+"</div>
              <div className="text-white/60 text-sm mt-2">подготовки заявок</div>
            </CardContent>
          </Card>
        </div>

        <Card className="premium-shadow bg-white/5 backdrop-blur-md border-white/10">
          <CardContent className="p-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Icon name="Quote" className="h-16 w-16 text-gold" />
              </div>
              <div className="text-white">
                <blockquote className="text-2xl font-medium leading-relaxed mb-6 font-display italic">
                  "Станислав кардинально изменил работу нашего тендерного отдела. 
                  За год мы увеличили количество выигранных тендеров на 340% 
                  и сэкономили более 15 млн рублей на оптимизации процессов."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-gold font-bold text-lg">Михаил Петров</div>
                    <div className="text-white/70">Генеральный директор ООО "МегаСтрой"</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}