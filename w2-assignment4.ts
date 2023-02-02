let Books: any[] = [
  { title: 'Book', author: 'Name' },
  { title: 'Book2', author: 'Name2' },
];

let array = [];
for (let i = 0; i < Books.length; i++) {
  array.push(Books[i].title);
}
console.log(array);
