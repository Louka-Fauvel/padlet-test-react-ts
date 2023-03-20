export default class HttpService {

    static async get(url: string, headers?:any) {
        let response = await fetch(url, headers);
        return await response.json();
    }

    static async post(url: string, data: any, headers?:any) {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });
        return await response.json();
    }

}