function getQuestionPart(phrases: string[]): string[] {

  let checkWord:string;
  let isValid:boolean = false;
  let commonWord:string = '';
  loop: for (let i = 0; i < phrases[0].length; i++) {
    checkWord = phrases[0][i];
    for (let j = i + 1; j < phrases[0].length; j++) {
      checkWord += phrases[0][j];
      if (
        phrases.filter((item) => item.includes(checkWord)).length ===
          phrases.length &&
        checkWord.length > 1
      ) { 
        commonWord = checkWord;
        isValid = true;
        if (j + 1 === phrases[0].length) { 
          // in case commonword is at the end of first word ไม่งั้นพอถึงตัวสุดท้ายจะไม่รู้ว่าหมดแล้วจะเริ่ม loop ใหม่เรื่อยๆจน commonword = 2 ตัวท้าย
          break loop;
        }
      } else if (isValid === true) {
        break loop;
      }
    }
  }

  return phrases.map(item=>item.replace(commonWord,'').trim())
}
