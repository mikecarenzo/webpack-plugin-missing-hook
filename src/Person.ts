export class Person {

    /**
     * The name of the person.
     */
    public name: string;

    /**
     * Creates a new Person.
     * @param name The name of the person.
     */
    constructor(name: string, avgPace) {
        this.name = name;
    }

    /**
     * Returns the person's typical greeting.
     */
    public getGreeting(): string {
        return `Hello, my name is ${ name }.`;
    }

}