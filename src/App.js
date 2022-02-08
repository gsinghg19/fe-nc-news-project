import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ArticlesList from "./components/ArticleList.jsx";
import TopicList from "./components/TopicList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage.jsx";
import SingleArticle from "./components/SingleArticle";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Userlogin from "./components/Userlogin";

import Counter from "./components/Counter";
import CommentList from "./components/CommentsList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/topics/" element={<TopicList />} />
          <Route path="/articles/" element={<ArticlesList />} />
          <Route path="/users/:username" element={<Homepage />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics/:slug" element={<ArticlesByTopic />} />

          <Route
            path="/articles/:article_id/comments"
            element={<CommentList />}
          />
          <Route
            path="/articles/:article_id/comments/votes"
            element={<Counter />}
          />
          <Route path="/users/" element={<Userlogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
