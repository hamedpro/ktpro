var exam = require('./exam_analyser').exam
var ghalamchi1 = new exam;
ghalamchi1.add_new_lesson('hendese 1')
ghalamchi1.exam_lessons[0].correct_chooses = [1,2,3,1]
ghalamchi1.exam_lessons[0].user_chooses = [1,2,4,1]
ghalamchi1.exam_lessons[0].mark_question(0)
ghalamchi1.exam_lessons[0].mark_question(3)
console.log(ghalamchi1.exam_lessons)
console.log("calculated percent with negative marks is : "+ghalamchi1.exam_lessons[0].calculate_percent())
console.log("calculated percent without negative marks is : "+ghalamchi1.exam_lessons[0].calculate_percent(false))
console.log("correct chooses count is : "+ghalamchi1.exam_lessons[0].correct_chooses_count)
console.log("incorrect chooses count is : "+ghalamchi1.exam_lessons[0].incorrect_chooses_count)
console.log("empty questions count is : "+ghalamchi1.exam_lessons[0].empty_chooses_count)
console.log("marked questions count is : "+ghalamchi1.exam_lessons[0].marked_questions_count)