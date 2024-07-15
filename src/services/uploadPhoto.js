const URI = import.meta.env.VITE_URI_SERVER

export const uploadPhoto = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const response = await fetch(`${URI}/upload`, {
    method: 'POST',
    body: formData
  })
  const data = await response.json()
  return data
}
