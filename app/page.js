'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import confetti from 'canvas-confetti';

export default function SanValentin() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);

  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 150 - 75;

    setNoPos({ x, y });
    setNoScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleYes = () => {
    setAccepted(true);

    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);

      confetti({
        particleCount: 40,
        spread: 360,
        startVelocity: 30,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  // 💕 VISTA FINAL
  if (accepted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 p-6 overflow-hidden">

        {/* 💗 Corazones flotando suaves */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-pulse absolute top-10 left-20 text-pink-300 text-2xl">💗</div>
          <div className="animate-bounce absolute bottom-20 right-24 text-rose-300 text-xl">💕</div>
          <div className="animate-pulse absolute top-32 right-32 text-pink-200 text-lg">🤍</div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-white/60"
        >
          {/* 💫 Título con glow */}
          <h1
            className="font-dancing text-4xl text-rose-600 mb-6"
            style={{ textShadow: "0px 4px 15px rgba(244,114,182,0.4)" }}
          >
            ¡Yo sabía que sí :p! tqm amorshita 🤍
          </h1>

          {/* 🌸 Marco delicado premium */}
          <div className="flex justify-center my-8">
            <div className="p-1.5 bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 rounded-3xl shadow-xl">

              <div className="bg-white p-3 rounded-2xl">

                <Image
                  src="/foto-juntos.jpeg"
                  alt="Nosotros"
                  width={250}
                  height={330}
                  className="rounded-xl object-cover shadow-md"
                  priority
                />

              </div>
            </div>
          </div>

          {/* 💌 Texto con jerarquía emocional */}
          <p className="font-montserrat text-gray-700 text-lg leading-relaxed">
            <span className="block">Gracias por ser tan tierna conmigo 🤍</span>

            <span className="block mt-3">
              Prometo darte todo el amor de mi corazón para la medica mas estudiosa y hermosa del mundo :3 
            </span>

            <span className="block mt-3 font-semibold text-rose-500">
              💕💕💕💕💕💕💕💕💕💕💕💕
            </span>
          </p>

          {/* 🌷 Detalle pequeño súper íntimo */}
          <p className="mt-6 text-xs text-gray-400 font-montserrat">
            Desde el día que nos conocimos todo es muy increible tanto como tu........ Me gustas mucho🤍
          </p>

        </motion.div>
      </div>
    );
  }

  // 🌸 VISTA PRINCIPAL
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-red-100 p-6 text-center">

      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src="/minion-minion-loves.gif"
        alt="Minion enamorado"
        className="w-56 h-56 object-cover rounded-2xl shadow-lg mb-8"
      />

      <h2 className="font-dancing text-4xl md:text-5xl text-rose-600 leading-tight mb-10">
        Tati, mi amoooooooor…  
        <br />
        ¿Quieres ser mi San Valentín? :3
      </h2>

      <div className="relative flex items-center justify-center gap-8 h-16">

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleYes}
          className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-4 text-white font-bold shadow-xl"
        >
          Ti :D 💕
        </motion.button>

        <motion.button
          onMouseEnter={moveNo}
          onClick={moveNo}
          animate={{ x: noPos.x, y: noPos.y, scale: noScale }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="absolute rounded-full bg-gray-200 px-6 py-3 text-gray-600 shadow-md"
        >
          No...
        </motion.button>

      </div>

      <p className="mt-8 font-dancing text-sm text-rose-500">
        Hecho con amor para mi niña la más tierna y preciosa del mundo 🤍
      </p>

    </div>
  );
}
