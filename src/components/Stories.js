export default function Stories () {
    return (
        <div class ="stories">
            <StoriesElement img ="./img/9gag.svg" perfil="9gag" />
            <StoriesElement img ="./img/meowed.svg" perfil="meowed" />
            <StoriesElement img ="./img/barked.svg" perfil="barked" />
            <StoriesElement img ="./img/nathanwpylestrangeplanet.svg" perfil="nathanwpylestrangeplanet" />
            <StoriesElement img ="./img/wawawicomics.svg" perfil="wawawicomics" />
            <StoriesElement img ="./img/respondeai.svg" perfil="respondeai" />
            <StoriesElement img ="./img/filomoderna.svg" perfil="filomoderna" />
            <StoriesElement img ="./img/memeriagourmet.svg" perfil="memeriagourmet" />
        </div>
    )
}

function StoriesElement (props) {
    return (
        <div class = "stories-element">
                <div>
                    <img class="stories-img" src={props.img} alt=""/>
                    <img class ="backstories" src="./img/stories_background.jpg" alt=""/>
                </div>
                <span>{props.perfil.length > 9 ? 
                props.perfil.substring(0, 7) + "..." : props.perfil }</span>
            </div>
    )
}