import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";
import Login from "./Components/Login";
// import { useStateValue } from "./StateProvider";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const handleLogin = (user) => {
    setUser([user]);
  };
  return (
    <div className="app">
      {user.length === 0 ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {" "}
          <Header user={user[0]} />
          <div className="app__body">
            <Sidebar user={user[0]} />
            <Feed user={user[0]} />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
