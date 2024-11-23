let livros = new Map();

let autores = [];

let generos = [];



function adicionarLivro(titulo, autor, genero) {

    if (!livros.has(titulo)) {

        autores.push(autor);

        generos.push(genero);



        let indice = autores.length - 1;

        livros.set(titulo, indice);



        console.log(`Livro '${titulo}' adicionado com sucesso!`);



    } else {



        console.log(`O livro '${titulo}' já está na biblioteca.`);

    }

}



adicionarLivro("O Senhor dos Anéis", "Tolkien", "Fantasia");









function removerLivro(titulo) {

    if (livros.has(titulo)){

        let indice = livros.get(titulo);



        autores.splice(indice, 1);

        generos.splice(indice, 1);



        livros.delete(titulo);



        console.log(`Livro '${titulo}' removido com sucesso!`);

    } else {

        console.log(`Livro '${titulo}' não foi encontrado na biblioteca`);



    }

}





removerLivro("Macacos");



function listarLivros() {



}



function verificarDisponibilidade(titulo) {



}



function buscarLivrosPorGenero(genero) {



}