import styles from "./List.module.css"

export default function List({todo}){

    return(
        <div className={styles.container}>
            <p style={{textDecoration: todo.completed ? "line-through" : "none" }} className={styles.content}>
                {todo.title}
            </p>
        </div>
    )
}