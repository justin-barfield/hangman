import React from 'react';

function Letters(props) {
    
    const mapAll = props.word.map((value, index) =>
    
        <div 
            className="card alert-dark letter-card border-0 rounded-0 overflow-hidden"
            key={value.id}
        >
            <div className="card-body">
                <h5
                    id={index} 
                    className="card-title"
                >
                    {props.word[index].found ? (
                        <>{props.word[index].val}</>
                    ) : (<></>)}
                </h5>
            </div>
        </div>
    
    );
    
    return (

        <div className="row">
            
            <div className="card-group">

                {mapAll}
            
            </div>

        </div>
    )
}

export default Letters;