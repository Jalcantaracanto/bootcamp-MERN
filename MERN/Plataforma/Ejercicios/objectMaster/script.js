const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//Nombres que comiencen con la letra "B" 
// const bListPkmn = pokemon.filter( p => p.name[0] === "B" );

//Matriz de solo los identificadores
// const pkmnIds = pokemon.map( p => p.id )

//Identificación es divisible por 3
// const pkmnDiv3 = pokemon.filter( p => p.id % 3 === 0 );
// console.log(pkmnDiv3)

//Pokémon que son del tipo "fuego"
// const pkmnFire = pokemon.filter( p => p.types.includes('fire'));
// console.log(pkmnFire)

//Pokemones que tienen más de un tipo
// const pkmn2Types = pokemon.filter( p => p.types.length > 1)
// console.log(pkmn2Types)

//Matriz solo con nombres de los pokémon
// const pkmnNames = pokemon.map( p => p.name)
// console.log(pkmnNames)

//Matriz solo con nombres de los pokémon con id mayor que 99
// const pkmnNames99 = pokemon.filter(p => p.id > 99).map( p => p.name)
// console.log(pkmnNames99)

//Matriz solo nombres con cuyo unico tipo veneno
// const pkmnNamesPoison = pokemon.filter(p => p.types.length === 1 && p.types.includes('poison')).map( p => p.name)
// console.log(pkmnNamesPoison)

//Primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
// const pkmnFirstTypeFlying = pokemon.filter(p => p.types.includes('flying')).map( p => p.types[0])
// console.log(pkmnFirstTypeFlying)

//Recuento de la cantidad de pokémon que son de tipo "normal"
const pkmnRecountNormal = pokemon.filter(p => p.types.includes('normal')).length
console.log(pkmnRecountNormal)




