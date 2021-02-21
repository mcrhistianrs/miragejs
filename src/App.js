import React,{useState,useEffect} from 'react';
import { createServer } from 'miragejs';


let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

function App() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch("/api/users")
    .then((res) => res.json())
    .then((json) => {
      setUsers(json.users)
    })
    
  },[]);

  return (
    <>
      <h1>Hello World</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
