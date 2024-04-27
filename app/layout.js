import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shahzaib  - Software Developer',
  description: 'This is the portfolio of Shahzaib Manzoor. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
  image: "https://res.cloudinary.com/dy9nnyeyj/image/upload/v1714230606/d025aa05-39e5-496f-90a1-1645d5af2d9f_1_qv5zrq.jpg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
