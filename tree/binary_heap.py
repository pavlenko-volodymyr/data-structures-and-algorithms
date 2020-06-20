class MaxBinaryHeap:
    def __init__(self, values=None):
        self.values = values or []
    
    def insert(self, value):
        self.values.append(value)
        index = len(self.values) - 1
        parent_index = (index - 1) // 2
        while self.values[parent_index] < self.values[index]:
            self.values[parent_index], self.values[index] = self.values[index], self.values[parent_index]
            index = parent_index
    
    def extract_max(self):
        return self.values[0]