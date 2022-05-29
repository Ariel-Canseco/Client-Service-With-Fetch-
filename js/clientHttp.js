const clientHttp = (()=>{

    const _get = (url,fnExito,fnFallo) =>{
        //const base_url = config['url'];
        //const body = config['body'];
        fetch(url).
        then((resp)=> resp.json()).
        then(fnExito).catch(fnFallo);
    };

    const _post = (url,payload,fnExito,fnFallo) =>{
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        })
        .then((resp)=> resp.json())
        .then(fnExito)
        .catch(fnFallo);
    };

    const _put = (url,payload,fnExito,fnFallo) =>{
        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        })
        .then((resp)=> resp.json())
        .then(fnExito)
        .catch(fnFallo);
    };

    async function deleteData(ID){
        URI = 'http://localhost:8080/api/v1/cliente/delete/' + ID
        console.log(URI)
        const response = await fetch(URI,{
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'
        },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body:{
                idCliente: ID
            }
        });
        return response.json();
    }

    return {
        get:_get,
        post:_post,
        put:_put,
        delete:deleteData
    };
})();