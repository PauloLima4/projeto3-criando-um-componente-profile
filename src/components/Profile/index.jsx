import styles from './styles.module.css'

export default function Profile(props){
    return(
        <div className={styles.container}>
            {/* imagem do usuário */}
            <img src={props.img} />
            
            {/* nome do usuário */}
            <h1>{props.name}</h1>

            {/* parágrafos de contato */}
            <hr />
            <p>{props.bio}</p>
            <hr />
            <p>{props.phone}</p>
            <hr />
            <p>{props.email}</p>
            <hr />

            {/* botões de contato */}
            <button><a href={props.githubUrl}>Github</a></button>
            <button><a href={props.instagramUrl}>Instagram</a></button>
            <button><a href={props.animeProfileUrl}>Anime Profile</a></button>
        </div>
    )
}
