import UserGreeting from "./UserGreeting";

function App() {

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Edwin"/>
      <UserGreeting isLoggedIn={true}/>
    </>
  );
}

export default App
