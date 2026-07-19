import LoginForm from "./Login";
import Registration from "./Registration";
import { NavLink, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/Login-Form-Validation/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/Login-Form-Validation/registration"}>Registration</NavLink>
          </li> 
        </ul>
      </nav>
      <Routes>
        <Route path="/Login-Form-Validation/login" element={<LoginForm />}/>
        <Route path="/Login-Form-Validation/registration" element={<Registration />}/>
      </Routes>
    </div>
  );
}

export default App;
