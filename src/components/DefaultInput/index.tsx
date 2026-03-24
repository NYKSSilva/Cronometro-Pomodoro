import styles from './styles.module.css';
type DefaultInputProps ={
    id: string;
    labelText: string;
    type: string
}&React.Component<'input'>;

export function DefaultInput({
    id,
    type,  
    labelText = "task",
    ...rest
}: DefaultInputProps){
    return(
    <>
        <div className= {styles.teste}> 
            <label htmlFor = {id}> {labelText} </label>
            <input className  = {styles.input} id = {id} type = {type} {...rest}/>
        </div>
    </>
    )  
}