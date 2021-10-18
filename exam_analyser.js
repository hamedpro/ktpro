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
    }else if(negative_mark_mode !== true){
        return Math.round((correct_questions_count/all_questions_count) * 100)
    }
}
function calculate_exam_result(correct_chooses_as_string,student_chooses_as_string,negative_mark_mode = true){
    // args format => "23433203233" (0 is for emopty question)
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
module.exports = {
    calculate_percent,calculate_exam_result
}