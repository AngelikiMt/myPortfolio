import '../components/Skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiDjango, SiFlask, SiExpress, SiMongodb, SiTableau, SiGithub, SiJavascript, SiMysql, SiPostman } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { BsFiletypeXml } from "react-icons/bs";
import { LuFileJson } from "react-icons/lu";
import { IoKey } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { FiTriangle } from "react-icons/fi";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>Skills</h2>
                            <p>With hands-on experience in both front-end and back-end development, I bring an adaptive and well-rounded skill set to every project I undertake. My proficiency with modern web technologies and development tools enables me to write clean, maintainable code and promote efficient collaboration across teams. With solid foundation in working with APIs, I seamlessly integrate dynamic content and optimize performance to ensure smooth functionality across all devices. Whether building responsive interfaces or architecting robust server-side logic, I approach each challenge with precision, creativity and excitement for problem-solving.</p>
                        </div>
                        <div className="skills-icons-txt">
                            <div className="skills-category">
                                <h3>Languages</h3>
                                <ul>
                                    <li><SiJavascript color="#F7DF1E" size={30} /> JavaScript</li>
                                    <li><FaJava color="#007396" size={30} /> Java</li>
                                    <li><FaPython color="#3776AB" size={30} /> Python</li>
                                </ul>
                            </div>
                            <div className="skills-category">
                                <h3>Backend</h3>
                                <ul>
                                    <li><SiDjango color="#588653ff" size={30} /> Django</li>
                                    <li><SiFlask color="#fff" size={30} /> Flask</li>
                                    <li><FaNodeJs color="#68A063" size={30} /> Node.js</li>
                                    <li><SiExpress color="#fff" size={30} /> Express.js</li>
                                </ul>
                            </div>
                            <div className="skills-category">
                                <h3>Frontend</h3>
                                <ul>
                                    <li><FaReact color="#61DBFB" size={30}/> React</li>
                                    <li><FaCss3Alt color="#1572B6" size={30} /> CSS</li>
                                    <li><FaHtml5 color="#E34F26" size={30} /> HTML</li>
                                    <li><FaBootstrap color="#7952B3" size={30} /> Bootstrap</li>
                                </ul>
                            </div>
                            <div className="skills-category">
                                <h3>Databases</h3>
                                <ul>
                                    <li><SiMysql color="#fff" size={30} /> SQL</li>
                                    <li><SiMongodb color="#47A248" size={30} /> MongoDB</li>
                                </ul>
                            </div>
                            <div className="skills-category">
                                <h3>APIs <br/> Data Formats</h3>
                                <ul>
                                    <li><CiCloudOn color="#fff" size={30} /> RESTful API</li>
                                    <li><IoKey  color="#fff" size={30} /> JWT Authentication</li>
                                    <li><LuFileJson  color="#fff" size={30} /> JSON</li>
                                    <li><BsFiletypeXml  color="#fff" size={30} /> XML</li>
                                </ul>
                            </div>
                            <div className="skills-category">
                                <h3>Tools</h3>
                                <ul>
                                    <li><FaGitAlt color="#F1502F" size={30} /> Git</li>
                                    <li><SiGithub color="#fff" size={30} /> GitHub</li>
                                    <li><SiPostman color="#FF6C37" size={30} /> Postman</li>
                                    <li><VscVscode color="#007ACC" size={30} /> VS Code</li>
                                </ul>
                            </div>
                            <div className="skills-category">
                                <h3>Visualization</h3>
                                <ul>
                                    <li><SiTableau color="#E97627" size={30} /> Tableau</li>
                                    <li><FiTriangle color="#f82e05ff" size={30} /> Rapid Miner</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;