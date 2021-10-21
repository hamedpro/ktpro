import React from "react";
import "./styles.css"
export default class ExamPage extends React.Component{
    constructor(props){
        super(props)
        var exam_questions_count =  Number(props.match.params.questions_count)
        var user_chooses = []
        for(var i=0;i<exam_questions_count;i++){
            user_chooses.push(0)
        }
        this.state = {
            exam_questions_count,
            user_chooses
        }
    }
    finish_exam = ()=>{
        
        let old_value = JSON.parse(localStorage.getItem('exams'))
        let exam_code = old_value.length + 1
        old_value.push({user_chooses:this.state.user_chooses})
        localStorage.setItem('exams',JSON.stringify(old_value))
        window.alert('your chooses saved as user_chooses of --exam '+exam_code+" --")
        window.location.assign('#/set_correct_chooses/'+exam_code)
    }
    update_choose = (question_index,choose)=>{
        let modified_user_chooses = this.state.user_chooses
        modified_user_chooses[question_index] = choose
        this.setState({
            user_chooses:modified_user_chooses
        })
        //todo (make sure) => there was in react website that passing func to set state is correct not passing object
    }
    render(){
        return(
            <>
                <div className="exam_info_box box">
                    <h1>winter exam</h1>
                    <p>questions_count: <span>{this.state.exam_questions_count}</span></p>
                </div>
                <div className="question_empty_form box">
                    
                    {this.state.user_chooses.map((val,index)=>{
                        return(
                            <div className="choose_row" key={index}>
                                <button className="counter">{index + 1}</button>
                                <button className={"choose"+(this.state.user_chooses[index] == 0 ? " active":"")} onClick={()=>this.update_choose(index,0)}>0</button>
                                <button className={"choose"+(this.state.user_chooses[index] == 1 ? " active":"")}  onClick={()=>this.update_choose(index,1)}>1</button>
                                <button className={"choose"+(this.state.user_chooses[index] == 2 ? " active":"")}  onClick={()=>this.update_choose(index,2)}>2</button>
                                <button className={"choose"+(this.state.user_chooses[index] == 3 ? " active":"")}  onClick={()=>this.update_choose(index,3)}>3</button>
                                <button className={"choose"+(this.state.user_chooses[index] == 4 ? " active":"")}  onClick={()=>this.update_choose(index,4)}>4</button>
                            </div>
                        )
                    })}
                    
                    
                </div>
                <div className="finish_exam_box box">
                    <button id="finish_exam" onClick={this.finish_exam}>finish exam</button>
                </div>
            </>

        )
    }
}