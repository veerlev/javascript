function rot13(str) { // LBH QVQ VG!
  let regex = /[A-Z]/;
  let decoded = "";
  for(let i = 0; i < str.length; i++){
      let character = str[i];
      decoded += regex.test(character) ? 
            calculateCharacter(character)
            : character; 
  }
  return decoded;
}

function calculateCharacter(ch){
    let characterCode = ch.charCodeAt(0) - 13;
    if (characterCode < "A".charCodeAt(0)) {
        characterCode += 26;
    }
    return String.fromCharCode(characterCode);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
