function percorrer() {
  let usuarios = [
    {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
      nome: "Gabriel",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
  ];

  for (let usuario of usuarios) {
    console.log(`O ${usuario.nome}, possui as habilidades: ${usuario.habilidades.join(", ")}.`);
  }
}

percorrer();
