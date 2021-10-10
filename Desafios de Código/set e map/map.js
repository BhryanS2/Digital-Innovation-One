/*
Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.
*/

const members = new Map();
members.set('Luiz', 'Admin');
members.set('Maria', 'User');
members.set('João', 'User');
members.set('Pedro', 'User');
members.set('Ana', 'Admin');
members.set('José', 'User');
members.set('Paulo', 'User');
members.set('Carla', 'Admin');
members.set('Márcia', 'User');
members.set('Rafael', 'User');

function getAdmins(map) {
  let result = [];
  for (let [key, value] of map) {
    if (value === 'Admin') {
      result.push(key)
    }
  }
  return result;
}

const admins = getAdmins(members);
console.log(admins)