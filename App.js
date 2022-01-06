import Background from "./special_blur_ui_components_v1/background/background"
import CheckBox from "./special_blur_ui_components_v1/CheckBox/CheckBox"
import ListOption from "./special_blur_ui_components_v1/ListOption/ListOption"

import React, { useState } from "react"
export default function App(){
    const [lesson_items,set_lesson_items] = useState(window.lesson_items)
    function CheckBox_onclick_handler(index_of_lesson_item){
        window.api.trigger_done_status(index_of_lesson_item)
        window.api.get()
        set_lesson_items(window.lesson_items)
    }
    function add_new_lesson_item_handler(){
        var result = prompt('enter its name ')
        if(result){
            window.api.add_new_lesson_item(result)
            window.api.set()
            window.api.get()
            set_lesson_items(window.lesson_items)
        }
    }
    return(
        <>
            <Background color='blue'>
                <button onClick={()=>add_new_lesson_item_handler()}>add new lesson item</button>
                {lesson_items.map((lesson_item,index)=>{
                    return(
                        <React.Fragment key={index}>
                            <div onClick={()=>CheckBox_onclick_handler(index)}>
                                <ListOption title={lesson_item.lesson_item_name} content={lesson_item.is_done ? "it is done" :"it is not done"} />
                            </div>
                        </React.Fragment>
                    )
                })}
            </Background>
            
            
        </>
    )
}