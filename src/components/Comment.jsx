import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/78247893?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className="{styles.authorAndTime">
              <strong>Carol Andrade</strong>
              <time
                title="18 de setembro, às 13:29"
                dateTime="2023-09-18 13:29:00"
              >
                Cerca de 1hr atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns.</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
