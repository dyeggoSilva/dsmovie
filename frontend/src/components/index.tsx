import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import "./Navbar/style.css"
function Navbar(){
    return (
    <header>
      <nav className= "container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href= "https://github.com/dyeggoSilva">
            <div className="dsmovie-contact-container">
              <GithubIcon/>
              <p className='dsmove-contact-link'>/dyeggoSilva</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}
export default Navbar;