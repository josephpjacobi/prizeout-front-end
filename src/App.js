import { useState } from "react";
import NavBar from "./components/nav-bar/nav-bar";
import DisplayBalanceBar from "./components/display-balance-bar/display-balance";
import DisplayPage from "./components/display-page/display-page";
import UserForm from "./components/user-form/user-form";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <NavBar />
      {user.balance && <DisplayBalanceBar balance={user.balance} />}
      {user.isValid && user.id ? (
        <DisplayPage user={user} setUser={setUser} />
      ) : (
        <UserForm setUser={setUser} />
      )}
    </div>
  );
}

export default App;
