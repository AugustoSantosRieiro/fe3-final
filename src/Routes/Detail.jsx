import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [dentistaByid, setDentistaById] = useState({});
  
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue exitosa');
        }
        const data = await response.json();
        setDentistaById(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <h1>Detalles del Dentista</h1>
      <ul>
        <li><strong>Nombre:</strong> {dentistaByid.name}</li>
        <li><strong>Nombre de usuario:</strong> {dentistaByid.username}</li>
        <li><strong>Correo electrónico:</strong> {dentistaByid.email}</li>
        <li><strong>Teléfono:</strong> {dentistaByid.phone}</li>
        <li><strong>Sitio web:</strong> {dentistaByid.website}</li>
      </ul>
    </>
  );
};

export default Detail;
