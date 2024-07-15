import styles from './dialog.module.css'

const UploadDialog = () => {
  return (
    <dialog open className={styles.dialog}>
      <h2>Subir Imagen</h2>
      <form action='' className={styles.form}>
        <input
          type='file'
          name='file'
          id='file'
          required
        />
        <button type='button'>Cerrar</button>
        <button className={styles.submit}>Enviar</button>
      </form>
    </dialog>
  )
}

export default UploadDialog
