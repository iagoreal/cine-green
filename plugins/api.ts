export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const createApiInstance = (baseURL?: string) => {
    return $fetch.create({
      baseURL: baseURL ?? '/api',
      params: { language: 'pt-br' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.public.apiSecret}`,
      },
    });
  };
  return {
    provide: {
      createApiInstance,
    },
  };
});
