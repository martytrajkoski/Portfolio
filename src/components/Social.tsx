type SocialProps = {
    icon: string,
    media: string,
    url: string
}

export function Social({icon, media, url}: SocialProps){
    return(
        <a className="social-card" href={url} target="_blank">
            <i className={icon}></i>
            <p>{media}</p>
        </a>
    )
}