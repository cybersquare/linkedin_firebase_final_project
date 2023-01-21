import styles from "./InputOptions.module.css";


function InputOptions({Icon, title, color }){
    return(
        <div className={styles.input_options}>
            <Icon style={{color}}/>
            <h4>{title}</h4>

        </div>
    );
}


export default InputOptions;