import { LinkedList, LinkedListNode } from "./ex1"

export class Stack {
    constructor(
        public frames: LinkedList
    ) { }


    public isEmpty = (): boolean => this.frames.start === undefined


    public push = (value: any): void => {
        this.frames.push(value)
    }


    public pop = (): any | void => {
        if (this.frames.start === undefined) {
            return
        } else if (this.frames.start.next === undefined) {
            const startFrame = this.frames.start
            this.frames.start = undefined
            return startFrame
        }

        let node = this.frames.start

        while (node!.next!.next !== undefined) {
            node = node!.next!
        }

        const popped = node.next!
        node.next = undefined
        
        return popped.value
    }


    public print = (): void => { this.frames.printAll() }
}


const oldStack = new Stack(new LinkedList())
console.log(oldStack.isEmpty())

const newLinkedList = new LinkedList(
    new LinkedListNode(
        1, new LinkedListNode(2,
            new LinkedListNode(3)
        )
    )
)
const newStack = new Stack(newLinkedList)
console.log(newStack.isEmpty())

newStack.push(4)
newStack.print()

console.log("popped:", newStack.pop())
newStack.print()