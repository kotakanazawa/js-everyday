// プリミティブの文字列は"string"型
const str = 'Moji'
console.log(typeof str)
// プリミティブ型の値に対してメソッド呼び出しをする
// ->`str`へアクセスするときに`Moji`がラッパーオブジェクトへ変換される
// ->ラッパーオブジェクトはStringのインスタンスなのでメソッドを呼び出せる
console.log(str.toUpperCase())

// ラッパーオブジェクトはobject型
const strWrapper = new String('文字列')
console.log(typeof strWrapper)

// 明示的に作成したラッパーオブジェクトからプリミティブ型の値を取り出す
console.log(strWrapper.valueOf())
