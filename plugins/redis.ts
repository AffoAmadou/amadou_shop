import { Redis } from '@upstash/redis/cloudflare'
export default defineNuxtPlugin(nuxtApp => {


  const redisClient = new Redis({
    url: 'https://fair-finch-35340.upstash.io',
    token: 'AYoMACQgYTY5YmM2NWQtZjdiNC00MmJjLTkwZmEtYTc4OGUxYmM5OWJkMGM2MzU1YmMyM2NmNGY4YWIyZjlkZTBkMWJjOWZjOWU=',
  })
     
  return {
    provide: {
      redis: redisClient as Redis
    }
  }
})

