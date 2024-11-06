import styles from './styles.module.css'

export default function Profile(props){
    return(
        <div className={styles.container}>
            {/* imagem do usuário */}
            <img src={props.img} />

            {/* nome do usuário */}
            <h1>{props.name}</h1>

            {/* parágrafos de contato */}
            <p>{props.bio}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>

            {/* botões de contato */}
            <button><a href={props.githubUrl}>Github</a></button>
            <button><a href={props.linkedinUrl}>Linkedin</a></button>
            <button><a href={props.twitterUrl}>Twitter</a></button>
        </div>
    )
}