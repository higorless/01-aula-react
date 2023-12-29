import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header/> 

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author ="Matheus" content= "Esse é o conteúdo do meu blabla"/>
          <Post author ="Julia" content= "Esse é meu conteúdo legal"/>
        </main>
      </div>
    </div>
  )
}




