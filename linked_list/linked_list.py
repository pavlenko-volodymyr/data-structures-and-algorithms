class Node:
    def __init__(self, data):
        self.data = data
        self.next_node = None


class LinkedList:
    def __init__(self):
        self.head_node = None
    
    def get_head(self) -> Node:
        return self.head_node
    
    def is_empty(self) -> bool:
        return self.get_head() is None
    
    def insert_at_head(self, data):
        temp_node = Node(data)
        temp_node.next_node = self.get_head()
        self.head_node = temp_node
    
    def insert_at_tail(self, data) -> bool:
        if self.is_empty():
            self.insert_at_head(data)
            return

        current_node = self.get_head()
        while current_node.next_node is not None:
            current_node = current_node.next_node
        current_node.next_node = Node(data)

    def delete(self, data) -> bool:
        if self.is_empty():
            return False
        
        current_node = self.get_head()
        while current_node.next_node is not None:
            if current_node.next_node.data == data:
                current_node.next_node = current_node.next_node.next_node
                return True
            current_node = current_node.next_node
        return False

    def delete_at_head(self) -> bool:
        if self.is_empty():
            return False
        self.head_node = self.head_node.next_node
        return True

    def search(self, data) -> bool:
        if self.is_empty():
            return False
        current_node = self.get_head()
        while current_node is not None:
            if current_node.data == data:
                return True
            current_node = current_node.next_node
        return False

    def print_list(self):
        if self.is_empty():
            print('List is empty')
            return False
        temp_node = self.get_head()
        while temp_node.next_node is not None:
            print(temp_node.data, end=" -> ")
            temp_node = temp_node.next_node

        print(temp_node.data, end=" -> None")


linked_list = LinkedList()
assert linked_list.is_empty()
linked_list.insert_at_head(1)
assert linked_list.get_head().data == 1
linked_list.insert_at_tail(2)
assert linked_list.get_head().next_node.data == 2