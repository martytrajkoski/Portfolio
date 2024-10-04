import { Social } from "./Social"

export function Socials(){

    const socials = [
        {id: 1, icon: 'fa fa-brand fa-github', media: 'Github', url: 'https://github.com/martytrajkoski'},
        {id: 2, icon: 'fa fa-brand fa-linkedin', media: 'LinkedIn', url: 'https://www.linkedin.com/in/marty-trajkoski-13831520b/'},
        {id: 3, icon: 'fa fa-brand fa-instagram', media: 'Instagram', url: 'https://www.instagram.com/djmartytrajkoski/'},
        {id: 4, icon: 'fa fa-brand fa-camera', media: 'VSCO', url: 'https://vsco.co/martytrajkoski/gallery'},
    ]

    return (
        <div className="socials">
            <h4>On The Web -</h4>
            <h2>More of my works</h2>
            <div className="social">
                {socials.map((social)=>(
                    <Social key={social.id} icon={social.icon} media={social.media} url={social.url}/>
                ))}
            </div>
        </div>
    )
}