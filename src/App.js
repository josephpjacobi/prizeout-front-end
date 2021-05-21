import { useEffect, useState } from "react";
import NavBar from "./components/nav-bar/nav-bar";
import DisplayBalanceBar from "./components/display-balance-bar/display-balance";
import DisplayPurchases from "./components/display-purchases/display-purchases";
import DisplayPage from "./components/display-page/display-page";
import UserForm from "./components/user-form/user-form";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [displayPurchases, setDisplayPurchases] = useState(true)

  return (
    <div className="App">
      <NavBar />
      {user.balance && <DisplayBalanceBar balance={user.balance} />}
      {user.isValid && user.id ? (
          displayPurchases ? 
          <DisplayPurchases user={{user_id: user.id}}/>
          :
        <DisplayPage user={user} />
      ) : (
        <UserForm setUser={setUser} />
      )}
    </div>
  );
}

export default App;
