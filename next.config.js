  const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
  
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
    const env = {
      RESTURL_SPEAKERS: (() => {
        if (isDev) return 'http://localhost:4000/speakers'
        if (isProd) {
          return 'https://www.siliconvalley-codecamp.com/rest/speakers/ps'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      RESTURL_SESSIONS: (() => {
        if (isDev) return 'http://localhost:4000/sessions'
        if (isProd) return 'https://www.siliconvalley-codecamp.com/rest/sessions'
        if (isStaging) return 'http://localhost:11639'
        return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
    }
  
    // next.config.js object
    return {
      env,
    }
  }

  module.exports = ({
     eslint: {
  //     // Warning: This allows production builds to successfully complete even if
  //     // your project has ESLint errors.
       ignoreDuringBuilds: false,
     },
    
    
   // https://github.com/vercel/next.js/issues/21079
   // Remove this workaround whenever the issue is fixed
   images: {
    domains: ['assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
      
  },
  exportPathMap: async function (
   
    ) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/pages/login': { page: '/post', query: { title: 'login' } },
        '/pages/integrations': { page: '/post', query: { title: 'Portafolio' } },
        '/pages/services': { page: '/post', query: { title: 'Servicios' } },
      }
    },
  

   
    
   });
  
  

