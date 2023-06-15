import Preview from "./components/Preview";
import React from "react";
import Header from "./components/Header";
import InputText from "./components/InputText";

function App() {
  const [userInfo, setUserInfo] = React.useState({
    name: 'Ansh Raiyani',
    description:'Full-Stack Developer',
    number: '9875059447',
    email:'anshraiyani13@gmail.com',
    country:'India'
  });

  return (
    <>
      <Header />
      <div className="wrapper">
        <InputText userInfo={userInfo} setUserInfo={setUserInfo} />
        <Preview userInfo={userInfo} />
      </div>
    </>
  );
}

export default App;
