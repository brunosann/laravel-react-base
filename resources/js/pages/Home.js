import React, { useEffect, useState } from "react";

const Home = () => {
  document.title = "Home";
  useEffect(() => {
    (async () => {
      const response = await fetch("http://127.0.0.1:8000/api/ping", {
        headers: {
          Authorization: "Bearer 3|rnZpkODbXRNonkJaXIafEjAPcgBTgmg8cDqNtODx",
        },
      });
      const responseJson = await response.json();
      console.log(responseJson);
    })();
  }, []);

  return (
    <main className="showEntry container">
      <h1 className="text-center">Lista de Tarefas</h1>
      <ul>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <li key={item}>Item {item}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
