// Задание 1
let str1 = 'ahb acb aeb aeeb adcb axeb';
let regex1 = /a.b/g;
let matches1 = str1.match(regex1);
console.log('Задание 1:', matches1); 

// Задание 2
let str2 = 'aa aba abba abbba abca abea';
let regex2 = /ab+a/g; 
let matches2 = str2.match(regex2);
console.log('Задание 2:', matches2); 

// Задание 3
let str3 = 'aba aea aca aza axa';
let regex3 = /a[be x]a/g; 
let matches3 = str3.match(regex3);
console.log('Задание 3:', matches3); 

// Задание 4
let str4 = 'aba aea afa aha aga';
let regex4 = /a[a-fj-z]a/g; 
let matches4 = str4.match(regex4);
console.log('Задание 4:', matches4); 

// Задание 5
let str5 = 'aeeea aeea aea axa axxa axxxa';
let regex5 = /a(e+|x+)a/g; 
let matches5 = str5.match(regex5);
console.log('Задание 5:', matches5); 