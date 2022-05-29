const domMain = (() => {

    //const $divRoot = document.getElementById("root");
    const $button = document.getElementById("guardar");

    const $button_upd = document.getElementById("actualizar");

    const $inputId = document.getElementById("id");
    const $inputName = document.getElementById("nombre");
    const $inputApepa = document.getElementById("apepa");
    const $inputApema = document.getElementById("apema");
    const $inputRfc = document.getElementById("rfc");

    const fnCallbackClick = (target) => {
      if($inputName.value=='' ||$inputRfc.value==''){
        console.log('No pueden estar vacíos estos campos');
        return;
    }

    const id = $inputId.value;
    const name = $inputName.value;
    const apepa = $inputApepa.value;
    const apema = $inputApema.value;
    const rfc = $inputRfc.value;
    
    clientHttp.post("http://localhost:8080/api/v1/cliente/",{//"https://desarrollo-software-123.herokuapp.com/api/v1/cliente/",{ //http://localhost:8080/api/v1/cliente/
      nombre: name,
      primerApellido: apepa,
      segundoApellido: apema,
      rfc: rfc
    },postExito,fnFallo);
    //domElements.createRow(id,name,apepa,apema,rfc);
  };

  const fnCallbackClickUpd = (target) => {
    if($inputName.value=='' ||$inputRfc.value==''){
      console.log('No pueden estar vacíos estos campos');
      return;
  }

  const id = $inputId.value;
  const name = $inputName.value;
  const apepa = $inputApepa.value;
  const apema = $inputApema.value;
  const rfc = $inputRfc.value;
  
  clientHttp.put("http://localhost:8080/api/v1/cliente/"+id,{//"https://desarrollo-software-123.herokuapp.com/api/v1/cliente/",{ //http://localhost:8080/api/v1/cliente/
    id:id,
    nombre: name,
    primerApellido: apepa,
    segundoApellido: apema,
    rfc: rfc
  },funcionExitoPost,fnFallo);
  domElements.createRow(id,name,apepa,apema,rfc);
};

    $button.addEventListener("click",fnCallbackClick);
    $button_upd.addEventListener("click",fnCallbackClickUpd);

    const fnExito = (response) =>{
      for(let i=0; i < response.length; i++){
        const id = response[i].idCliente;
        const name = response[i].nombre;
        const apepa = response[i].primerApellido;
        const apema = response[i].segundoApellido;
        const rfc = response[i].rfc;
        domElements.createRow(id,name,apepa,apema,rfc);
      }      
      console.log(response);
    };

    const funcionExitoPost = (response) => {
      const httpResponse = response.httpCode;
      if (httpResponse >= 200 && httpResponse <= 299) {

      } else {
          alert(response);
      }
  }
  

    const postExito = (response) => {
      const id = response.idCliente;
      const name = response.nombre;
      const apepa = response.primerApellido;
      const apema = response.segundoApellido;
      const rfc = response.rfc;
      domElements.createRow(id,name,apepa,apema,rfc);
    console.log(response);
    }
    
    const fnFallo = (err) =>{
      console.error(err);
    };
/*
    const config = {
      url : "https://desarrollo-software-123.herokuapp.com/api/v1/cliente/show",
      body:{}
    };

    http://localhost:8080/api/v1/cliente/show
*/
    clientHttp.get("http://localhost:8080/api/v1/cliente/show",fnExito,fnFallo);
    /*clientHttp.post("http://localhost:8080/api/v1/cliente/",{
      nombre: "Name",
      primerApellido: "FirstApe",
      segundoApellido: "SecondApe",
      rfc: "xxxxxxxxxxxx"
    },fnExito,fnFallo);*/
  //$divRoot.appendChild($button);

})();