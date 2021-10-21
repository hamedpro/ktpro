import React from "react";
export default class ExamResult extends React.Component{
    constructor(props){
        super(props)
        var exam_code = Number(props.match.params.exam_code)
        this.state = {
            exam_code,
            exam_correct_chooses : JSON.parse(localStorage.getItem('exams'))[exam_code-1].correct_chooses,
            exam_user_chooses : JSON.parse(localStorage.getItem('exams'))[exam_code-1].user_chooses,
            
        }
        //continue developing from here
    }
    render(){
        return(
            <>
                <div className="box" style={{display:(typeof this.exam_correct_chooses == "undefined" ? "block":"none")}}>
                    <h1>error</h1>
                    
                    <p>here is result page of exam {this.state.exam_code} but it seems you have not set correct chooses of this exam yet, please click this button below to set it first</p>
                    <button onClick={()=>window.location.assign('#/set_correct_chooses/'+this.state.exam_code)}>set correct chooses of exam {this.state.exam_code}</button>
                </div>
                <div className="box">
                    <h1>exam results</h1>
                    <p>all questions count : {this.state.exam_user_chooses.length}</p>
                    <p>all questions count : {this.state.exam_user_chooses.length}</p>
                </div>
                
            </>
        )
    }
}