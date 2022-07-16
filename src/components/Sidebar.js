export default function Sidebar () {
    const userData = 
        [{image:'./img/bad.vibes.memes.svg',
        name:'bad.vibes.memes',
        follow:'Segue você'},
        {image:'./img/chibirdart.svg',
        name:'chibirdart',
        follow:'Segue você'},
        {image:'./img/razoesparaacreditar.svg',
        name:'razoesparaacreditar',
        follow:'Novo no Instagram'},
        {image:'./img/adorable_animals.svg',
        name:'adorable_animals',
        follow:'Segue você'},
        {image:'./img/smallcutecats.svg',
        name:'smallcutecats',
        follow:'Segue você'}];

    return (
        <aside class="sidebar">
            <div class="perfil">
                <img src='./img/catanacomics.svg' alt='' />
                <div class='user-description'>
                    <h3>catanacomics</h3>
                    <span>Catana</span>
                </div>
            </div>
            <div class="suggetions">
                <span>Sugestões para você</span>
                <h4>Ver tudo</h4>
            </div>
            <div class="users">
                {userData.map(element =>
                    <User img={element.image} name={element.name} follow={element.follow} />)}
            </div>
        </aside>
    )
}

function User (props) {
    return (
        <div class="user">
            <div>
                <img src={props.img} alt="" />
                <div class="user-description">
                    <h3>{props.name}</h3>
                    <span>{props.follow}</span>
                </div>
            </div>
            <a href="https://www.google.com/">Seguir</a>
        </div>
    )
}