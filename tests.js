import { calculate_percent } from "./exam_analyser.js";

function test(test_boolean){
    if(typeof test_boolean != "boolean"){
        console.log("[warning] pass non boolean arg to 'test' func")
    }else if(test_boolean == true){
        console.log('[test passed]')
    }else if(test_boolean != true){
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

//write another test for 'calculate percent' func to make sure
