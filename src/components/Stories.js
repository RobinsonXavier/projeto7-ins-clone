export default function Stories () {
    const stories = 
    [{perfil:"9gag" , img:"./img/9gag.svg"},
    {perfil:"meowed" , img:"./img/meowed.svg"},
    {perfil:"barked" , img:"./img/barked.svg"},
    {perfil:"nathanwpylestrangeplanet" , img:"./img/nathanwpylestrangeplanet.svg"},
    {perfil:"wawawicomics" , img:"./img/wawawicomics.svg"},
    {perfil:"respondeai" , img:"./img/respondeai.svg"},
    {perfil:"filomoderna" , img:"./img/filomoderna.svg"},
    {perfil:"memeriagourmet" , img:"./img/memeriagourmet.svg"}];
    return (
        <div class ="stories">
            {stories.map(storie => 
            <StoriesElement img = {storie.img} perfil= {storie.perfil} />)}
            <ion-icon class="ion-off" name="chevron-forward-circle-outline"></ion-icon>
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