export class Queue {
    constructor(
        public items: any[] = []
    ) { }


    public isEmpty = (): boolean => this.items.length === 0


    public enqueue = (value: any): void => {
        this.items.push(value)
    }


    public dequeue = (): any => this.items.shift()


    public print = (): void => {
        for (const item of this.items) {
            console.log(item)
        }
    }
}

const requests = new Queue([1, 2, 3])

requests.enqueue(4)
requests.enqueue(5)

console.log("dequeued:", requests.dequeue())

requests.print()