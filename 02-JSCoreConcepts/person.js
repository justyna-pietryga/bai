class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFirstAndLastName() {
        return `${this.name} ${this.surname}`
    }

    getInitials(){
        const nameInitial = this.name.charAt(0).toUpperCase();
        const surnameInitial = this.surname.charAt(0).toUpperCase();
        return `${nameInitial}.${surnameInitial}`
    }
}

const janNowak = new Person("Jan", "Nowak");
const me = new Person("Justyna", "Pietryga");

console.log(janNowak.getFirstAndLastName());
console.log(janNowak.getInitials());
console.log(me.getFirstAndLastName());
console.log(me.getInitials());