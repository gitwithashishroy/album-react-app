import React, { useState } from "react";
import styles from "../styles/albumcard.module.css";

const AlbumCard = (props) => {
  const { album, removeAlbum } = props;
  const id = album.id;
  const [editing, setEditing] = useState();
  const [title, setTitle] = useState(album.title);
  const [userId, setUserId] = useState(album.userId);

  const handleUpdate = async () => {
    const id = album.id;
    // e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        album.userId = json.userId;
        album.title = json.title;
        console.log(json);
        setEditing(false);
        alert("album updated successfully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteHabit = () => {
    const id = album.id;
    const res = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    removeAlbum(id);
  };

  return (
    <div className={styles.albumCard}>
      {editing && (
        <div className={styles.albumCardInput}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="userid">Userid</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="userid"
                    name="userid"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="title"> Title </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <button
                    className={styles.albumUpdateButton}
                    onClick={handleUpdate}
                  >
                    update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {!editing && (
        <>
          <div className={styles.albumCardTitle}>
            <span className={styles.cardId}>{`${album.id}`} </span>
            {" . "} <span className={styles.cardName}>{`${album.title}`} </span>
          </div>
          <div className={styles.albumActionName}>
            <button
              className={styles.albumEditButton}
              onClick={() => setEditing(true)}
            >
              edit
            </button>
            <button
              className={styles.albumDeleteButton}
              onClick={handleDeleteHabit}
            >
              delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AlbumCard;
