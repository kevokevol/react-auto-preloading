import React from 'react';
import ReactDOM from 'react-dom';

export default class Preloader extends React.Component {
    render(){
        return (
            <Frame>
                <div>ya yeet</div>
            </Frame>
        )
    }
}

class Frame extends React.Component {
    constructor(props){
        super(props)
        this.frameRef = React.createRef()
    }
    componentWillUpdate(){
        this.frameHead = this.frameRef.current.contentDocument.head
    }
    render(){
        return <iframe ref={this.frameRef}>
            {ReactDOM.createPortal(
                this.props.head,
                this.frameHead
            )}
        </iframe>
    }
}