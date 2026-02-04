import '../styles/header.css'
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          {'<Dev />'}
        </div>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
