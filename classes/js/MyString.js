/* 
Реалізуйте клас MyString, який матиме такі методи: 
    метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, 
    метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
    та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
*/

// class MyString{
//     reverse(str) {
//         let string2 = new String();
//         for(let i=0;i<str.length;i++){
//             string2 += str.charAt(str.length-i-1);
//         }
//         return string2;
//     }

//    ucFirst(string){
//         let string2;
//         const a = string.charCodeAt(0)
//         if (a >= 97 && a <= 122){
//             string2 = String.fromCharCode(a-32) + string.substr(1);
//         } else {
//             string2 = string;
//         }
//         return string2;
//     }

//     ucWords(str){
//         let string2 = '';
//         let start = 0;
//         let end = str.indexOf(' ',start);
//         while(end > -1){
//             string2 += this.ucFirst(str.substr(start,end+1-start));
//             start = end+1;
//             end = str.indexOf(' ',start);
//         } 
//         string2 += this.ucFirst(str.substr(start,str.length-1-start));
//         return string2;
//     }
// }

function MyString(){
}

MyString.prototype.reverse = (str) => {
        let string2 = new String();
        for(let i=0;i<str.length;i++){
            string2 += str.charAt(str.length-i-1);
        }
        return string2;
    }

MyString.prototype.ucFirst = (string) => {
        let string2;
        const a = string.charCodeAt(0)
        if (a >= 97 && a <= 122){
            string2 = String.fromCharCode(a-32) + string.substr(1);
        } else {
            string2 = string;
        }
        return string2;
    }

MyString.prototype.ucWords = (str) => {
        let string2 = '';
        let start = 0;
        let end = str.indexOf(' ',start);
        while(end > -1){
            string2 += MyString.prototype.ucFirst(str.substr(start,end+1-start));
            start = end+1;
            end = str.indexOf(' ',start);
        } 
        string2 += MyString.prototype.ucFirst(str.substr(start,str.length-start));
        return string2;
    }

const str = new MyString();
document.write('<br><br>"abc" reverse is "'+str.reverse('abc')+'"<br>');
document.write('But with first uppercase letter it will be "' + str.ucFirst('abc') + '"<br>');
document.write('Every first letter uppercase: "' + str.ucWords('abc jkl sdj') + '"<br>');