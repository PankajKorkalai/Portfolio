// import '../styles/globals.css';

// // components
// import Layout from '../components/Layout';
// import Transition from '../components/Transition'

// // router
// import { useRouter } from 'next/router';

// // framer motion
// import { AnimatePresence, motion } from 'framer-motion';

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   return (
//     <Layout>
//       <AnimatePresence mode='wait'>
//         <motion.div key={router.route} className='h-full'>
//           <Transition />
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//     </Layout>
//   );
// }

// export default MyApp;


import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// React
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Disable right-click across the entire app
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
