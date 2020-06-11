import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [utilisateur, setUtilisateur] = useState([]);
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

 
  const fetchData = () => {
    axios
      .get(`http://localhost:3000/api/Utilisateurs`)
      .then(res => setUtilisateur(res.data))
      

  
      .catch((err) => console.error(err));
  };
 useEffect(() => {
    fetchData();
  }, []);

  const queryData = (e) => {
    // e.preventDefault(e);
    axios.post(`http://localhost:3000/api/Utilisateurs`, user).then(fetchData());
  };

  const modifData = (e) => {
    // e.preventDefault(e);
    axios.put(`http://localhost:3000/api/Utilisateurs/:name`, user).then(fetchData());
  };

  const suppData = (e) => {
    // e.preventDefault(e);
    axios.put(`http://localhost:3000/api/Utilisateurs/:name`, user).then(fetchData());
  };

  return (
    <>
      <div>
        {utilisateur.map((e, id) => {
          return (
            <li key={id}>
              {e.nom}
              {e.prenom}
              {e.email}
            </li>
          );
        })}
        <h3>Ajout d'un utilisateur</h3>
        <form onSubmit={queryData}>
          <input
            name="Nom"
            value={user.nom}
            required
            type="text"
            onChange={(e) => setUser({ ...user, nom: e.target.value })}
          />
          <input
            name="Prénom"
            value={user.prenom}
            required
            type="text"
            onChange={(e) => setUser({ ...user, prenom: e.target.value })}
          />
          <input
            name="E-mail"
            value={user.email}
            required
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        
        <button type="submit">Ajouter un utilisateur</button></form>

​       <h3>Modification d'un utilisateur</h3>
        <form onSubmit={modifData}>
          <input
            name="Nom"
            value={user.nom}
            required
            type="text"
            onChange={(e) => setUser({ ...user, nom: e.target.value })}
          />
          <input
            name="Prénom"
            value={user.prenom}
            required
            type="text"
            onChange={(e) => setUser({ ...user, prenom: e.target.value })}
          />
          <input
            name="E-mail"
            value={user.email}
            required
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button type="submit">Modifier un utilisateur</button></form>

        ​<h3>Supprimer un utilisateur</h3>
        <form onSubmit={suppData}>
          <input
            name="Nom"
            value={user.nom}
            required
            type="text"
            onChange={(e) => setUser({ ...user, nom: e.target.value })}
          />
          <input
            name="Prénom"
            value={user.prenom}
            required
            type="text"
            onChange={(e) => setUser({ ...user, prenom: e.target.value })}
          />
          <input
            name="E-mail"
            value={user.email}
            required
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        
        <button type="submit">Supprimer un utilisateur</button></form>
        </div>
    </>
  );
};

export default App;