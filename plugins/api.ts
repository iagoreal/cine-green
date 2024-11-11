export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: '/api',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${config.public.apiSecret}`,
    },
  });
  return {
    provide: {
      api,
    },
  };
});
