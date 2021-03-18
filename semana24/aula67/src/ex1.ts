export class LinkedListNode {
    constructor(
        public value: any,
        public next?: LinkedListNode
    ) { }
}


export class LinkedList {
    constructor(
        public start?: LinkedListNode
    ) { }


    public push = (value: any): void => {
        if (!this.start) {
            this.start = new LinkedListNode(value)
        } else {
            let node = this.start

            while (node.next !== undefined) { // We can have booleans or falsies as nodes.
                node = node.next
            }

            node.next = new LinkedListNode(value)
        }
    }


    public printAll = () => {
        let node = this.start
        console.log(node?.value)

        while (node!.next !== undefined) {
            node = node!.next
            console.log(node.value)
        }
    }
}


const names: LinkedList = new LinkedList(new LinkedListNode("billy"))
names.push("bob")
names.push("joaquim")

console.log(JSON.stringify(names, null, 2))
names.printAll()