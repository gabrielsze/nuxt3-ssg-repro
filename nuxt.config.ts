// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    families: {
      Poppins: [200, 300, 500, 600, 700],
      Manrope: [200, 300, 500, 600, 700],
    },
  },
  // devtools: { enabled: true }
  nitro: {
    debug: true,
    hooks: {
      async 'prerender:routes'(routes) {
        const allRoutes = [];

        // Generic pages routes | only required slug information
        const genericPages = [{ slug: 'post-1' }, { slug: 'post-2' }, { slug: 'post-3' }]
        if (genericPages) {
          const genericRoutes = genericPages.map((x) => {
            return `/posts/${x.slug}`;
          })
          allRoutes.push(...genericRoutes)
        }

        console.log("allRoutes: ", allRoutes);

        if (allRoutes.length) {
          for (const route of allRoutes) {
            routes.add(route)
          }
        }
      }
    }
  }
})
