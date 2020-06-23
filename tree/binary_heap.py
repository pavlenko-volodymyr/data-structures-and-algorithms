class MaxBinaryHeap:
    def __init__(self, values=None):
        self.values = values or []
    
    def insert(self, value):
        self.values.append(value)
        index = len(self.values) - 1
        parent_index = (index - 1) // 2
        while self.values[parent_index] < self.values[index] and parent_index >= 0:
            self.values[parent_index], self.values[index] = self.values[index], self.values[parent_index]
            index = parent_index
            parent_index = (index - 1) // 2

    def extract_max(self):
        if not self.values:
            return
        
        value = self.values[0]
        self.values[0] = self.values[-1]
        self.values.pop()
        if self.values:
            self.__bubble_down(0)

        return value

    def __bubble_down(self, index):
        total_values = len(self.values)
        
        while True:
            element = self.values[index]
            left_child_index = 2 * index + 1
            right_child_index = left_child_index + 1
            swap_index = None

            if left_child_index < total_values and element < self.values[left_child_index]:
                swap_index = left_child_index
            
            if (
                right_child_index < total_values and
                element < self.values[left_child_index] and
                self.values[right_child_index] > self.values[left_child_index]
            ):
                swap_index = right_child_index

            if swap_index is None:
                break

            self.values[index] = self.values[swap_index]
            self.values[swap_index] = element
            index = swap_index

    def top(self):
        return self.values[0] if self.values else None