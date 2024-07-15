import { uploadPhoto } from '../../services/uploadPhoto'
import styles from './dialog.module.css'

const UploadDialog = ({ onClose, setInvalidate }) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const [file] = event.target.file.files
    const data = await uploadPhoto(file)
    console.log(data)
    setInvalidate((prev) => !prev)
    onClose()
  }
  return (
    <dialog className={styles.dialog}>
      <h2>Subir Imagen</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='file'
          name='file'
          id='file'
          accept='image/*'
          required
        />
        <button type='button' onClick={onClose}>Cerrar</button>
        <button className={styles.submit}>Enviar</button>
      </form>
    </dialog>
  )
}

export default UploadDialog
