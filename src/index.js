/**
 * const letなどの変数宣言
 */

//

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "上書きが可能";
// console.log(val2);

// // letは際宣言ができない
// let val2 = "let変数は際宣言ができない";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書きできない
// // val3 = "constは上書きできない";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   naam: "test",
//   age: 28
// };
// val4.name = "test2";
// val4.address = "tokyo";
// console.log(val4);

// 配列
// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "テスと";
// const age = 28;

// // 従来の方法
// const message1 = "私の年齢は" + "文字列" + age;
// console.log(message1);

// // テンプレート文字列の場合
// const message2 = `私の名前は${name}です${age}`;

/**
 * アロー関数
 */

// function func1(str) {
//   return str;
// }

// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

//　アロー関数
// const func2 = (str) => {
//   return str;
// };
//console.log(func2("func2です"));

/**
 * アロー関数省略パターン：
 * 引数が一つの場合は、()が省略可能
 * 処理が１行の場合は、{}とreturnが省略可能
 * */

// const func3 = str => str;
// console.log(func3("func3です"));

/**
 * 分割代入
 */
// オブジェクトパターン
// const myProfile = {
//   name: "test",
//   age: 25
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// // console.log(message1);

//オブジェクトパターン
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// 配列パターン
// const myProfile = ["テスト", 28];
// const message3 = `名前は${myProfile[0]},年齢は${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name},年齢は${age}`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

//
/**
 * スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// // スプレッド構文を使うと上の処理は
// sumFunc(...arr1);

// 分割代入＋スプレッド構文
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map filter
 */

const nameArr = ["山田", "佐藤", "test"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filter　条件にマッチする要素を配列で返す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "test") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件　？　条件がTrueの時：　条件がfalseのとき
// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

//const num = "1300";
//console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
//console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えている" : "だめです";
// };

// console.log(checkSum(50, 100));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はTrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1か2はTrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
