let a1 = 'number'
let b1 = 3
let c1 = 3
let result1 = a1 + b1 + c1
console.log(result1);
/*
    'number' - це стринга додаэм перше число 3, так як перше значення це string 
    то наступні значення будуть перетворюватись в string - result1 = 'number33'
*/

let a2 = null
let b2 = 3
let result2 = a2 + b2
console.log(result2);
console.log(null + 3);
/*
    До null додаемо число результатом буде число (result2 = 3)
*/

let a3 = 5
let b3 = "qwerty"
let result3 = a3 && b3
console.log(result3);
/*
    "логічне І" повертає значення першого операнду, якщо воно перетворюється в false, 
    інакше повертає значення другого операнду. В нашому випадку 5 не false, "qwerty"  не false. Виведе "qwerty"
*/

let a4 = +'40'
let b4 = +'2'
let c4 = "hillel"
let result4 = a4 + b4 + c4
console.log(result4);
/*
    Так як в змінних а4/b4 використовується унарний оператор + то він перетворює ці змінні в числа. 
    Це дає 42. Потім відбувається конкатенація. Результат - 42hillel
*/


let a5 = '10'
let b5 = 5
let c5 = 6
let result5 = a5 - b5 === c5
console.log(result5);
/*

*/
// '10' перетвориться в число тож 10-5 = 5, 5 === 6 Результат false

let a6 = true
let b6 = false
let result6 = a6 + b6
console.log(result6);
/*
    В цьому випадку логічні значення перетворяться у числа 1 та 0. Результат - 1
*/ 

let a7 = '4px'
let b7 = 3
let result7 = a7 - b7
console.log(result7);
/*
    '4px' - не може бути коректно перетворений у число тому при віднімання числа від рядка,
     результат буде NaN так як таке обчислення не можливе
*/

let a8 = '4'
let b8 = 3
let result8 = a8 - b8
console.log(result8);
/*
    '4' - перетвориться у число потім виконається дія віднімання Результатом буде - 1
*/

let a9 = '6'
let b9 = 3
let c9 = 0
let result9 = a9 + b9 ** c9
console.log(result9);
/*
    В цьому випадку спочатку буде виконуватись підведення у степінь - 3 ** 0 = 1,
    а потім перетворення 1 в рядок і конкатенація. Результат 61
*/

let a10 = 12
let b10 = '6'
let result10 = a10/b10
console.log(result10);

/*
    '6' - буде перетворенно на число 6 а потім виконається дія ділення 12/6 Результат - 2   
*/

let a11 = '10'
let b11 = 5
let c11 = 6
let result11 = a11 + (b11 === c11)
console.log(result11);
/*
    Спочатку дія буде виконуватись в дужках 5 === 6 Результат - false.
    Потім false перетвориться в рядок і сконкотенує з '10'. Результат - '10false'
*/

let a12 = null
let b12 = ''
let result12 = a12 == b12
console.log(result12);
/* при порівнянні значення null і пустого рядка  результатом буде false
*/

let a13 = 3
let b13 = 9
let c13 = 3
let result13 = a13**(b13/c13)
console.log(result13);
/* 
    В цьому випадку перша дія буде виконуватись в 
    дужках (9/3)=3 а потім підведення в степінь 3**3 Результат - 27
*/

let a14 = !!'false' 
let b14 = !!'true' 
let result14 = a14 == b14
console.log(result14);
/* !!'false' = true, !!'true' = true при порівнянні true == true Результат = true */


let a15 = 0
let b15 = '0'
let c15 = 1
let result15 = a15 || b15 && c15
console.log(result15);
/*
    Cпочатку буде виконуватись дія && а потім || Рядок '0' перетвориться в true, бо він не порожній,  
    а с15 = 1 це також  true. Результатом першої дії буде 1 Далі а15 = 0 що перетвориться на false. 
    При використанні логічного || якщо перший операнд false то виведе другий операнд тобто результатом буде 1
*/

let a16 = +null
let b16 = false
let c16 = 1
let result16 = (a16 == b16) < c16
console.log(result16);
/* 
    Cпочатку унарний + перетворе null  в число 0, 
    потім дія буде виконуватись в дужках  (0 == false) де  false 
    також перетвориться на 0 і результатом дії буде true. 
    Далі буде виконуватись порівняння true < 1, при порівнянні булевого 
    значення і числа true перетвориться в число 1 і рівність буде мати вигляд 1 < 1, 
    що в свою чергу не вірно і поверне результат false 
*/

let a17 = false
let b17 =  true
let c17 = true
let result17 = a17 && b17 || c17
console.log(result17);
/* 
    Cпочатку виконується дія &&, де false && true, якщо при цій діі перший операнд false то поверне false.
    Далі буде виконуватись дія ||  - false || true Результат буде true
*/

let a18 = false
let b18 = false
let c18 = true
let result18 = a18 && (b18 || c18)
console.log(result18);
/* 
    Cпочатку дія буде виконуватись в дужках (false || false) = true 
    Потім false && true, якщо при цій діі перший операнд false то поверне false.
*/

let a19 = +null
let b19 = false
let c19 = 1
let d19 = 5
let result19 = (a19 == b19) < c19 ** d19
console.log(result19);
/* 
    Перша дія в дужках,  де унарний + перетворить null в число 0. Вираз в дужках буде мати  вигляд (0 == false) 
    Результатом цієї дії буде true. Далі виконується піднесення до степення 1 ** 5 = 1. І тепер порівняння true < 1 Результат false
*/
