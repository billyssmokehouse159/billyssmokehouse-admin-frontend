export const apiUrl =
  import.meta.env.VITE_ENV === "dev"
    ? import.meta.env.VITE_DEV_SMOKEHOUSE_ADMIN_API_URL
    : import.meta.env.VITE_ENV === "staging"
    ? import.meta.env.VITE_STAGING_SMOKEHOUSE_ADMIN_API_URL
    : import.meta.env.VITE_SMOKEHOUSE_ADMIN_API_URL;