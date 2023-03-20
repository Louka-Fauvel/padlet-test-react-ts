import React from "react";
import UIForm from "./uiForm";
import HttpService from "../services/HttpService";
import {API_URL} from "../App";

export default class UiList extends React.Component<{attr:string, objects:any[], callback:any}, {objects:any[]}> {

    constructor(props:any) {
        super(props);
        this.state = {objects:props.objects};
    }


    componentDidUpdate(prevProps: Readonly<{ attr: string; objects: any[]; callback: any }>, prevState: Readonly<{ objects: any[] }>, snapshot?: any) {
        if (prevProps.objects !== this.props.objects) {
            this.setState({objects:this.props.objects});
        }
    }

    render() {
        const updateObject = (object:any, event:any) =>{
            event.preventDefault();
            debugger;
            HttpService.post(API_URL+'user_', object).then((data:any) => {
                this.setState({objects:[...this.state.objects, data.data]});
            });
        }
        return (
            <>
                <UIForm fields={["login", "email", "password"]} submit={updateObject}/>
                <ul>
                    {
                        this.state.objects.map((object:any, index:number) => {
                            return <li key={index}>{this.props.callback(object)}</li>
                        })
                    }
                </ul>
            </>
        );
    }

}




