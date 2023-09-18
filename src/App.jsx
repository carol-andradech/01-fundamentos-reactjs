import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti possimus, cupiditate cum quis iure facere rerum reprehenderit id repellendus aperiam atque dolores minus quos, molestiae consectetur magnam qui aliquid aut."
            author="Someone"
          />
        </main>
      </div>
    </div>
  );
}
export default App;
