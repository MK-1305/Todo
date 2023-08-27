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
// const myProfile = ['ぽっぽ', 25];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 配列での分割代入
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("ぽっぽ");

// スプレッド構文 ...
// 配列の展開

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// コピーしてから配列の内容を変えるとコピー元の内容も変わってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// mapやfilterを使った配列の処理

// const nameArr = ["田中", "山田", "ぽぽ"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// };

// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })
// console.log(nameArr2);

// forを使わなくてもmapを使った一行で繰り返し処理ができる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// filterを使って奇数だけをとりだす処理（条件をつけて抽出したいときはfilter）
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//     if (name === "ぽぽ") {
//         return name
//     }   else {
//         return `${name}さん`
//     }
// })
// console.log(newNameArr);

// 三項演算子
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// toLocalStringは3桁カンマ区切りをつけてくれる
// const num = 1300;

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'; 
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

// 論理演算子の本当の意味を知ろう &&かつ //または
// const flag1 = true;
// const flag2 =false;

// if (flag1 || flag2){
//     console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//     console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側に返す（左側がtrueなら左側を返す）
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);