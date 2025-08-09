
    const morseCodeMap = {
        'a': '.-',    'b': '-...',  'c': '-.-.',  'd': '-..',
        'e': '.',     'f': '..-.',  'g': '--.',   'h': '....',
        'i': '..',    'j': '.---',  'k': '-.-',   'l': '.-..',
        'm': '--',    'n': '-.',    'o': '---',   'p': '.--.',
        'q': '--.-',  'r': '.-.',   's': '...',   't': '-',
        'u': '..-',   'v': '...-',  'w': '.--',   'x': '-..-',
        'y': '-.--',  'z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.',
        ' ': '/'
    };

    const searchInput = document.getElementById("searchInput");
    const morseOutput = document.getElementById("morseOutput");

    // Listen for typing in the first textarea
    searchInput.addEventListener("input", function () {
        const text = searchInput.value.toLowerCase();
        let morse = "";

        for (let char of text) {
            morse += morseCodeMap[char] ? morseCodeMap[char] + " " : "";
        }

        morseOutput.value = morse.trim();
    });