(() => {
    interface PersonInput{
        fName: string
        lName: string
    }
    function getNames(person: PersonInput){
        return person.fName + " " + person.lName
    }

    const thisPerson: PersonInput = {fName: "angsuo", lName: "angsuo"}
    console.log(getNames(thisPerson))
})()