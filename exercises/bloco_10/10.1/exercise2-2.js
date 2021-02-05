function techList(techs, name) {
  if (techs.length == 0) return 'Vazio!';
  let techListName = [];
  techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    let newItem = { tech: techs[index], name };
    techListName.push(newItem);
  }
  return techListName;
}

//console.log(techList([], "Lucas"));

module.exports = techList;