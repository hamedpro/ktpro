function save_choose(question_index,choose){
    old_array = JSON.parse(window.localStorage.getItem('user_chooses'))
    new_array = old_array[question_index] = choose
    window.localStorage.setItem('user_chooses',JSON.stringify(new_array))
}
function build_empty_exam_paper(){
    empty_array = []
    for(i=0;i<Number(document.getElementById('questions_count_input').value);i++){
        empty_array.push(0)
    }
    this.setItem('chooses',JSON.stringify(empty_array))
}
document.getElementById('build_empty_exam_form_button').onclick = build_empty_exam_paper

function render_empty_rows(rows_count){
    for(i=0;i<rows_count;i++){
        var html = `
            <div class="row">
                <button>${i}</button>
                <button onclick="save_choose(${i},1)">1</button>
                <button onclick="save_choose(${i},2)">2</button>
                <button onclick="save_choose(${i},3)">3</button>
                <button onclick="save_choose(${i},4)">4</button>
            </div>
        `
        document.getElementById('rows').appendChild(empty_row)
    }
}
function calc_percent(){
    
}