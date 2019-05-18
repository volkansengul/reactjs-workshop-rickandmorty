import React from 'react';

export default class Detail extends React.Component {
    render(){
        return (
            <>
                Detail Page ! {this.props.match.params.myId}
            </>
        )
    }
}