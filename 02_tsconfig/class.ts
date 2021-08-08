(()=> {
    // declare an interface
    interface PersonType{
        fName: string
        lName: string
    }

    class Person implements PersonType {
        fName: string
        lName: string
        fullName: string
        constructor(fName: string, lName: string){
            this.fName = fName
            this.lName = lName
            this.fullName = this.fName + " " + this.lName
        }

        public showName(){
            console.log(`This person's fullname is: ${this.fullName}`)
        }
    }

    const angsuo = new Person("angsuo", "angsuo")

    angsuo.showName()

})()