import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

export default function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <ul className="min-w-96 flex flex-col gap-2">
                {todos.map(todo => 
                    <li key={todo.id} className="w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7]">
                        <div className="w-full bg-transparent rounded-lg">{todo.text}</div>
                        <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                        onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
                    </li>
                )}
            </ul>
        </>
    );
}