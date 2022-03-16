import Header from "./component/Header"
import List from "./component/List"

export default function HomePage({todos}){

    return(
        <>
            <Header text="To Do App"/>
            {todos.map((todo) => <List todo={todo}/>)} 
        </>
    )
}