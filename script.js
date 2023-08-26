// constで定義したオブジェクトはプロパティの変更が可能
// const val1 = {
//     name: "ポッポ",
//     age: 25,
// };
// val1.name = "Poppo";
// val1.address = "Wakayama";

// console.log(val1);

// // constで定義した配列はプロパティの変更が可能
// const val2 = ['dog', 'cat'];
// val2[0] = "bird";
// val2.push("monkey");
// console.log(val2);

// テンプレート文字列
// const name = "ぽっぽ";
// const age = 25;

// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// // アロー関数(処理が一行の時は{}とreturnを省略できる)
// const func = (str) => str;
// console.log(func("funcです"));

// const func2 = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(func2(10, 20));

// 分割代入
// const myProfile = {
//     name: "ぽっぽ",
//     age:25,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // プロパティが増えた時に何度もmyProfileと打つのは効率的ではないので分割代入する
// const { name, age } = myProfile
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列でも記述できる
const myProfile = ['ぽっぽ', 25];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

// 配列での分割代入
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);

