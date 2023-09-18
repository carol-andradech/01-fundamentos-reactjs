import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/78247893?v=4"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Carol Andrade</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="18 de setembro, às 13:29" dateTime="2023-09-18 13:29:00">
          Publicado a 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Olá</p>
        <p>Acabei de subir um novo projeto no meu GitHub.</p>
        <p>
          <a href="https://github.com/carol-andradech">Link</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#github</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className="comment-list">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
