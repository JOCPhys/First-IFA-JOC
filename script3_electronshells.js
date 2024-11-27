const cardArray = [
    { name: 'Si-a', img: 'Si-a.png' },
    { name: 'Si-b', img: 'Si-b.jpg' },
    // { name: 'Si-c', img: 'Si-c.jpg' },//
    { name: 'S-a', img: 'S-a.png' },
    { name: 'i-b', img: 'S-b.jpg' },
    // { name: 'i-c', img: 'S-c.jpg' },//
    { name: 'P-a', img: 'P-a.png' },
    { name: 'P-b', img: 'P-b.jpg' },
    // { name: 'P-c', img: 'P-c.jpg' },//
    { name: 'O-a', img: 'O-a.png' },
    { name: 'O-b', img: 'O-b.jpg' },
    // { name: 'O-c', img: 'O-c.jpg' },//
    { name: 'Ne-a', img: 'Ne-a.png' },
    { name: 'Ne-b', img: 'Ne-b.jpg' },
    // { name: 'Ne-c', img: 'Ne-c.jpg' },//
    { name: 'N-a', img: 'N-a.png' },
    { name: 'N-b', img: 'N-b.jpg' },
    // { name: 'N-c', img: 'N-c.jpg' },//
    { name: 'Mg-a', img: 'Mg-a.png' },
    { name: 'Mg-b', img: 'Mg-b.jpg' },
    // { name: 'Mg-c', img: 'Mg-c.jpg' },//
    { name: 'Li-a', img: 'Li-a.png' },
    { name: 'Li-b', img: 'Li-b.jpg' },
    // { name: 'Li-c', img: 'Li-c.jpg' },//
    { name: 'H-a', img: 'H-a.png' },
    { name: 'H-b', img: 'H-b.jpg' },
    // { name: 'H-c', img: 'H-c.jpg' },//
    { name: 'He-a', img: 'He-a.png' },
    { name: 'He-b', img: 'He-b.jpg' },
    // { name: 'He-c', img: 'He-c.jpg' },//
    { name: 'F-a', img: 'F-a.png' },
    { name: 'F-b', img: 'F-b.jpg' },
    // { name: 'F-c', img: 'F-c.jpg' },//
    { name: 'Cl-a', img: 'Cl-a.png' },
    { name: 'Cl-b', img: 'Cl-b.jpg' },
    // { name: 'Cl-c', img: 'Cl-c.jpg' },//
    { name: 'C-a', img: 'C-a.png' },
    { name: 'C-b', img: 'C-b.jpg' },
    // { name: 'C-c', img: 'C-c.jpg' },//
    { name: 'B-a', img: 'B-a.png' },
    { name: 'B-b', img: 'B-b.jpg' },
    // { name: 'B-c', img: 'B-c.jpg' },//

    { name: 'Be-a', img: 'Be-a.png' },
    { name: 'Be-b', img: 'Be-b.jpg' },
// { name: 'Be-c', img: 'Be-c.jpg' },//
   /
   { name: 'Ar-a', img: 'Ar-a.png' },
    { name: 'Ar-b', img: 'Ar-b.jpg' },
   // { name: 'Ar-c', img: 'Ar-c.jpg' },//
      /
      { name: 'Al-a', img: 'Al-a.png' },
    { name: 'Al-b', img: 'Al-b.jpg' },
    // { name: 'Al-c', img: 'Al-c.jpg' },//
];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

    }
    return array;
}
const shuffledCards = shuffle([...cardArray, ...cardArray]).slice(0, 24);
console.log(shuffledCards);