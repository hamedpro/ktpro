import "./styles.css"
export default function ListHeader(props){
    //props => title , content 
    return(
        <div className="ListHeader">
            <h2>{props.title}</h2>
            <b>{props.content}</b>
        </div>
    )
}