
class Node:
    def __init__(self, value, priority):
        self.value = value
        self.priority = priority


class PriorityQueue:
    values = []

    def __has_lower_priority(self, index1, index2):
        return self.values[index1].priority < self.values[index2].priority

    def __bubble_up(self):
        index = len(self.values) - 1
        parent_index = (index - 1) // 2
        while parent_index >= 0 and self.values[index].priority < self.values[parent_index].priority:
            self.values[parent_index], self.values[index] = self.values[index], self.values[parent_index]
            index = parent_index

    def __bubble_down(self):
        index = 0
        total_values = len(self.values)

        while True:
            node = self.values[index]
            left_child_index = 2 * index + 1
            right_child_index = left_child_index + 1
            swap_index = None

            if left_child_index < total_values and self.__has_lower_priority(left_child_index, index):
                swap_index = left_child_index

            if (
                right_child_index < total_values and
                self.__has_lower_priority(right_child_index, index) and
                self.__has_lower_priority(right_child_index, left_child_index)
            ):
                swap_index = right_child_index

            if swap_index is None:
                break

            self.values[index] = self.values[swap_index]
            self.values[swap_index] = node
            index = swap_index

    def enqueue(self, value, priority):
        new_node = Node(value, priority)
        self.values.append(new_node)
        self.__bubble_up()

    def dequeue(self):
        if not self.values:
            return

        node = self.values[0]
        self.values[0] = self.values[-1]
        self.values.pop()

        if self.values:
            self.__bubble_down()

        return node.value
