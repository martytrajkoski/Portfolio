type ProjectProps = {
    title: string,
    skills: string[]
}

type Color = string;

export function Project({title, skills}: ProjectProps){

    const colors: Color[] = ['#EDD3FC', '#B3E4F8', '#FBE6A7', '#FFDBEB', '#BAFEE5', '#FCE9A8', "CCBAFE", "FDE6F7", "D8F1FD"];

    function getRandomGradient(): string {
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    if (color1 !== color2) {
        return `linear-gradient(to bottom right, ${color1}, ${color2})`;
    } else {
        return getRandomGradient();
    }
    }

    return(
            <div className="project-card" style={{ background: getRandomGradient() }}>
                <div className="links">
                    <i className="fa fa-brands fa-github"></i>
                </div>
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <ul>
                    {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

    )
}