import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}> 
          <img className={styles.avatar} src="https://github.com/higorless.png"></img>
          <div className={styles.authorInfo}>
            <strong>Higor Gomes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 8:13" dateTime="">Publicado </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galeraa</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Reutnr, evento da 
        rocket seat</p>

        <p> higor.desing/legal</p>

        <p> #novoprojeto </p>
      </div>
    </article>
  )
}