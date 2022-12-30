import React, { FC, ChangeEvent, useState, useCallback } from "react";
import "./App.css";
import TodoTask from "./CommentList";

const Comment: FC = () => {
  const [name, setName] = useState<string>("");
  const [Comment, setComent] = useState<string>("");
  const [CommentList, setCommentList] = useState<IComment[]>([]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else {
      setComent(event.target.value);
    }
  };

  const addComment = useCallback((): void => {
    if (!name) {
      alert("Please enter ur name first");
    } else if (!Comment) {
      alert("Enter comment");
    } else {
      const newComment: IComment = { CommentName: name, Comment: Comment };
      setCommentList([...CommentList, newComment]);
      setName("");
      setComent("");
    }
  }, [name, Comment])

  const readed = (listNameToDelete: string): void => {
    setCommentList(
      CommentList.filter((task) => {
        return task.CommentName != listNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputlist">
          <textarea
            id="nama"
            placeholder="Name..."
            name="name"
            value={name}
            onChange={handleChange}
          />
          <h2>Comment</h2>
          <textarea
            id="koment"
            placeholder="Enter comment..."
            name="komen"
            value={Comment}
            onChange={handleChange}
          />
        </div>
        <button onClick={addComment} id="btn">
          Submit
        </button>
      </div>
      <div className="komenList">
        {CommentList.map((list: IComment, key: number) => {
          return <TodoTask key={key} list={list} clearComment={readed} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
