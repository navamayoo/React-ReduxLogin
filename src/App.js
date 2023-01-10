import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log("users", users);
  console.log("user", user);
   console.log("XXXX",users.user);

  const logout = () => {
    dispatch({
      type: "Logout",
    });
  };

  return (
    <div className="App">
      <>
        {products.map((product) => (
          <div key={product.id}>
            {product.name} -{product.price}
          </div>
        ))}
        <p>************************************</p>
        {users.map((user) => (
          <div key={user.id}>
            {user.name} -- {user.username}
          </div>
        ))}

        <Registration />
        {user ? (
          <input type="button" value="Logout" onClick={logout} />
         
        )  : (
          <Login />
        )}
      </>
    </div>
  );
}

export default App;
