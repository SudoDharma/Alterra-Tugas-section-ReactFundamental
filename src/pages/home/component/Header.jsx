export default function Header({text}){

    return(
        <div style={{borderBottom: "3px solid grey", padding: "20px 10px", marginBottom: "30px"}}>
            <h1>{text}</h1>
        </div>
    )
}