function Navigation(props){
    return(
        <nav className="navbar navbar-dark bg-dark">
          <a href="." className="text-white">
            {props.title}
          </a>
        </nav>
    )
}

export default Navigation;