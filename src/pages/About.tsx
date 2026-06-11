import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const skills = [
  { name: "Классический массаж", years: "8 лет" },
  { name: "Спортивный массаж", years: "6 лет" },
  { name: "Тайский массаж", years: "5 лет" },
  { name: "Лимфодренажный массаж", years: "4 года" },
  { name: "Антицеллюлитный массаж", years: "6 лет" },
]

const certificates = [
  "Диплом массажиста, Медицинский колледж №1, Москва",
  "Курс тайского массажа, Школа традиционной медицины Таиланда",
  "Спортивный массаж, Российская академия спорта",
  "Лимфодренажные техники, Институт косметологии",
]

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm tracking-wider uppercase"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>
          <div className="w-px h-4 bg-white/20" />
          <h1 className="font-serif text-2xl md:text-3xl tracking-widest font-light">
            Обо мне
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="aspect-[3/4] overflow-hidden mb-6">
              <img
                src="https://cdn.poehali.dev/projects/aff61de3-2355-4c86-875f-c2b92d34a3c4/files/88359ab8-8dc4-428f-aad2-ff9fa6edd295.jpg"
                alt="Мастер массажа"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <p className="font-serif text-3xl text-white/90">8+</p>
                <p className="text-white/40 text-xs tracking-wider uppercase mt-1">лет опыта</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-serif text-3xl text-white/90">500+</p>
                <p className="text-white/40 text-xs tracking-wider uppercase mt-1">клиентов</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-serif text-3xl text-white/90">5</p>
                <p className="text-white/40 text-xs tracking-wider uppercase mt-1">техник</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="font-serif text-2xl font-light mb-1">Анна Соколова</h2>
              <p className="text-white/40 text-sm tracking-wider uppercase">Сертифицированный мастер массажа</p>
            </div>

            <p className="text-white/70 leading-relaxed">
              Более 8 лет я помогаю людям обрести гармонию тела и духа. Каждый сеанс — это индивидуальный подход: я работаю с вашим телом внимательно, чутко реагируя на его потребности.
            </p>
            <p className="text-white/70 leading-relaxed">
              Моя философия — массаж это не просто процедура, это искусство восстановления. Я постоянно совершенствую мастерство, изучая новые техники со всего мира.
            </p>

            <div>
              <p className="text-white/40 text-xs tracking-wider uppercase mb-4">Специализации</p>
              <div className="flex flex-col gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex justify-between items-center border-b border-white/10 pb-3"
                  >
                    <span className="text-white/80 text-sm">{skill.name}</span>
                    <span className="text-white/30 text-xs tracking-wider">{skill.years}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="border border-white/10 p-6"
        >
          <p className="text-white/40 text-xs tracking-wider uppercase mb-5">Образование и сертификаты</p>
          <div className="flex flex-col gap-3">
            {certificates.map((cert, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Icon name="Award" size={16} className="text-white/30 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <motion.button
            onClick={() => navigate("/contacts")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-3 border border-white/30 text-white/90 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300"
          >
            Записаться на сеанс
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
