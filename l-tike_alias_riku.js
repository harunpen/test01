//ローチケメアド電話番号自動入力[エイリアス]

// アドレス入力を使用する
var ドメイン = ['@gmail.com'];

//アドレス名を使用します
var address_names = ['lusenzhang','nusohamu','assault48','hoshinomac28','mariatamu0310'];

var ドメイン = ドメイン[Math.floor(Math.random()*domains.length)];
var address_name = address_names[Math.floor(Math.random()*address_names.length)];

var ketasuu = Math.floor(Math.random()*6);
var address_rand = address_name + "+" + Math.random().toString(36).slice(-1*(ketasuu+5)) + ドメイン;

//メアド形式選択(1:1)
var mailtype = Math.floor(Math.random()*Math.floor(2));
if(メールタイプ == 0){
  メール = アドレスランド;
}それ以外{
  メール = アドレスランド;
}

//メアド入力
document.forms.ttg160.elements.MAIL_ADDRS.value = document.forms.ttg160.elements.MAIL_ADDRS_CONFIRM.value = メール;

//電話番号入力
document.forms.ttg160.elements.TEL.value = document.forms.ttg160.elements.TEL_CONFIRM.value = "0" + (Math.floor(Math.random()*3)+7) + "0" + ( Math.floor(Math.random()*90000000)+10000000);

//次のページへ
document.querySelector("[name=NEXT]").click();