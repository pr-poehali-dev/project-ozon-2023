import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-serif text-3xl md:text-4xl font-light text-white tracking-widest"
        >
          Искусство массажа
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-sm md:text-base font-light text-white/60 tracking-widest uppercase"
        >
          Расслабление · Восстановление · Гармония
        </motion.p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-6 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex gap-8 text-center">
            <div className="flex flex-col gap-1">
              <motion.a
                href="#"
                whileHover={{ scale: 1.06, opacity: 1 }}
                className="text-white/90 text-xl font-serif cursor-pointer hover:text-white transition-colors duration-300"
              >
                Фотогалерея
              </motion.a>
            </div>
            <div className="w-px bg-white/20" />
            <div className="flex flex-col gap-1">
              <span className="text-white/90 text-xl font-serif">Спортивный</span>
              <span className="text-white/50 text-xs tracking-wider uppercase">Восстановительный</span>
            </div>
            <div className="w-px bg-white/20" />
            <div className="flex flex-col gap-1">
              <span className="text-white/90 text-xl font-serif">Тайский</span>
              <span className="text-white/50 text-xs tracking-wider uppercase">Глубокий</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 px-10 py-3 border border-white/30 text-white/90 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300"
          >
            Записаться на сеанс
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="text-white/30 text-xs tracking-widest"
        >
          Потяните, чтобы исследовать галерею
        </motion.p>
      </div>
    </div>
  )
}