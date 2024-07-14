const URI = import.meta.env.VITE_URI_SERVER

export const getCategories = async () => {
  const response = await fetch(`${URI}/categories`)
  const data = await response.json()
  return data
}
