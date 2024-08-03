import "../styles/clientpage.css";
import Fl from "../components/Fl"
export default function ClientPage() {

  const arr=[{name:"n1",email:"n1@gmail.com",skills:"React,Express,Nodejs"},{name:"n2",email:"n2@gmail.com",skills:"React,Express,Nodejs"}];
  return (
    <div>
    <div className="body">
      <header>
        <div className="container1">
          <nav>
            <ul>
            <div className="leftel">
            <h4>Hello Neha</h4>
            </div>
            <div className="container2">
              <li>
                <a href="ClientPage">Dashboard</a>
              </li>
              <li>
                <a href="Login">Projects</a>
              </li>
              <li>
                <a href="Signup">Freelancers</a>
              </li>
              <li>
                <a href="#contact">Settings</a>
              </li>
              <li>
                <a href="RegisterFreelancer">Register as Freelancer</a>
              </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <div className="fl">
        <h2>Freelancers</h2>
      </div>
        <div className="cards">
          {arr.map((item) => (
            <div className="card" key={item.name}>
            <Fl name={item.name} email={item.email} skills={item.skills}/>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
