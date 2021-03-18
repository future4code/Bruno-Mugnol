export class Stack {
    constructor(
        public frames: any[] = []
    ) { }


    public isEmpty = () => this.frames.length === 0


    public push = (value: any): void => {
        this.frames[this.frames.length] = value
    }


    public pop = (): void => {
        const popped = this.frames[this.frames.length - 1]

        this.frames.length--

        return popped
    }


    public print = (): void => {
        if (this.frames.length === 0) return

        for (const frame of this.frames) {
            console.log(frame)
        }
    }
}


const oldStack = new Stack()
console.log(oldStack.isEmpty())


const newStack = new Stack([1, 2, 3, 4, 5])

newStack.push(6)
newStack.print()

console.log("popped:", newStack.pop())
newStack.print()