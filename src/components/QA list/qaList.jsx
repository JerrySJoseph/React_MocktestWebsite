import React from 'react'
import './qaList.css'

export default function QaList(props) {
    const { questions, attempt, marked,onCellClick, rem } = props;
    let cellClass = '';
    return <div className='qa-container'>
        <h4 className="display-4">Questions Panel</h4>
        <div id='test-details' className="row">
            <div className="col-lg-4">
                <div className="cell attempted">{attempt.length}</div>
                Attempted
            </div>
            <div className="col-lg-4">
                <div className="cell marked">{marked.length}</div>
                Marked
            </div>
            <div className="col-lg-4">
                <div className="cell">{rem}</div>
                Not Answered
            </div>
        </div>
        <hr className="my-3"/>
        <div id="qa-list" className="row">
            {
                questions.map((value, index) => {
                    if (attempt.includes(index))
                        cellClass = 'col-xs-3 cell attempted';
                    else if (marked.includes(index))
                        cellClass = 'col-xs-3 cell marked';
                    else
                        cellClass = 'col-xs-3 cell';
                    
                    return <div className={cellClass} onClick={(e)=>{onCellClick(index)}}>
                        {index+1}
                    </div>
                })
            }
        </div>
       
    </div>
}
