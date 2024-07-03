import { useEffect, useState } from "react";
import "./App.css";
import useCRUD from "./hooks/useCRUD";
import UserCard from "./components/UserCard";
import Userform from "./components/Userform";

// first_name, last_name, email, password, birthday

function App() {
  const [users, getUsers, createUser, deleteUser, updateUser] = useCRUD();
  const [update, setUpdate] = useState();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    getUsers("/users");
  }, []);

  /*  console.log(users); */

  const handleForm = () => {
    setIsShow(true);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>CRUD Users</h1>
        <button className="app__btn" onClick={handleForm}>
          Create User
        </button>
      </div>

      <Userform
        createUser={createUser}
        update={update}
        updateUser={updateUser}
        setUpdate={setUpdate}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <div className="app__container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdate={setUpdate}
            setIsShow={setIsShow}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
