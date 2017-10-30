/**
 * Created by Administrator on 2017/10/30.
 */
var censoredWords =["sad","bad","mad"];
var customerCensoredWords = [];

function censeor(inStr){
    for(idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx],"****");
    }
    for(idx in customerCensoredWords){
        inStr = inStr.replace(customerCensoredWords[idx],"****");
    }
    return inStr;
}

function addCensoredWord(word){
    customerCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;

