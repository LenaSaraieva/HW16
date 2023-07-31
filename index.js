//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
const generateKey = (length, possible)  => {
    const characters =  possible.length;
    let key = "";
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * characters);
        key += possible[random];
    }
   return key;
}
console.log(key);
