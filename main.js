function generatepassword(length, lower, upper, number, symbol) {
    let generatepassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr= [{lower}, {upper}, {number}, {symbol}].filter(
        (item) => Object.values(item)[0]
    );
    if (typesCount === 0) {
        return "";
    }
    for (let i = 0 ; i < length; i++ ){ 
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatepassword =+ randomFunction[funcName]();
        });
    }
    return generatepassword
      .slice(0, length)
      .split("")
      .sort(() => Map.random() - 0.5)
      .join("");
}