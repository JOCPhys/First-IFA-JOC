const cardArrayElectrons = [
    { id: '1', name: 'Si-a', img: 'Si-a.png' },
    { id: '1', name: 'Si-b', img: 'Si-b.jpg' },
    // { id: '1', name: 'Si-c', img: 'Si-c.jpg' },//
    { id: '2', name: 'S-a', img: 'S-a.png' },id: '', 
    { id: '2', name: 'S-b', img: 'S-b.jpg' },
    // { id: '2', name: 'S-c', img: 'S-c.jpg' },//
    { id: '3', name: 'P-a', img: 'P-a.png' },
    { id: '3', name: 'P-b', img: 'P-b.jpg' },
    // { id: '3', name: 'P-c', img: 'P-c.jpg' },//
    { id: '4', name: 'O-a', img: 'O-a.png' },
    { id: '4', name: 'O-b', img: 'O-b.jpg' },
    // { id: '4', name: 'O-c', img: 'O-c.jpg' },//
    { id: '5', name: 'Ne-a', img: 'Ne-a.png' },
    { id: '5', name: 'Ne-b', img: 'Ne-b.jpg' },
    // { id: '5', name: 'Ne-c', img: 'Ne-c.jpg' },//
    { id: '6', name: 'N-a', img: 'N-a.png' },
    { id: '6', name: 'N-b', img: 'N-b.jpg' },
    // { id: '6', name: 'N-c', img: 'N-c.jpg' },//
    { id: '7', name: 'Mg-a', img: 'Mg-a.png' },
    { id: '7', name: 'Mg-b', img: 'Mg-b.jpg' },
    // { id: '7', name: 'Mg-c', img: 'Mg-c.jpg' },//
    { id: '8', name: 'Li-a', img: 'Li-a.png' },
    { id: '8', name: 'Li-b', img: 'Li-b.jpg' },
    // { id: '8', name: 'Li-c', img: 'Li-c.jpg' },//
    { id: '9', name: 'H-a', img: 'H-a.png' },
    { id: '9', name: 'H-b', img: 'H-b.jpg' },
    // { id: '9', name: 'H-c', img: 'H-c.jpg' },//
    { id: '10', name: 'He-a', img: 'He-a.png' },
    { id: '10', name: 'He-b', img: 'He-b.jpg' },
    // { id: '10', name: 'He-c', img: 'He-c.jpg' },//
    { id: '11', name: 'F-a', img: 'F-a.png' },
    { id: '11', name: 'F-b', img: 'F-b.jpg' },
    // { id: '11', name: 'F-c', img: 'F-c.jpg' },//
    { id: '12', name: 'Cl-a', img: 'Cl-a.png' },
    { id: '12', name: 'Cl-b', img: 'Cl-b.jpg' },
    // { id: '12', name: 'Cl-c', img: 'Cl-c.jpg' },//
    { id: '13', name: 'C-a', img: 'C-a.png' },
    { id: '13', name: 'C-b', img: 'C-b.jpg' },
    // { id: '13', name: 'C-c', img: 'C-c.jpg' },//
    { id: '14', name: 'B-a', img: 'B-a.png' },
    { id: '14', name: 'B-b', img: 'B-b.jpg' },
    // { id: '14', name: 'B-c', img: 'B-c.jpg' },//
    { id: '15', name: 'Be-a', img: 'Be-a.png' },
    { id: '15', name: 'Be-b', img: 'Be-b.jpg' },
// { id: '15', name: 'Be-c', img: 'Be-c.jpg' },//
   { id: '16', name: 'Ar-a', img: 'Ar-a.png' },
    { id: '16', name: 'Ar-b', img: 'Ar-b.jpg' },
   // { id: '16', name: 'Ar-c', img: 'Ar-c.jpg' },//
    { id: '17', name: 'Al-a', img: 'Al-a.png' },
    { id: '17', name: 'Al-b', img: 'Al-b.jpg' },
    // { id: '17', name: 'Al-c', img: 'Al-c.jpg' },//
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