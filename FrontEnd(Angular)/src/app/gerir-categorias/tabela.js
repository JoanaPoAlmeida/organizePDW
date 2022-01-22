class Categoria {

    constructor() {
        this.id = 1;
        this.arrayCategorias = [];
        this.editId = null;
    }

    salvar() {
        let categoria = this.lerDados();

        if (this.validaCampos(categoria)) {
            if (this.editId == null) {
                this.adicionar(categoria);
            } else {
                this.atualizar(this.editId, categoria);
            }

        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {

        var xhr = new XMLHttpRequest();
        // we defined the xhr

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            if (this.status == 200) {
                var data = JSON.parse(this.responseText);

                console.log(data);
                // we get the returned data
            }

            // end of state change: it can be after some time (async)
        };

        
        /*let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMyIsIklkIjoyLCJpYXQiOjE2NDI3ODUxNTksImV4cCI6MTY3NDM0Mjc1OX0.mThhEFRU_iVFaAQDX30A0hrTV4UShCtrUeWCijKrkA8"
        xhr.open('GET', 'http://localhost:5000/auth/categoria', true);
        xhr.setRequestHeader("Authorization","Bearer"+ token);
        xhr.send();*/
        

        let tbody = document.getElementById('tbody');
        tbody.innerText = '';


        for (let i = 0; i < this.arrayCategorias.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_categoria = tr.insertCell();
            let td_descricao = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayCategorias[i].id;
            td_categoria.innerText = this.arrayCategorias[i].nomeCategoria;
            td_descricao.innerText = this.arrayCategorias[i].descricao;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'assets/edit.png';
            imgEdit.setAttribute("onclick", "categoria.editar(" + JSON.stringify(this.arrayCategorias[i]) + ")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'assets/delete.png'
            imgDelete.setAttribute("onclick", "categoria.deletar(" + this.arrayCategorias[i].id + ")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(categoria) {
        this.arrayCategorias.push(categoria);
        this.id++;
    }

    atualizar(id, categoria) {
        for (let i = 0; i < this.arrayCategorias.length; i++) {
            if (this.arrayCategorias[i].id == id) {
                this.arrayCategorias[i].nomeCategoria = categoria.nomeCategoria;
                this.arrayCategorias[i].descricao = categoria.descricao;
            }
        }
    }

    editar(dados) {
        this.editId = dados.id;

        document.getElementById('categoria').value = dados.nomeCategoria;
        document.getElementById('descricao').value = dados.descricao;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    lerDados() {
        let categoria = {};

        categoria.id = this.id
        categoria.nomeCategoria = document.getElementById('categoria').value;
        categoria.descricao = document.getElementById('descricao').value;

        return categoria;
    }


    validaCampos(categoria) {
        let msg = '';

        if (categoria.nomeCategoria == '') {
            msg += '- Informe o Nome da Categoria \n';
        }

        if (categoria.descricao == '') {
            msg += '-Informe a descrição da Categoria \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    cancelar() {
        document.getElementById('categoria').value = '';
        document.getElementById('descricao').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;
    }

    deletar(id) {
        if (confirm("Deseja realmente apagar a categoria " + id + "?")) {
            let tbody = document.getElementById('tbody');


            for (let i = 0; i < this.arrayCategorias.length; i++) {
                if (this.arrayCategorias[i].id == id) {
                    this.arrayCategorias.splice(i, 1)
                    tbody.deleteRow(i);
                }
            }
        }
    }


    

}

var categoria = new Categoria();