// app/layout.js
import { Dancing_Script, Montserrat } from 'next/font/google';
import './globals.css';

// Configuramos la fuente cursiva romántica
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
});

// Configuramos una fuente moderna y legible para el resto
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});


export const metadata = {
  title: 'Para Tati ❤️',
  description: 'Una pregunta muy importante...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${dancingScript.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-pink-50 text-gray-800">{children}</body>
    </html>
  )
}