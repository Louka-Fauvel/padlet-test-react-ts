import React, {useEffect} from 'react';
import './App.css';
import UiList from "./components/uiList";
import HttpService from "./services/HttpService";

function App() {

    const [users, setUsers] = React.useState<any[]>([]);
    useEffect(() => {
        HttpService.get(API_URL+"user_").then((data: any) => {
            setUsers(data);
        });
    }, []);

    return (
        <div className="App">
            <UiList attr={"login"} callback={(p:any)=>`${p.login} (${p.email})`} objects={users}/>
        </div>
    );

}

export default App;
export const API_URL = "http://127.0.0.1:8090/rest/";