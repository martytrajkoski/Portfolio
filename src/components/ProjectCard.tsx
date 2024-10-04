import { useRef, useEffect } from "react";

type Project = {
    id: number,
    title: string,
    skills: string[],
    url: string[],
    content?: string
}

type ProjectCardProps = {
    project: Project,
    closePopup: () => void;
}

export function ProjectCard({project, closePopup}: ProjectCardProps) {

    const popupRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          closePopup();
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [closePopup]);

    return (
        <div className="popup-overlay">
            <div className="popup-content" ref={popupRef}>
                <div className="popup-header">
                    <div className="project-title">
                        <h3>{project.title}</h3>
                        <small>{project.skills.join(", ")}</small>
                    </div>
                    <div onClick={closePopup}><i className="fa fa-times"></i></div>
                </div>
                <p>{project.content}</p>
                <div className="popup-buttons">
                    {project.url.map((url, index) => {
                        let label;
                        if (project.url.length === 1) {
                            label = "Github";
                            return (
                                <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                                    <button>{label}</button>
                                </a>
                            );

                        } else {
                            if (index === 0){
                                label = "Frontend";
                                return (
                                    <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                                        <button>{label}</button>
                                    </a>
                                );
                            } 
                            if (index === 1){
                                label = "Backend";
                                return (
                                    <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                                        <button>{label}</button>
                                    </a>
                                );
                            } 
                            if (index === 2) {
                                label = "Design";
                                return (
                                    <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                                        <button>{label}</button>
                                    </a>
                                );
                            }
                        }

                        return (
                            <a href={Object.values(url)[0]} target="_blank" rel="noopener noreferrer" key={index}>
                                <button>{label}</button>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}