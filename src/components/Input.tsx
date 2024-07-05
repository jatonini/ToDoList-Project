import styles from "./Input.module.css"


export function Input() {
    return (
        <div>

            <input className={styles.container} 
            placeholder="Adicone uma nova tarefa"
            />
            
        </div>
    )
}