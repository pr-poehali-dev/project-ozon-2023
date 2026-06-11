import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const photos = [
  "https://cdn.poehali.dev/projects/aff61de3-2355-4c86-875f-c2b92d34a3c4/files/4b23a9c7-1422-46b7-9748-c1239d61df9c.jpg",
  "https://cdn.poehali.dev/projects/aff61de3-2355-4c86-875f-c2b92d34a3c4/files/e1ad5fbd-1d05-4550-bd9e-e56e1a1c7faf.jpg",
  "https://cdn.poehali.dev/projects/aff61de3-2355-4c86-875f-c2b92d34a3c4/files/e1670589-53f4-4c20-bf04-98d452b2900b.jpg",
  "https://cdn.poehali.dev/projects/aff61de3-2355-4c86-875f-c2b92d34a3c4/files/c2458b1d-75dc-44fa-8986-8990a08eaa37.jpg",
  "https://cdn.poehali.dev/projects/aff61de3-2355-4c86-875f-c2b92d34a3c4/files/2b49daa8-780c-4a21-85be-9b8c13292aee.jpg",
  "https://cdn.poehali.dev/projects/aff61de3-2355-4c86-875f-c2b92d34a3c4/files/a3e86526-f61f-45d5-ab27-fe93e76d67fd.jpg",
]

export default function Gallery() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
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
            Фотогалерея
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {photos.map((src, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden cursor-pointer group relative aspect-[3/4]"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Фото ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
          >
            <Icon name="X" size={28} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selected}
            alt="Просмотр"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  )
}