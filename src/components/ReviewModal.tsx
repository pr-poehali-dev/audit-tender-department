import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    experience: "",
    rating: 5,
    review: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Закрыть модалку через 3 секунды после успешной отправки
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        position: "",
        experience: "",
        rating: 5,
        review: "",
        email: "",
        phone: ""
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-premium-gray border border-gold/30 shadow-glow">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <Icon name="X" className="h-6 w-6" />
          </button>
          
          <CardTitle className="text-2xl font-display text-white text-center pr-8">
            Оставить отзыв о работе
          </CardTitle>
          <p className="text-gray-300 text-center">
            Поделитесь своим опытом сотрудничества с нашей компанией
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Спасибо за отзыв!</h3>
              <p className="text-gray-300">
                Ваш отзыв был отправлен и будет рассмотрен нашей командой. 
                Мы ценим ваше мнение!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Личная информация */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Имя и фамилия *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-premium-dark border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Должность *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-premium-dark border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Руководитель тендерного отдела"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Опыт работы
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-premium-dark border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                    placeholder="5 лет опыта"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Оценка работы *
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className={`p-1 transition-colors ${
                          star <= formData.rating 
                            ? 'text-yellow-400' 
                            : 'text-gray-600 hover:text-yellow-400'
                        }`}
                      >
                        <Icon name="Star" className={`h-6 w-6 ${star <= formData.rating ? 'fill-current' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Контактная информация */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-premium-dark border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-premium-dark border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              {/* Отзыв */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Ваш отзыв *
                </label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-premium-dark border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о результатах работы с нашей компанией, достигнутых улучшениях и вашем общем впечатлении..."
                />
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Отменить
                </Button>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 gold-gradient text-black font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                      Отправляется...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить отзыв
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-gray-400 text-center">
                * Обязательные поля. Ваши данные будут использованы только для обработки отзыва.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}