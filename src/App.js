import React from "react";
import {Switch,Route,HashRouter} from "react-router-dom";
import Home from "./components/home/homeComp"
import ExamPage from "./components/exam_page/exam_page_comp"
import ExamResults from "./components/exams_results/exam_results_comp"
import ExamResult from "./components/exam_result/exam_result_comp";
import CreateNewExam from "./components/create_new_exam/create_new_exam_comp"
import SetCorrectChooses from "./components/set_correct_chooses/set_correct_chooses_comp";
import "./styles.css"
export default class App extends React.Component{
    constructor(props){
        super(props)
        if(window.localStorage.getItem('exams') === null){
            window.localStorage.setItem('exams',JSON.stringify([]))
        }
    }
    render(){
        return(
            <>
                <div className="main_background"></div>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" render={props=><Home {...props} />}></Route>
                        <Route exact path="/home" render={props=><Home {...props} />}></Route>  
                        <Route exact path="/exam-page/:questions_count" render={props=><ExamPage {...props} />}></Route>
                        <Route exact path="/exams-results" render={props=><ExamResults {...props} />}></Route>
                        <Route exact path="/exams-results/:exam_code" render={props=><ExamResult {...props} />}></Route>
                        <Route exact path="/create-new-exam" render={props=><CreateNewExam {...props} />}></Route>
                        <Route exact path="/set_correct_chooses/:exam_code" render={props=><SetCorrectChooses {...props} />}></Route>
                    </Switch>
                    
                </HashRouter>
            </>
        )
    }
}
