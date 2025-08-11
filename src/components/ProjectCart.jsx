import '../components/Projects.css'

const ProjectCart = ({ title, description, imgUrl }) => {
    return (
        <div className="proj-imgbx">
            <img src={imgUrl} alt="Project Image" />
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default ProjectCart;