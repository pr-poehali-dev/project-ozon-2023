import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const contacts = [
  { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00", href: "tel:+79990000000" },
  { icon: "Mail", label: "Email", value: "info@massage.ru", href: "mailto:info@massage.ru" },
  { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Примерная, д. 1", href: "#" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Вс: 9:00 – 21:00", href: null },
]

export default function Contacts() {
  const navigate = useNavigate()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-background text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
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
            Контакты
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {contacts.map((item) => (
            <motion.div
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="border border-white/10 p-5 flex gap-4 items-start hover:border-white/25 transition-colors duration-300"
            >
              <div className="mt-0.5 text-white/40">
                <Icon name={item.icon} size={20} />
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-wider uppercase mb-1">{item.label}</p>
                {item.href && item.href !== "#" ? (
                  <a href={item.href} className="text-white/90 hover:text-white transition-colors text-base">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white/90 text-base">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="border border-white/10 p-6"
        >
          <h2 className="font-serif text-xl tracking-widest font-light mb-6">Записаться на сеанс</h2>

          {sent ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-6"
            >
              <Icon name="CheckCircle" size={40} className="mx-auto mb-3 text-white/60" />
              <p className="text-white/80 text-lg font-serif">Заявка отправлена</p>
              <p className="text-white/40 text-sm mt-1">Мы свяжемся с вами в ближайшее время</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Телефон</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (999) 000-00-00"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 px-10 py-3 border border-white/30 text-white/90 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300"
              >
                Отправить заявку
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
