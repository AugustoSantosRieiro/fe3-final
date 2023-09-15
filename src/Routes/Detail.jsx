import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card';

const Detail = () => {
 const {id} = useParams()
  const DentistFetch = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const [resp, setResp] = useState([]);
  
    try {
      const getFetch = async () => {
        const { data } = await axios.get(url);
        setResp(data);
      };
      useEffect(() => {
        getFetch();
      }, []);
    } catch (error) {
    }
  
    return resp;
  };

 const dentistaByid= DentistFetch(id)
  return (
    <>
      <h1>Detalles del Dentista </h1>
     <div style={{display:'flex',justifyContent:'center',color:'black'}}>
     <Card 
      name={dentistaByid.name}
      username={dentistaByid.username}
      email={dentistaByid.email}
      phone={dentistaByid.phone}
      website={dentistaByid.website}
      />
     </div>
    </>
  )
}

export default Detail