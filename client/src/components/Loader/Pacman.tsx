import styles from './Pacman.module.css'

function Pacman() {
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center">
        <div className={`${styles.PacMan}`} />
      </div>
    </div>
  )
}

export default Pacman
