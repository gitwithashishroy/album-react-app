import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import styles from "../styles/home.module.css";
import AddAlbum from "./AddAlbum";

const Home = () => {
  let [data, setData] = useState([]);
  const [addingAlbum, setAddingAlbum] = useState(false);

  useEffect(() => {
    fetchAlbum();
  }, []);

  const fetchAlbum = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  const removeAlbum = async (id) => {
    const newList = data.filter((album) => album.id !== id);
     setData(newList);
     setTimeout(()=>{
      alert('album deleted successfully !')
     })
  };

  
  const handleAddingAlbum = ()=>{
    setAddingAlbum(true) ; 
  }

  const addAlbum = (obj) => {
    data = [...data, obj ];
    setData(data);
    setAddingAlbum(false) ; 
  };

  return (
    <div className={styles.container}>
      {addingAlbum && <AddAlbum addAlbum={addAlbum} />}

      {!addingAlbum && (
        <div className={styles.addAlbumButton}>
          <button onClick={handleAddingAlbum}>Click Here To Add New Album </button>
        </div>
      )}

      <div className={styles.albumContainer}>
        {data.map((album) => (
          <AlbumCard album={album} key={album.id} removeAlbum={removeAlbum} />
        ))}
      </div>
    </div>
  );
};

export default Home;
