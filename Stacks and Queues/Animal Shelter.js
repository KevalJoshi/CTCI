class AnimalQueue {
    constructor() {
        this.dogs = new Queue();
        this.cats = new Queue();
        this.order = 0;
    }

    enqueue(animal) {
        animal.setOrder(this.order);
        this.order++;

        if (animal instanceof Dog) {
            this.dogs.add(animal);
        } else if (animal instanceof Cat) {
            this.cats.add(animal);

        }
    }
    dequeueDogs() {
        return this.dogs.remove();
    }
    dequeueCats() {
        return this.cats.remove();
    }
    dequeueAny() {
        if (this.dogs.size() === 0) {
            return this.dequeueCats();
        } else if (this.cats.size() === 0) {
            return this.dequeueDogs();
        }

        const dog = this.dogs.peek();
        const cat = this.cats.peek();

        if (dog.arrivedEarlierThan(cat)) {
            return this.dequeueDogs();
        } else {
            return this.dequeueCats();
        }
    }

}

class Animal {
    constructor(name) {
        this.name = name;
    }
    setOrder(order) {
        this.order = order;
    }
    getOrder() {
        return this.order;
    }
    arrivedEarlierThan(animal) {
        return this.order < animal.getOrder();
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}