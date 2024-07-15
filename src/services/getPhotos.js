const URI = import.meta.env.VITE_URI_SERVER

export const getPhotos = async (category) => {
  const response = await fetch(`${URI}/gallery`)
  const data = await response.json()
    .then(data => data
      .map(d => ({
        ...d,
        url: `${URI}/uploads/${d.filename}`
      }))
      .filter(d => category ? d.classification === category : true)
    )
  console.log(data)
  return data
}
