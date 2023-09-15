import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card';

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
      <div style={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
        <Card
          name={dentistaByid.name}
          username={dentistaByid.username}
          email={dentistaByid.email}
          phone={dentistaByid.phone}
          website={dentistaByid.website}
        />
      </div>
    </>
  );
};

export default Detail;
