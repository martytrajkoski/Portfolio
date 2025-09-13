import { useRef, useEffect } from "react";

type Project = {
    id: number,
    title: string,
    skills: string[],
    url: {
        frontend?: string,
        backend?: string,
        design?: string,
        deployed?: string
    },
    content?: string
}

type ProjectCardProps = {
    project: Project,
    closePopup: () => void;
}

export function ProjectCard({ project, closePopup }: ProjectCardProps) {

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
                    {project.url.frontend && (
                        <a href={project.url.frontend} target="_blank" rel="noopener noreferrer">
                            <button>Frontend</button>
                        </a>
                    )}

                    {project.url.backend && (
                        <a href={project.url.backend} target="_blank" rel="noopener noreferrer">
                            <button>Backend</button>
                        </a>
                    )}

                    {project.url.design && (
                        <a href={project.url.design} target="_blank" rel="noopener noreferrer">
                            <button>Design</button>
                        </a>
                    )}

                    {project.url.deployed && (
                        <a href={project.url.deployed} target="_blank" rel="noopener noreferrer">
                            <button>Website</button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}