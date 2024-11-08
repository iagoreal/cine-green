export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  if (import.meta.server) {
    const api = $fetch.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.apiSecret}`,
      },
    });
    return {
      provide: {
        api,
      },
    };
  }
});
