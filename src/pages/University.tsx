import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useParams, Link } from "react-router-dom";

const universityData = {
  name: "Shanghai University of Technology",
  city: "Шанхай",
  country: "Китай",
  image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
  rating: "#15 в Китае / #350 в мире",
  priceFrom: "¥28,000",
  hasGrants: true,
  grantUpTo: "100%",
  deadline: "15 июня 2026",
  languages: ["CN", "EN"],
  
  keyFacts: [
    { icon: "Star", label: "Рейтинг", value: "#15 в Китае" },
    { icon: "DollarSign", label: "Стоимость", value: "От ¥28,000/год" },
    { icon: "Award", label: "Гранты", value: "До 100%" },
    { icon: "Users", label: "Студентов", value: "25,000+" },
    { icon: "Globe", label: "Языки", value: "Китайский, Английский" },
    { icon: "Calendar", label: "Дедлайн", value: "15 июня 2026" }
  ],
  
  description: "Shanghai University of Technology — один из ведущих технических университетов Китая, основанный в 1954 году. Расположен в самом сердце международного финансового центра. Университет известен своими программами в области инженерии, IT и бизнеса.",
  
  cityInfo: "Шанхай — безопасный, современный мегаполис с отличной инфраструктурой. Идеален для студентов: метро работает до полуночи, множество кафе и коворкингов. Кампус университета находится в тихом районе в 30 минутах от центра.",
  
  gallery: [
    "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80"
  ],
  
  programs: [
    {
      category: "Языковые программы",
      items: [
        {
          name: "Интенсивный китайский язык",
          duration: "1 год",
          price: "¥18,000",
          format: "Платно",
          requirements: "Аттестат о среднем образовании",
          badge: "Мало мест"
        }
      ]
    },
    {
      category: "Бакалавриат",
      items: [
        {
          name: "Computer Science and Technology",
          duration: "4 года",
          price: "¥28,000",
          format: "Грант до 100%",
          requirements: "HSK 4 / IELTS 6.0, аттестат с баллом 4.0+"
        },
        {
          name: "International Business",
          duration: "4 года",
          price: "¥26,000",
          format: "Грант до 75%",
          requirements: "HSK 4 / IELTS 6.0, аттестат"
        }
      ]
    },
    {
      category: "Программы 1+3 / 1+4",
      items: [
        {
          name: "Подготовительный год + бакалавриат",
          duration: "5 лет",
          price: "¥25,000",
          format: "Грант до 50%",
          requirements: "Аттестат, без требований к языку",
          badge: "До дедлайна 30 дней"
        }
      ]
    }
  ],
  
  dormitory: {
    description: "Современное общежитие на территории кампуса. Комнаты на 2 человека с удобствами, Wi-Fi, кондиционер, горячая вода 24/7.",
    price: "¥1,200-1,800/месяц",
    features: ["Wi-Fi", "Кондиционер", "Прачечная", "Кухня", "Охрана 24/7"]
  },
  
  infrastructure: [
    "4 современные библиотеки",
    "Спортивный комплекс с бассейном",
    "Теннисные корты и футбольное поле",
    "Студенческий центр",
    "Кафетерии с разнообразной кухней",
    "Медицинский центр"
  ],
  
  testimonials: [
    {
      name: "Анна К.",
      program: "Computer Science, 2022",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      text: "Получила грант 100%! Сейчас работаю в IT-компании в Шанхае. Университет дал отличную базу и связи."
    },
    {
      name: "Дмитрий М.",
      program: "Business Administration, 2021",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      text: "HSK 5 за год обучения. Поступил в магистратуру Tsinghua University. Очень доволен выбором!"
    },
    {
      name: "Елена С.",
      program: "1+4 программа, 2020",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      text: "Приехала без знания языка. Сейчас свободно говорю на китайском, завела много друзей. Город безопасный!"
    }
  ],
  
  faq: [
    {
      question: "Какие требования к поступлению?",
      answer: "Для бакалавриата: аттестат о среднем образовании, HSK 4 (для программ на китайском) или IELTS 6.0 (для англоязычных). Для языковых программ — только аттестат."
    },
    {
      question: "Как получить грант?",
      answer: "Гранты присуждаются на основе академических достижений. Мы помогаем подготовить сильное портфолио и увеличить шансы на получение гранта до 100%."
    },
    {
      question: "Что с визой?",
      answer: "После зачисления университет выдаёт приглашение (JW202). С ним мы помогаем оформить студенческую визу X1. Процесс занимает 2-3 недели."
    },
    {
      question: "Можно ли поехать без знания языка?",
      answer: "Да! Для этого есть программы 1+3 и языковые курсы. Первый год изучаете китайский, затем поступаете на бакалавриат."
    },
    {
      question: "Сколько денег нужно на жизнь?",
      answer: "В Шанхае комфортный бюджет — ¥2,500-3,500/месяц (₽30,000-42,000). Включает общежитие, питание, транспорт и развлечения."
    },
    {
      question: "Что, если меня не зачислят?",
      answer: "У нас гарантия поступления. Если не поступите по нашей вине — вернём 100% оплаты. За 8 лет ни одного отказа!"
    }
  ]
};

