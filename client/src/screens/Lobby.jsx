import React, { useState, useCallback } from 'react'



const Lobby = () => {
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');
  const handleSubmitForm = useCallback((e)=>{
    e.preventDefault();
    
  })

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email ID</label>
        <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <label htmlFor="room">Room Code</label>
        <input type="text" id='room' value={room} onChange={e => setRoom(e.target.value)} />
        <br />
        <button>Join</button>
      </form>
    </div>
  )
}

export default Lobby
