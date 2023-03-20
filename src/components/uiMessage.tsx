import React from "react";

export default class UIMessage extends React.Component<{title?:string, children:any}, {title:string}> {

    constructor(props:any) {
        super(props);
        this.state = {title:props.title};
    }

    handleChange = (event:any) => {
        this.setState({title:event.target.value});
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                {this.props.children}
                <input type="text" value={this.state.title} onChange={this.handleChange}/>
            </div>
        );
    }
}