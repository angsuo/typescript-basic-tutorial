(() => {
    // tells the function that it's parameter is of type string
    function sayHi(str: string){
        return "hello " + str
    }
    let text = "J"
    console.log(sayHi(text))
})()