import React from 'react';

class Buttons extends React.Component {
    render () {
        const { editCounters } = this.props;
        return (
            <div className="buttonsDiv">
                <button onClick={() => editCounters('add')} style={{ marginRight: 10 }}>Add counter</button>
                <button onClick={() => editCounters('remove')}>Remove counter</button>
            </div>
        );
    }
}

export default Buttons;