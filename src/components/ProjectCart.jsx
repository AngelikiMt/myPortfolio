import '../components/Projects.css'

const ProjectCart = ({ title, description, imgUrl, gitHubUrl }) => {
    return (
        <div className="proj-imgbx">
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer"><img src={imgUrl} alt="Project Image" /></a>
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default ProjectCart;