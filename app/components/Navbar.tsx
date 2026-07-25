import {Link} from "react-router"
const Navbar: () => Element = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-graidient">RESUMID</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </div>
  )
}
export default Navbar
