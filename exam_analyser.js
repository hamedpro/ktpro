export function calculate_percent(
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