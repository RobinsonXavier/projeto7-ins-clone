export default function Stories () {
    return (
        <div class ="stories">
            <StoriesElement img ="./img/9gag.svg" perfil="9gag" />
            <StoriesElement img ="./img/meowed.svg" perfil="meowed" />
            <StoriesElement img ="./img/barked.svg" perfil="barked" />
            <StoriesElement img ="./img/nathanwpylestrangeplanet.svg" perfil="nathanwpylestrangeplanet" />
            <StoriesElement img ="./img/wawawicomics.svg" perfil="" />
            <StoriesElement img ="./img/respondeai.svg" perfil="" />
            <StoriesElement img ="./img/filomoderna.svg" perfil="" />
            <StoriesElement img ="./img/memeriagourmet.svg" perfil="" />
        </div>
    )
}

function StoriesElement (props) {
    return (
        <div class = "stories-element">
                <div>
                    <img src={props.img} alt=""/>
                    <img src="./img/stories_background.jpg" alt=""/>
                </div>
                <span>{props.perfil.length > 9 ? 
                props.perfil.substring(0, 7) + "..." : props.perfil }</span>
            </div>
    )
}