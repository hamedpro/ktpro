function calculate_percent(
    {
        correct_questions_count,
        incorrect_questions_count,
        empty_questions_count,
        negative_mark_mode = true
    }
){
    //retutn value of this func will always be rounded to nearest integer
    let all_questions_count = correct_questions_count+incorrect_questions_count+empty_questions_count;
    if( negative_mark_mode === true ){
        return Math.round((((correct_questions_count*3)-incorrect_questions_count)/(all_questions_count*3)) * 100)
    }else{
        return Math.round((correct_questions_count/all_questions_count) * 100)
    }
}
function calculate_exam_result(correct_chooses_as_string,student_chooses_as_string,negative_mark_mode = true){
    // args format muse be like => "23433203233" (0 is for emopty question)
    if(correct_chooses_as_string.length !== student_chooses_as_string.length){
        return "invalid_args"
    }
    let correct_questions_count = 0
    let incorrect_questions_count = 0
    let empty_questions_count = 0
    for(let i=0;i<correct_chooses_as_string.length;i++){
        let splited_correct_chooses = correct_chooses_as_string.split("")
        let splited_student_chooses = student_chooses_as_string.split("")
        if(Number(splited_student_chooses[i]) === 0){
            empty_questions_count += 1
        }else if(Number(splited_student_chooses[i]) === Number(splited_correct_chooses[i])){
            correct_questions_count+=1 
        }else {
            incorrect_questions_count +=1
        }
    }
    return(calculate_percent({
        correct_questions_count,
        incorrect_questions_count,
        empty_questions_count,
        negative_mark_mode
    }))
}

class exam_lesson{
    constructor(lesson_name,questions_count){
        this.lesson_name = lesson_name
        this.correct_chooses = []
        this.user_chooses = []
        this.marked_questions_indexes = []
        this.questions_count = questions_count
    }
    calculate_percent(negative_mark_mode = true){
        return calculate_percent({
            correct_questions_count:this.correct_chooses_count,
            incorrect_questions_count:this.incorrect_chooses_count,
            empty_questions_count:this.empty_chooses_count,
            negative_mark_mode
        })
    }
    mark_question(question_index){
        this.marked_questions_indexes.push(question_index)
    }
    get empty_chooses_count(){
        return this.user_chooses.filter(choose=>choose == 0).length
    }
    get correct_chooses_count(){
        let correct_chooses_count = 0
        this.correct_chooses.forEach((choose,index)=>{
            if(this.user_chooses[index] == choose){
                correct_chooses_count += 1
            }
        })
        return correct_chooses_count
    }
    get incorrect_chooses_count(){
        return this.user_chooses.length - (this.empty_chooses_count+this.correct_chooses_count)
    }
    get marked_questions_count(){
        return this.marked_questions_indexes.length
    }
}
class exam{
    constructor(){
        this.exam_lessons = []
    }    
    add_new_lesson(lesson_name){
        this.exam_lessons.push(new exam_lesson(lesson_name))
    }
}

module.exports = {
    exam
}