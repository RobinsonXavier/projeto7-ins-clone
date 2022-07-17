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
    const userPerfil = 
    {img:'./img/catanacomics.svg',
    title:'catanacomics',
    subtitle:'Catana' }
    return (
        <aside class="sidebar">
            <Perfil image= {userPerfil.img} name={userPerfil.title} subtitle = {userPerfil.subtitle} />
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

function Perfil (props) {
    return (
        <div class="perfil">
                <img src={props.image} alt='' />
                <div class='user-description'>
                    <h3>{props.name}</h3>
                    <span>{props.subtitle}</span>
                </div>
            </div>
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