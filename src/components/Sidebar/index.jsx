import styles from './Sidebar.module.css'

export function Sidebar () {
  return (
    <aside className ={styles.sidebar}>
      <img className ={styles.cover} src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>

      <div className={styles.profile}> 
        <strong> Diego Fernandes </strong>
        <span> Web Developer </span>
      </div>

      <footer>
        <a href="#">
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  )
}