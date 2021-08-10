import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { login } from "../components/login";

export function Index() {
  const { user, setUser } = useContext(UserContext);
  // const message = useContext(UserContext);


  return (
    <div>
       {/* <h2>{message}</h2> */}
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            // call logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