const University = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <header className="gradient-primary py-4 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="GraduationCap" className="text-white" size={28} />
            <span className="text-xl font-bold text-white">UniAbroad</span>
          </Link>
          <Button variant="secondary" className="font-semibold">
            Получить консультацию
          </Button>
        </div>
      </header>

      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={universityData.image} 
          alt={universityData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{universityData.name}</h1>
            <p className="text-2xl flex items-center gap-2 mb-6">
              <Icon name="MapPin" size={24} />
              {universityData.city}, {universityData.country}
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg py-2 px-6">
                <Icon name="Award" size={20} className="mr-2" />
                Гранты до {universityData.grantUpTo}
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg py-2 px-6">
                Поступление под ключ
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg py-2 px-6">
                Дедлайн до {universityData.deadline}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Ключевые факты за 10 секунд</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {universityData.keyFacts.map((fact, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={fact.icon} size={28} className="text-white" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{fact.label}</p>
                  <p className="font-bold">{fact.value}</p>
                </div>
              ))}
            </div>
          </Card>
          
          <div className="flex gap-4 mt-6">
            <Button size="lg" className="gradient-primary text-white font-bold flex-1 md:flex-none hover:opacity-90">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Хочу в этот вуз!
            </Button>
            <Button size="lg" variant="outline" className="font-bold flex-1 md:flex-none">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Университет, кампус и город</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{universityData.description}</p>
              <p className="text-gray-700 text-lg leading-relaxed">{universityData.cityInfo}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {universityData.gallery.map((img, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Программы и цены</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Выберите программу обучения. Мы поможем с поступлением и получением гранта
          </p>
          
          <div className="space-y-8">
            {universityData.programs.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((program, progIndex) => (
                    <Card key={progIndex} className="p-6 hover:shadow-xl transition-all border-2 hover:border-purple-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold flex-1">{program.name}</h4>
                        {program.badge && (
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white ml-2">
                            {program.badge}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Icon name="Clock" size={18} className="text-purple-500" />
                          <span>Длительность: <strong>{program.duration}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Icon name="DollarSign" size={18} className="text-green-500" />
                          <span>Стоимость: <strong>{program.price}/год</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Icon name="Award" size={18} className="text-yellow-500" />
                          <span><strong>{program.format}</strong></span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-700">
                          <Icon name="FileCheck" size={18} className="text-blue-500 mt-1" />
                          <span>Требования: {program.requirements}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full gradient-primary text-white font-bold hover:opacity-90">
                        Подать заявку
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="font-bold">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию по программам
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Как мы помогаем поступить</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: "ClipboardList", title: "Диагностика и подбор программы", desc: "Анализ вашего профиля и выбор программ с максимальным шансом на грант" },
              { icon: "FileText", title: "Оформление документов", desc: "Подготовка, перевод и нотариальное заверение всех документов" },
              { icon: "Plane", title: "Визовая поддержка", desc: "Помощь в получении визы и прохождении всех формальностей" },
              { icon: "HeartHandshake", title: "Сопровождение после заселения", desc: "Помогаем адаптироваться: регистрация, SIM-карта, банк, транспорт" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size={36} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <Card className="gradient-primary p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">🎯 Гарантия поступления или возврат 100%</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              За 8 лет работы — 0 отказов. Мы знаем, как поступить в любой вуз. 
              Прозрачная оплата: платите только за результат.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Общежитие</h2>
              <p className="text-gray-700 text-lg mb-6">{universityData.dormitory.description}</p>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="DollarSign" size={24} className="text-green-500" />
                <p className="text-2xl font-bold">{universityData.dormitory.price}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {universityData.dormitory.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-base py-2 px-4">
                    <Icon name="Check" size={16} className="mr-2" />
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Инфраструктура</h2>
              <div className="space-y-3">
                {universityData.infrastructure.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={20} className="text-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Отзывы студентов</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Истории тех, кто уже учится</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {universityData.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all border-2 hover:border-purple-300">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.program}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Частые вопросы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Ответы на самые популярные вопросы</p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {universityData.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 md:p-12 border-2 border-purple-300 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
              Подобрать программу в {universityData.name.split(' ')[0]} за 15 минут
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Заполните форму — мы проанализируем ваш профиль и предложим оптимальную программу с максимальным грантом
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
                <input type="checkbox" id="consent-uni" className="mt-1" />
                <label htmlFor="consent-uni" className="text-sm text-gray-600">
                  Согласен на обработку персональных данных и получение информации об услугах
                </label>
              </div>
              
              <Button className="w-full gradient-primary text-white font-bold text-lg py-6 hover:opacity-90">
                Подобрать программу
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="gradient-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <h3 className="text-xl font-bold">UniAbroad</h3>
              </Link>
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

export default University;
