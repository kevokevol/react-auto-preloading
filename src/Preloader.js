import React from 'react';
import ReactDOM from 'react-dom';

export default class Preloader extends React.Component {
    render(){
        let headers = [<link yeet/>]
        return (
            <Frame head={headers}>
            </Frame>
        )
    }
}

class Frame extends React.Component {
    constructor(props){
        super(props)
        this.frameRef = React.createRef()
    }
    componentDidMount(){
        this.frameHead = this.frameRef.current.contentDocument.head
        console.log(this.frameHead)
    }
    render(){
        return <iframe ref={this.frameRef}>
            {this.frameHead && ReactDOM.createPortal(
                this.props.head,
                this.frameHead
            )}
        </iframe>
    }
}