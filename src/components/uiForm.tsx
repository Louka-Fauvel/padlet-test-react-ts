import React, {FormEvent} from "react";

export default class UIForm extends React.Component<{fields:string[], submit:any}, {data:any}> {

    constructor(props:any) {
        super(props);
        this.state = {data:{}};
    }

    handleChange = (event:any) => {
        this.setState({data:{...this.state.data, [event.target.name]:event.target.value}});
    }

    render() {
        return (
            <form onChange={this.handleChange} onSubmit={(evt:FormEvent<HTMLFormElement>) => this.props.submit(this.state.data, evt)}>
                {this.props.fields.map((field:string) => {
                    return <input type="text" name={field}/>
                })}
                <button type="submit">Valider</button>
            </form>
        );
    }

}