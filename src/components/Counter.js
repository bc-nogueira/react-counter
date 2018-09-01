import React from 'react';

class Counter extends React.Component {
    render () {
        const { index, counter, operate } = this.props;
        return (
            <div>
                <h1>{counter}</h1>
                <div className="buttons">
                    <div className="operationBtn" style={{ marginRight: 10 }}
                        onClick={() => operate(index, -1)}>-</div>
                    <div className="operationBtn" onClick={() => operate(index, 1)}>+</div>
                </div>
            </div>
        );
    }
}

export default Counter;