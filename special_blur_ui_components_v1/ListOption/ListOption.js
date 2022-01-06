import "./styles.css"
export default function ListOption(props){
    //props => title , content
    return(
        <div className="ListOption">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}