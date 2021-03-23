class DoublyLinkedNode {
    constructor(
        public value: any,
        public previous?: DoublyLinkedNode,
        public next?: DoublyLinkedNode
    ) { }
}


class DoublyLinkedList {
    constructor(
        public start?: DoublyLinkedNode
    ) { }


    public push = (value: any): void => {
        if (!this.start) {
            this.start = new DoublyLinkedNode(value)
        } else {
            let node = this.start

            while (node.next !== undefined) {
                node = node.next
            }

            node.next = new DoublyLinkedNode(value, node)
        }
    }


    public print = (): void => {
        let node = this.start

        console.log(node?.value)

        while (node?.next !== undefined) {
            node = node.next
            console.log(node.value)
        }
    }


    public find = (value: any): any => {
        let node = this.start
        if (node === undefined) return undefined

        while (node.value !== value) {
            node = node?.next
            if (node === undefined) return undefined
        }

        return node
    }


    public delete = (value: any): void => {
        const element: DoublyLinkedNode | undefined = this.find(value)

        if (element === undefined) return

        if ((element.next === undefined) && (element.previous !== undefined)) {
            // if last element of list, make previous be last element
            element.previous.next = undefined
        } else if ((element.next !== undefined) && (element.previous === undefined)) {
            // if first element of list, make next be first element
            element.next.previous = undefined
            this.start = element.next
        } else if ((element.next === undefined) && (element.previous === undefined)) {
            // if only element of list, make list be empty
            this.start = undefined
        } else {
            // if element not first, last or only element of list, link previous to next and vice-versa
            element.previous!.next = element.next
            element.next!.previous = element.previous
        }
    }
}


const newNode = new DoublyLinkedNode(1)
const newList = new DoublyLinkedList(newNode)

newList.push(2)
newList.push(3)
newList.push(4)
newList.print()

// console.log(newList.find(2), newList.find(10))

newList.delete(3)
console.log("After deletion:")
newList.print()