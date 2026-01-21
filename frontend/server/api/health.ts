// frontend/server/api/health.ts
export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  return {
    databaseUrlExists: !!config.databaseUrl
  }
})
