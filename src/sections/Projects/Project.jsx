import styles from './ProjectsStyles.module.css';
import food from '../../assets/food delivery.png';
import chat from '../../assets/chat.png';
import gemini from '../../assets/gemini.png'
import joystick from '../../assets/joystick.png'
import ProjectCard from '../../common/ProjectCard';


function Project () {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={food} link="https://github.com/Aman9889kaushal/Food-Del/tree/my-new-branch" h3="Food" p="Food Delivery App"/>
            <ProjectCard src={chat} link="https://github.com/Aman9889kaushal/Chat-app/tree/my-new-branch" h3="Web Chatty" p="Chat Application"/>
            <ProjectCard src={gemini} link="https://github.com/Aman9889kaushal/Gemini-app" h3="prompt" p="Gemini API"/>
            <ProjectCard src={joystick} link="https://github.com/Aman9889kaushal/Memory_Game" h3="Game" p="Memory Game"/>
        </div>
    </section>
  )
}

export default Project
