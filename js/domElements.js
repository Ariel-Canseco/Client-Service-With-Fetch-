const domElements = (()=>{

    const $table = document.getElementById("tableData");
    const $tBody = $table.children[1];
    
    const _createRow = (id,name,apepa,apema,rfc) =>{
        const $tr = document.createElement("tr");
        const $tdId = document.createElement("td");
        const $tdName = document.createElement("td");
        const $tdApellidoPaterno = document.createElement("td");
        const $tdApellidoMaterno = document.createElement("td");
        const $tdRfc = document.createElement("td");
        const $tdOpciones = document.createElement("td");
        //Other stuff
        const $buttonEdit = _createButtonEdit();
        const $buttonDelete = _createButtonDelete();
        //Other stuff
        
        $tdId.innerText = id;
        $tdName.innerText = name;
        $tdApellidoPaterno.innerText = apepa;
        $tdApellidoMaterno.innerText = apema;
        $tdRfc.innerText = rfc;
        $tdOpciones.appendChild($buttonEdit);
        $tdOpciones.appendChild($buttonDelete);

        $tr.appendChild($tdId);
        $tr.appendChild($tdName);
        $tr.appendChild($tdApellidoPaterno);
        $tr.appendChild($tdApellidoMaterno);
        $tr.appendChild($tdRfc);
        $tr.appendChild($tdOpciones);
        $tBody.appendChild($tr);
    };

    const _createButtonEdit = () =>{
        const $buttonEdit = document.createElement("button");
        
        $buttonEdit.innerText = "Editar";
        $buttonEdit.id = "editar";

        $buttonEdit.addEventListener("click",(event) => {

            const $tdParent = event.target.parentElement;
            const $trParent = $tdParent.parentElement;
            
            const $inputId = document.getElementById("id");
            $inputId.value = $trParent.children[0].innerText;
            
            const $inputName = document.getElementById("nombre");
            $inputName.value = $trParent.children[1].innerText;
            
            const $inputApellidoPaterno = document.getElementById("apepa");
            $inputApellidoPaterno.value = $trParent.children[2].innerText;
            
            const $inputApellidoMaterno = document.getElementById("apema");
            $inputApellidoMaterno.value = $trParent.children[3].innerText;
            
            const $inputRfc = document.getElementById("rfc");
            $inputRfc.value = $trParent.children[4].innerText;

            $tBody.removeChild($trParent);
        });
        return $buttonEdit;
    }

    const _createButtonDelete = () =>{
        const $buttonDelete = document.createElement("button");
        $buttonDelete.innerText = "Eliminar";
        /*Stuff */
        //$buttonDelete.setAttribute('id','borrar');
        $buttonDelete.id = "eliminar"
        $buttonDelete.addEventListener("click",(event) =>{

            const $tdParent = event.target.parentElement;
            const $trParent = $tdParent.parentElement;
            
            clientHttp.delete($trParent.children[0].innerText);
            $tBody.removeChild($trParent);
        });
        return $buttonDelete;
    }

    return{
        createRow:_createRow,
    }
    

})();