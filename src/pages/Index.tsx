import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const universities = [
  {
    id: 1,
    name: "Shanghai University of Technology",
    city: "Шанхай",
    country: "Китай",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    rating: "#15 в Китае",
    priceFrom: "¥28,000",
    hasGrants: true,
    grantUpTo: "100%",
    deadline: "15 июня 2026",
    languages: ["CN", "EN"],
    badge: "Мало мест"
  },
  {
    id: 2,
    name: "Beijing Normal University",
    city: "Пекин",
    country: "Китай",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    rating: "#8 в Китае",
    priceFrom: "¥35,000",
    hasGrants: true,
    grantUpTo: "75%",
    deadline: "1 июля 2026",
    languages: ["CN", "EN"],
    badge: "До дедлайна 45 дней"
  },
  {
    id: 3,
    name: "Zhejiang University",
    city: "Ханчжоу",
    country: "Китай",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    rating: "#3 в Китае",
    priceFrom: "¥42,000",
    hasGrants: true,
    grantUpTo: "50%",
    deadline: "20 мая 2026",
    languages: ["CN", "EN"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="gradient-primary py-6 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="text-white" size={32} />
            <h1 className="text-2xl font-bold text-white">UniAbroad</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-white font-medium">
            <a href="#universities" className="hover:opacity-80 transition">Университеты</a>
            <a href="#about" className="hover:opacity-80 transition">О нас</a>
            <a href="#contact" className="hover:opacity-80 transition">Контакты</a>
          </nav>
          <Button variant="secondary" size="lg" className="font-semibold">
            Получить консультацию
          </Button>
        </div>
      </header>

      <section className="gradient-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Поступи в университет мечты
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Помогаем студентам поступать в зарубежные вузы с грантами до 100%. 
            Полное сопровождение от подачи документов до заселения.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Badge className="bg-white/20 backdrop-blur-sm text-white text-lg py-2 px-6 hover:bg-white/30 transition">
              <Icon name="Trophy" size={20} className="mr-2" />
              Гранты до 100%
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white text-lg py-2 px-6 hover:bg-white/30 transition">
              <Icon name="Shield" size={20} className="mr-2" />
              Гарантия поступления
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white text-lg py-2 px-6 hover:bg-white/30 transition">
              <Icon name="Users" size={20} className="mr-2" />
              500+ студентов
            </Badge>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-6">
              <Icon name="Search" size={20} className="mr-2" />
              Подобрать университет
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section id="universities" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Топовые университеты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите университет из нашего каталога проверенных вузов с грантами и доступными программами
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="outline" className="font-semibold">
              <Icon name="Globe" size={18} className="mr-2" />
              Все страны
            </Button>
            <Button variant="outline" className="font-semibold">Китай</Button>
            <Button variant="outline" className="font-semibold">Европа</Button>
            <Button variant="outline" className="font-semibold">США</Button>
            <Button variant="outline" className="font-semibold">
              <Icon name="Award" size={18} className="mr-2" />
              С грантами
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((uni) => (
              <Link key={uni.id} to={`/university/${uni.id}`}>
                <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden border-2 hover:border-purple-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={uni.image} 
                      alt={uni.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {uni.badge && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">
                        {uni.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{uni.name}</h3>
                    <p className="text-gray-600 mb-4 flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {uni.city}, {uni.country}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Icon name="Star" size={20} className="text-yellow-500 mt-1" />
                        <div>
                          <p className="text-sm text-gray-500">Рейтинг</p>
                          <p className="font-bold">{uni.rating}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="DollarSign" size={20} className="text-green-500 mt-1" />
                        <div>
                          <p className="text-sm text-gray-500">От</p>
                          <p className="font-bold">{uni.priceFrom}/год</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Award" size={20} className="text-purple-500 mt-1" />
                        <div>
                          <p className="text-sm text-gray-500">Грант</p>
                          <p className="font-bold">До {uni.grantUpTo}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Calendar" size={20} className="text-blue-500 mt-1" />
                        <div>
                          <p className="text-sm text-gray-500">Дедлайн</p>
                          <p className="font-bold text-xs">{uni.deadline}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                      {uni.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">{lang}</Badge>
                      ))}
                    </div>

                    <Button className="w-full gradient-primary text-white font-bold hover:opacity-90">
                      Подробнее
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Как мы помогаем
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Search",
                title: "Диагностика и подбор",
                description: "Анализируем ваш профиль и подбираем идеальные программы с максимальными шансами на грант"
              },
              {
                icon: "FileText",
                title: "Подготовка документов",
                description: "Собираем и оформляем все необходимые документы, переводим и заверяем"
              },
              {
                icon: "Plane",
                title: "Визовая поддержка",
                description: "Помогаем с получением визы и всеми миграционными процедурами"
              },
              {
                icon: "Home",
                title: "Сопровождение",
                description: "Поддерживаем после заселения: адаптация, регистрация, решение бытовых вопросов"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-purple-300">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={step.icon} size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-block gradient-primary p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">🎯 Гарантия поступления или возврат средств</h3>
              <p className="text-lg opacity-90 max-w-2xl">
                Мы настолько уверены в нашей экспертизе, что гарантируем результат. 
                Не поступите — вернём деньги.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 md:p-12 border-2 border-purple-200 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
              Получить консультацию
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Оставьте заявку, и наш эксперт свяжется с вами в течение часа
            </p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Телефон / Telegram</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  placeholder="+7 999 123-45-67"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Интересующая программа</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition">
                  <option>Бакалавриат</option>
                  <option>Магистратура</option>
                  <option>Языковые программы</option>
                  <option>1+3 / 1+4</option>
                  <option>Пока не определился</option>
                </select>
              </div>
              
              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Согласен на обработку персональных данных и получение информации
                </label>
              </div>
              
              <Button className="w-full gradient-primary text-white font-bold text-lg py-6 hover:opacity-90">
                Отправить заявку
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="gradient-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <h3 className="text-xl font-bold">UniAbroad</h3>
              </div>
              <p className="opacity-90">
                Ваш надёжный партнёр в поступлении в зарубежные университеты
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@uniabroad.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center opacity-90">
            <p>© 2024 UniAbroad. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
