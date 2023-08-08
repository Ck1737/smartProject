import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './uservents.module.css';

  const AddVent = () => {
  const [ventData, setventData] = useState([]);
  const [name, setName] = useState('');
  const [deviceID, setdeviceID] = useState('');


  const handleSubmit = async (e) => {
  e.preventDefault();  
          
    try {
      const response = await fetch('http://localhost:4000/vents', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, deviceID }),
      });
  
      if (response.ok) {
        // Vent added successfully
        console.log('Vent added to the database');
        // Reset the form fields
        setName('');
        setdeviceID('');
       
      } else {
        // Error adding the vent
        console.error('Error adding the vent');
      }
    } catch (error) {
      console.error('An error occurred while adding the vent', error);
    }
  };  


 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/vents/${id}`);
      const updatedVents = ventData.filter((vent) => vent._id !== id);
      setventData(updatedVents);
    } catch (error) {
      console.error('Error deleting vent:', error);
    }
  };
  

  //View vents
  useEffect(() => {
    const fetchVentData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/vents');
        const data = response.data;
        setventData(data);
      } catch (error) {
        console.error('Error fetching vent data:', error);
      }
    };

    fetchVentData(); 

  }, []);
  
  //HTML 
  return (    
    <div>
      {/* ... (existing navigation code) */}
      <nav className={styles.siteNavigation}>   
         <div className={styles.logo}>
           <Link href="/">
               <button className={styles.logoButton}>Smart Vents</button>  
           </Link>     
         </div>
         <div className={styles.menu}>
         <Link href="/login">
         <p className={styles.button}> Login </p>
             </Link>
             <Link href="/signup">
             <p className={styles.button}> Sign Up </p>
             </Link>
             <Link href="/contact">
             <p className={styles.button}> Contact Us </p>
             </Link>
             <Link href="/about">
             <p className={styles.button}> About Us </p>
             </Link>
         </div>
       </nav>
      {/* displaying the building data */}
      <h1>Vent Data</h1>
      <table className={styles.table1}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Device ID</th>
           
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {ventData.map((vent) => (
            <tr key={vent._id}>
              <td>{vent.name}</td>
            
              <td>
                <p>
                  <button onClick={() => handleDelete(vent._id)}>
                    Delete Building
                  </button>
                </p>
                <p>
                  <Link href={`/uservents/${vent._id}`}>
                    View Rooms
                  </Link>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Vent Form */}
      <h1>Add Vent</h1>
      <form onSubmit={handleSubmit}>

<label>
  Name:
  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
</label>
<br />
<label>
  Device ID:
  <input type="number" value={deviceID} onChange={(e) => setdeviceID(e.target.value)} required />
</label>
<br />
  
<br />
<button type="submit">Add Vent </button>
</form>  
    </div>
  );
};

export default AddVent;
