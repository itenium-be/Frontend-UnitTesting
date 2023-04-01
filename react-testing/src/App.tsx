import { useState } from "react";
import { AppFormFactory, Exercises } from "./components/AppFormFactory";


export function App() {
  const [page, setPage] = useState<Exercises>('home');

  return (
    <div className="App">
      <Header setPage={setPage} />
      <div className="container" style={{paddingTop: 36, paddingBottom: 36}}>
        <div className="row">
          <AppFormFactory page={page} />
        </div>
      </div>
    </div>
  );
}


type HeaderProps = {
  setPage: (page: Exercises) => void;
}

function Header({setPage}: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => setPage('home')}>
          <img src="/favicon.png" style={{marginRight: 18, width: 24}} alt="itenium logo" />
          React Testing
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" onClick={() => setPage('sample-card')}>Basic Card</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
