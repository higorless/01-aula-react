import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/higorless.png',
      name: 'Higor Fernandes',
      role: 'CTO DogmaStudios'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galeraa'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Reutnr, evento da rocket setConstantValue'},
      {type: 'link', content: 'higor.desing/legal'},
    ],
    publishedAt: new Date('2024-01-05 22:00')
  }, 

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/higorless.png',
      name: 'Fabio Gonzales',
      role: 'CTO DogmaStudios'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galeraa'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Reutnr, evento da rocket setConstantValue'},
      {type: 'link', content: 'fabio.desing/legal'},
    ],
    publishedAt: new Date('2024-01-08 22:00')
  }
]

export function App() {
  return (
    <div>
      <Header/> 

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id.toString()}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}




