import React from "react";
import Stories from "./Stories";


export default function MainContent () {
    const posts =
    [{title: '9gag',
    icon:'./img/9gag.svg',
    img:'./img/luffy.webp',
    like:'./img/razoesparaacreditar.svg',
    likename:'razoesparaacreditar',
    num:'545 mil'},
    {title: 'meowed',
    icon:'./img/meowed.svg',
    img:'./img/gato-telefone.svg',
    like:'./img/respondeai.svg',
    likename:'respondeai',
    num:'101.523'},
    {title: 'barked',
    icon:'./img/barked.svg',
    img:'./img/dog.svg',
    like:'./img/adorable_animals.svg',
    likename:'adorable_animals',
    num:'99.159'}
    ];

    return (
        <div class="main-content">
            <Stories />
            {posts.map(element =>
            <Post title={element.title} icon={element.icon} img={element.img} 
            like={element.like} likename={element.likename} number={element.num}/>)}
        </div>
    )
}

function Post (props) {

    let valor = '';
    const liked= 'like'
    const unlike ='unlike'

    const [like, setLike] = React.useState('unlike');
    

    return (
        <div class="post">
            <div class="post-title">
                <div>
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <span>...</span>
            </div>
            <img onClick={() => setLike('like')} src={props.img} alt="" />
            <div class="post-interaction">
                <div class="interactions">
                    <div>
                        <ion-icon onClick={() => like === 'like' ? setLike(unlike) : setLike(liked)} 
                        class ={like} name="heart"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="likes">
                    <img src={props.like} alt="" />
                    <span> Curtido por <strong>{props.likename}</strong> e
                    <strong> outras {props.number} pessoas</strong></span>
                </div>
                
            </div>

        </div>
    )
}