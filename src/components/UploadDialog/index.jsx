import styles from './dialog.module.css'

const UploadDialog = ({ onClose }) => {
  return (
    <dialog className={styles.dialog}>
      <h2>Subir Imagen</h2>
      <form action='' className={styles.form}>
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
