import styles from "./Navigation.module.css"
const Navigation = () => {
  console.log(styles);
  return (
    
    <div>
      <nav className={`${styles.Navigation} contaner`}>
        <div className="logo">
            <img src="/images/logo.png" alt="logo" width={100} />
        </div>
        <div className="naviga">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
