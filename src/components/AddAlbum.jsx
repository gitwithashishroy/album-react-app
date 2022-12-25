import React, { useEffect, useState } from "react";
import styles from "../styles/addalbum.module.css";

const AddAlbum = (props) => {
  const { addAlbum } = props;
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  const handleAddAlbum = async () => {
    if (title === "" || userId === "") {
      alert("pls fill all the details !");
    } else {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: title,
            userId: userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      addAlbum(data);
      alert("album added successfully");
      console.log("albums after add");
    }
  };

  return (
    <div className={styles.addAlbumContainer}>
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
            <td></td>
            <td>
              {" "}
              <button
                className={styles.albumAddButton}
                onClick={handleAddAlbum}
              >
                Add Album
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddAlbum;
