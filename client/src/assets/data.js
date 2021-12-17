export const data = [
    {
        id: 1,
        nombre: 'Juan',
        img: 'http://pm1.narvii.com/6350/119e892acea9bc0748f3c62c9f0eb3cdadd754ac_00.jpg'
    },
    {
        id: 2,
        nombre: 'Roberto',
        img: 'https://i.pinimg.com/550x/c4/bd/01/c4bd01c05a068eed2af659fd525c1bfc.jpg'
    },
    {
        id: 3,
        nombre: 'Hernan',
        img: 'https://pbs.twimg.com/profile_images/1271216628152373248/n2SsxnkY_400x400.jpg'
    },
    {
        id: 4,
        nombre: 'Alex',
        img: 'http://pm1.narvii.com/7530/38387126f683e610b5cc3a641c1389fcce6923f5r1-554-554v2_uhq.jpg'
    },
    {
        id: 5,
        nombre: 'Carlos',
        img: 'https://i.pinimg.com/564x/b5/cb/63/b5cb633370b799cbcb96ab946e6246c0.jpg'
    },
];

export function getUser(id) {
    return data.find((user) => user.id === id);
}