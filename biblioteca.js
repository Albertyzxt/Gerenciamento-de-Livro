const prompt = require("prompt-sync")();

let biblioteca = [];

let ultimoID = 1;

const modelo = (id) => {
  let title = prompt("Digite o titulo do livro: ");
  let author = prompt("Digite o nome do autor: ");
  let genre = prompt("Digite o gênero: ");
  let year = parseInt(prompt("Digite o ano de lançamento: "));
  let year_new_versions = [];

  while (true) {
    let yearNewVersions = parseInt(
      prompt(
        "Digite o ano de lançamento das sequências, digite 'pronto' caso tenha encerrado ou se não tiver sequência. ) "
      )
    );
    if (!isNaN(yearNewVersions)) {
      if (yearNewVersions === "pronto") {
        break;
      } else {
        year_new_versions.push(yearNewVersions);
      }
    }
  }
  if (
    title != "" &&
    author != "" &&
    genre != "" &&
    !isNaN(year) &&
    !isNaN(year_new_versions) &&
    id === undefined
  ) {
    return {
      title,
      author,
      genre,
      year,
      year_new_versions,
      id: ultimoID++,
    };
  } else if (id != undefined) {
    return {
      title,
      author,
      genre,
      year,
      year_new_versions,
      id,
    };
  } else {
    console.log("Dados inválidos!");
    return false;
  }
};

const create = () => {
  let livro = modelo();
  if (livro === false) {
    return;
  } else {
    biblioteca.push(livro);
    console.log("Livro adicionado");
  }
};

const read = () => {
  if (biblioteca.length === 0) {
    console.log("Não possui nenhum livro registrado!");
    return false;
  } else {
    biblioteca.forEach((livro) => {
      console.log(
        `ID:${livro.id}, Título: ${livro.title}, Autor: ${livro.author}, Gênero: ${livro.genre}, Ano de lançamento: ${livro.year}`
      );
      livro.year_new_versions.forEach((year, indice) => {
        console.log(`
        Ano de lançamento das sequências:
         ${indice + 1}ª Sequência - ${year}`);
      });
    });
  }
  return true;
};

const update = () => {
  if (read()) {
    const id = prompt("Digite qual ID você deseja alterar: ");

    const indice = biblioteca.findIndex((livro) => id == livro.id);

    if (indice != -1 && indice != undefined) {
      let novo = modelo();
      if (novo === false) {
        return;
      } else {
        biblioteca[indice] = novo;
        console.log("Livro Atualizado!");
      }
    } else {
      console.log("ID inexistente");
    }
  } else {
    return;
  }
};

const destroy = () => {
  if (read()) {
    const id = prompt("Digite qual ID você deseja remover: ");

    const indice = biblioteca.findIndex((livro) => id == livro.id);

    if (indice != -1 && indice != undefined) {
      biblioteca.splice(indice, 1);
      console.log("Livro removido!");
    } else {
      console.log("ID inexistente");
    }
  } else {
    return;
  }
};

const searchYear = () => {
    const busca = prompt("Digite o ano: ")
    const buscaAno = biblioteca.find((livro) => livro.year == busca)

    if (busca != "" && buscaAno != -1){
        biblioteca.forEach((livro) => {
            console.log(
              `ID:${livro.id}, Título: ${livro.title}, Autor: ${livro.author}, Gênero: ${livro.genre}, Ano de lançamento: ${livro.year}`
            );
        })
    }
}

const searchTitle = () => {
    const busca = prompt("Digite o título: ")
    
}

const searchAuthor = () => {
    const busca = prompt("Digite o autor: ")
    
}

const searchGenre = () => {
    const busca = prompt("Digite o genero: ")
    
}

funcoes = {
  create,
  read,
  update,
  destroy,
  searchAuthor,
  searchGenre,
  searchTitle,
  searchYear,
};

module.exports = funcoes;
