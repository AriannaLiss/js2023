    const words = [
        "world",
        "love",
        "peace",
        "abundance"
    ];
    const word = words[Math.floor(Math.random() * words.length)];
    const answerArray = [];
      for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
      }
    let remainingLetters = word.length;
    
    while (remainingLetters > 0) {
        alert(answerArray.join(" "));//ask for response
        let guess = prompt("Guess the letter, or click cansel");
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please input 1 letter.");
        } else {
            for (let j = 0; j < word.length; j++) {
                if (word[j] === guess.toLowerCase()) {
                    answerArray[j] = guess;
                    remainingLetters--;
                } 
            }
        }
    }
    alert(answerArray.join(" "));
    alert("Awsome! It was " + word);
