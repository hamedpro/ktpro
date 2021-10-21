import { calculate_exam_result, calculate_percent } from "./exam_analyser.ts";
//tests are not covering all cases make sure about this in public release
function test(test_boolean){
    if(typeof test_boolean != "boolean"){
        console.log("[warning] pass non boolean arg to 'test' func")
    }else if(test_boolean == true){
        console.log('[test passed]')
    }else{
        console.log('[test failed]')
    }
}
test(calculate_percent({
    correct_questions_count:13,
    incorrect_questions_count:4,
    empty_questions_count:3
}) === 58)

test(calculate_percent({
    correct_questions_count:15,
    incorrect_questions_count:0,
    empty_questions_count:5,
    negative_mark_mode : false
}) === 75)

test(calculate_exam_result("4343431232","0000000000") === 0)
test(calculate_exam_result("4343431232","4340000000") === 30)
test(calculate_exam_result("11111111111111222233","11111111111111111100") === 63)