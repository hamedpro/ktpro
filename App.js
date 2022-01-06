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
    function automated_add_new_lesson_items(){
        var lesson_name = prompt("enter lesson name : ")
        var sections_count = Number(prompt('enter sections count (with keyboard set on english)'))
        if(isNaN(sections_count)){
            alert('number was not valid')
            return true
        }
        for(var i=1;i<(sections_count+1);i++){
            window.api.add_new_lesson_item(lesson_name + ` [بخش ${i}]`)

        }
        window.api.set()
        window.api.get()
        set_lesson_items(window.lesson_items)
    }
    function delete_lesson_item(){
        var index = Number(prompt('enter index of that lesson item '))
        window.lesson_items.splice(index, 1);
        window.api.set()
        window.api.get()
        set_lesson_items(window.lesson_items)
    }
    function alert_done_lesson_items_percent(){
        var done_lesson_items = window.lesson_items.filter(i=>i.is_done)
        window.alert(Math.round((done_lesson_items.length / window.lesson_items.length) * 100))
    }
    return(
        <>
            <Background color='blue'>
                <button onClick={()=>add_new_lesson_item_handler()}>add new lesson item</button>
                <button onClick={()=>automated_add_new_lesson_items()}>automated add new lesson items</button>
                <button onClick={()=>delete_lesson_item()}>delete lesson item</button>
                <button onClick={()=>alert(lesson_items.length)}>alert lesson items count</button>
                <button onClick={()=>alert(window.lesson_items[window.api.get_index_of_random_isnt_done_item()]['lesson_item_name'])}>get random lesson which is not done</button>
                <button onClick={()=>alert_done_lesson_items_percent()}>get done lesson items percent</button>
                
                {lesson_items.map((lesson_item,index)=>{
                    return(
                        <React.Fragment key={index}>
                            <div onClick={()=>CheckBox_onclick_handler(index)}>
                                <ListOption title={lesson_item.lesson_item_name + `[index : ${index}]`} content={lesson_item.is_done ? "it is done" :"it is not done"} />
                            </div>
                        </React.Fragment>
                    )
                })}
                <p style={{color:"white"}}>{JSON.stringify(lesson_items)}</p>
            </Background>
            
            
        </>
    )
}