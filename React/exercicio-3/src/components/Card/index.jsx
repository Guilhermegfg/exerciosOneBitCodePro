import styles from "./styles.module.css"

export default function Card({profileImg, title, desc, telefone, email, git, linkedin, twitter}) {
    return (
        <div className={styles.container}>
            <img src={profileImg} alt="" />
            <h1>{title}</h1>
            <hr />
            <p>{desc}</p>
            <hr />
            <p>{telefone}</p>
            <hr />
            <p>{email}</p>
            <hr />
            <a href={git}>
                <button>GitHub</button>
            </a>
            <a href={linkedin}>
                <button>Linkedin</button>
            </a>
            <a href={twitter}>
                <button>Twitter</button>
            </a>
        </div>
    )
}