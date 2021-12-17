const friends = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Roberto'
    },
    {
        id: 3,
        nombre: 'Hernan'
    },
    {
        id: 4,
        nombre: 'Alex'
    },
    {
        id: 5,
        nombre: 'Carlos'
    },
];

module.exports = {
    
    Query: {
        getFriends() {
            return friends;    
        }
    }

}