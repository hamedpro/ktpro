var api = {}
api.set = ()=> {
    window.localStorage.setItem("lesson_items_as_stringified_json",JSON.stringify(window.lesson_items))
}
api.get = ()=>{
    window.lesson_items =  JSON.parse(window.localStorage.getItem("lesson_items_as_stringified_json"))
}


if(window.localStorage.getItem('lesson_items_as_stringified_json') == null ){
    window.localStorage.setItem('lesson_items_as_stringified_json',JSON.stringify([]))
}
window.api.get()
api.add_new_lesson_item = (lesson_item_name)=>{   
    window.lesson_items.push({
        lesson_item_name,
        is_done : false
    })
    window.api.set()
    return (window.lesson_items.length -1)
}
api.get_isnt_done_items = ()=>{
    window.api.get()
    return window.lesson_items.filter(i=>!i.is_done)
}
api.get_done_items = ()=>{
    window.api.get()
    return window.lesson_items.filter(i=>i.is_done)
}
api.get_index_of_random_isnt_done_item = ()=>{
    //returns index of that item
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    window.api.get()
    return randomInteger(0,(window.lesson_items.length -1))
}
api.trigger_done_status = (lesson_item_index) =>{
    window.lesson_items[lesson_item_index]['is_done'] = !window.lesson_items[lesson_item_index]['is_done']
    window.api.set()
}
window.api = api