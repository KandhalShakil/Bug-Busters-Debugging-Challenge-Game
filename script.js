class BugBustersGame {
    constructor() {
        this.currentLevel = 0;
        this.currentLanguage = 'python';
        this.currentCategory = 'sorting';
        this.score = 0;
        this.lives = 3;
        this.challenges = this.initializeChallenges();
        
        this.initializeGame();
    }

    initializeChallenges() {
        return {
            python: {
                sorting: [
                    {
                        title: "Sequential Search Bug",
                        description: "Fix the sequential search implementation",
                        filename: "sequential_search.py",
                        buggyCode: `def sequential_search(arr, target):
    for i in range(len(arr) + 1):
        if arr[i] == target:
            return i
    return -1

print(sequential_search([1, 3, 5, 7, 9], 5))`,
                        fixedCode: `def sequential_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

print(sequential_search([1, 3, 5, 7, 9], 5))`,
                        hint: "Check the range. Should it be len(arr) + 1 or len(arr)?",
                        points: 150
                    },
                    {
                        title: "Bubble Sort Bug",
                        description: "Fix the bubble sort optimization",
                        filename: "bubble_sort.py",
                        buggyCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12, 22]))`,
                        fixedCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12, 22]))`,
                        hint: "The outer loop should run n-1 times, and the inner loop should reduce its range as elements get sorted.",
                        points: 200
                    },
                    {
                        title: "Selection Sort Bug",
                        description: "Fix the minimum element selection",
                        filename: "selection_sort.py",
                        buggyCode: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

print(selection_sort([64, 25, 12, 22, 11]))`,
                        fixedCode: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

print(selection_sort([64, 25, 12, 22, 11]))`,
                        hint: "The inner loop should start from i+1, not i.",
                        points: 250
                    },
                    {
                        title: "Insertion Sort Bug",
                        description: "Fix the insertion logic",
                        filename: "insertion_sort.py",
                        buggyCode: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] < key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

print(insertion_sort([12, 11, 13, 5, 6]))`,
                        fixedCode: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

print(insertion_sort([12, 11, 13, 5, 6]))`,
                        hint: "Check the comparison operator in the while loop condition.",
                        points: 300
                    },
                    {
                        title: "Merge Sort Bug",
                        description: "Fix the merge function",
                        filename: "merge_sort.py",
                        buggyCode: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))`,
                        fixedCode: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))`,
                        hint: "The merge function should use <= for stable sorting.",
                        points: 350
                    }
                ],
                searching: [
                    {
                        title: "Binary Search Bug",
                        description: "Fix the array bounds error",
                        filename: "binary_search.py",
                        buggyCode: `def binary_search(arr, target):
    left = 0
    right = len(arr)
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

print(binary_search([1, 3, 5, 7, 9, 11], 7))`,
                        fixedCode: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

print(binary_search([1, 3, 5, 7, 9, 11], 7))`,
                        hint: "Right boundary should be len(arr) - 1, not len(arr).",
                        points: 250
                    }
                ],
                graph: [
                    {
                        title: "BFS Bug - Easy",
                        description: "Fix the breadth-first search queue operation",
                        filename: "bfs.py",
                        buggyCode: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    result = []
    
    while queue:
        node = queue.pop()  # Wrong operation!
        if node not in visited:
            visited.add(node)
            result.append(node)
            
            for neighbor in graph.get(node, []):
                if neighbor not in visited:
                    queue.append(neighbor)
    
    return result

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B'],
    'E': ['C']
}
print(bfs(graph, 'A'))`,
                        fixedCode: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    result = []
    
    while queue:
        node = queue.popleft()  # Use popleft() for FIFO
        if node not in visited:
            visited.add(node)
            result.append(node)
            
            for neighbor in graph.get(node, []):
                if neighbor not in visited:
                    queue.append(neighbor)
    
    return result

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B'],
    'E': ['C']
}
print(bfs(graph, 'A'))`,
                        hint: "BFS uses a queue (FIFO). Use popleft() instead of pop() to maintain breadth-first order.",
                        points: 300
                    },
                    {
                        title: "DFS Bug - Medium",
                        description: "Fix the depth-first search visited check",
                        filename: "dfs.py",
                        buggyCode: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    result = [start]
    
    for neighbor in graph.get(start, []):
        if neighbor in visited:  # Wrong condition!
            result.extend(dfs(graph, neighbor, visited))
    
    return result

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B'],
    'E': ['C']
}
print(dfs(graph, 'A'))`,
                        fixedCode: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    result = [start]
    
    for neighbor in graph.get(start, []):
        if neighbor not in visited:  # Visit unvisited neighbors
            result.extend(dfs(graph, neighbor, visited))
    
    return result

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B'],
    'E': ['C']
}
print(dfs(graph, 'A'))`,
                        hint: "DFS should only visit unvisited neighbors. Check the condition in the if statement.",
                        points: 350
                    },
                    {
                        title: "Dijkstra's Algorithm Bug - Hard",
                        description: "Fix the priority queue in shortest path algorithm",
                        filename: "dijkstra.py",
                        buggyCode: `import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    visited = set()
    pq = [(0, start)]
    
    while pq:
        current_dist, current_node = heapq.heappop(pq)
        
        if current_node in visited:
            continue
        
        visited.add(current_node)
        
        for neighbor, weight in graph[current_node].items():
            new_dist = current_dist + weight
            
            if new_dist > distances[neighbor]:  # Wrong comparison!
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))
    
    return distances

graph = {
    'A': {'B': 4, 'C': 2},
    'B': {'C': 1, 'D': 5},
    'C': {'D': 8, 'E': 10},
    'D': {'E': 2},
    'E': {}
}
print(dijkstra(graph, 'A'))`,
                        fixedCode: `import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    visited = set()
    pq = [(0, start)]
    
    while pq:
        current_dist, current_node = heapq.heappop(pq)
        
        if current_node in visited:
            continue
        
        visited.add(current_node)
        
        for neighbor, weight in graph[current_node].items():
            new_dist = current_dist + weight
            
            if new_dist < distances[neighbor]:  # Use < for shortest path
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))
    
    return distances

graph = {
    'A': {'B': 4, 'C': 2},
    'B': {'C': 1, 'D': 5},
    'C': {'D': 8, 'E': 10},
    'D': {'E': 2},
    'E': {}
}
print(dijkstra(graph, 'A'))`,
                        hint: "For shortest path, use < to update distances when a shorter path is found.",
                        points: 450
                    }
                ],
                greedy: [
                    {
                        title: "Activity Selection Bug - Easy",
                        description: "Fix the sorting criteria for greedy selection",
                        filename: "activity_selection.py",
                        buggyCode: `def activity_selection(activities):
    activities.sort(key=lambda x: x[0])  # Wrong sorting!
    selected = [activities[0]]
    last_selected = 0
    
    for i in range(1, len(activities)):
        if activities[i][0] >= activities[last_selected][1]:
            selected.append(activities[i])
            last_selected = i
    
    return selected

activities = [(1, 4), (3, 5), (0, 6), (5, 7), (8, 9)]
print(activity_selection(activities))`,
                        fixedCode: `def activity_selection(activities):
    activities.sort(key=lambda x: x[1])  # Sort by end time
    selected = [activities[0]]
    last_selected = 0
    
    for i in range(1, len(activities)):
        if activities[i][0] >= activities[last_selected][1]:
            selected.append(activities[i])
            last_selected = i
    
    return selected

activities = [(1, 4), (3, 5), (0, 6), (5, 7), (8, 9)]
print(activity_selection(activities))`,
                        hint: "For activity selection, sort by end time, not start time.",
                        points: 300
                    },
                    {
                        title: "Fractional Knapsack Bug - Medium",
                        description: "Fix the value-to-weight ratio sorting",
                        filename: "fractional_knapsack.py",
                        buggyCode: `def fractional_knapsack(capacity, items):
    items.sort(key=lambda x: x[0] / x[1])  # Wrong order!
    
    total_value = 0
    current_weight = 0
    
    for value, weight in items:
        if current_weight + weight <= capacity:
            current_weight += weight
            total_value += value
        else:
            remaining_capacity = capacity - current_weight
            total_value += (remaining_capacity / weight) * value
            break
    
    return total_value

items = [(60, 10), (100, 20), (120, 30)]  # (value, weight)
print(fractional_knapsack(50, items))`,
                        fixedCode: `def fractional_knapsack(capacity, items):
    items.sort(key=lambda x: x[0] / x[1], reverse=True)  # Descending order
    
    total_value = 0
    current_weight = 0
    
    for value, weight in items:
        if current_weight + weight <= capacity:
            current_weight += weight
            total_value += value
        else:
            remaining_capacity = capacity - current_weight
            total_value += (remaining_capacity / weight) * value
            break
    
    return total_value

items = [(60, 10), (100, 20), (120, 30)]  # (value, weight)
print(fractional_knapsack(50, items))`,
                        hint: "Sort in descending order of value-to-weight ratio for maximum profit.",
                        points: 400
                    }
                ],
                dynamic: [
                    {
                        title: "Fibonacci DP Bug - Easy",
                        description: "Fix the memoization in dynamic programming",
                        filename: "fibonacci_dp.py",
                        buggyCode: `def fibonacci(n, memo=None):
    if memo is None:
        memo = {}
    
    if n <= 1:
        return n
    
    if n in memo:
        return memo[n]
    
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)  # Missing memo parameter!
    return memo[n]

print(fibonacci(10))
print(fibonacci(35))`,
                        fixedCode: `def fibonacci(n, memo=None):
    if memo is None:
        memo = {}
    
    if n <= 1:
        return n
    
    if n in memo:
        return memo[n]
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)  # Pass memo
    return memo[n]

print(fibonacci(10))
print(fibonacci(35))`,
                        hint: "Pass the memo dictionary to recursive calls to maintain memoization.",
                        points: 300
                    },
                    {
                        title: "LCS Bug - Medium",
                        description: "Fix the Longest Common Subsequence recurrence",
                        filename: "lcs.py",
                        buggyCode: `def lcs(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1])  # Wrong operation!
    
    return dp[m][n]

print(lcs("ABCDGH", "AEDFHR"))`,
                        fixedCode: `def lcs(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])  # Use max for LCS
    
    return dp[m][n]

print(lcs("ABCDGH", "AEDFHR"))`,
                        hint: "For LCS, use max to take the maximum of two possibilities, not min.",
                        points: 400
                    },
                    {
                        title: "0/1 Knapsack Bug - Hard",
                        description: "Fix the knapsack recurrence relation",
                        filename: "knapsack_01.py",
                        buggyCode: `def knapsack_01(capacity, weights, values, n):
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                )
            else:
                dp[i][w] = dp[i][w]  # Wrong! Should copy from previous row
    
    return dp[n][capacity]

values = [60, 100, 120]
weights = [10, 20, 30]
print(knapsack_01(50, weights, values, 3))`,
                        fixedCode: `def knapsack_01(capacity, weights, values, n):
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                )
            else:
                dp[i][w] = dp[i - 1][w]  # Copy from previous row
    
    return dp[n][capacity]

values = [60, 100, 120]
weights = [10, 20, 30]
print(knapsack_01(50, weights, values, 3))`,
                        hint: "When item can't fit, copy the value from the previous row (without this item).",
                        points: 500
                    }
                ],
                backtracking: [
                    {
                        title: "N-Queens Bug - Hard",
                        description: "Fix the solution storage in backtracking",
                        filename: "n_queens.py",
                        buggyCode: `def solve_n_queens(n):
    board = [['.' for _ in range(n)] for _ in range(n)]
    solutions = []
    
    def is_safe(row, col):
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        
        for i, j in zip(range(row - 1, -1, -1), range(col - 1, -1, -1)):
            if board[i][j] == 'Q':
                return False
        
        for i, j in zip(range(row - 1, -1, -1), range(col + 1, n)):
            if board[i][j] == 'Q':
                return False
        
        return True
    
    def solve(row):
        if row == n:
            solutions.append([''.join(row) for row in board])  # Wrong! Reference issue
            return
        
        for col in range(n):
            if is_safe(row, col):
                board[row][col] = 'Q'
                solve(row + 1)
                board[row][col] = '.'
    
    solve(0)
    return solutions

print(solve_n_queens(4))`,
                        fixedCode: `def solve_n_queens(n):
    board = [['.' for _ in range(n)] for _ in range(n)]
    solutions = []
    
    def is_safe(row, col):
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        
        for i, j in zip(range(row - 1, -1, -1), range(col - 1, -1, -1)):
            if board[i][j] == 'Q':
                return False
        
        for i, j in zip(range(row - 1, -1, -1), range(col + 1, n)):
            if board[i][j] == 'Q':
                return False
        
        return True
    
    def solve(row):
        if row == n:
            solutions.append([''.join(row[:]) for row in board])  # Create deep copy
            return
        
        for col in range(n):
            if is_safe(row, col):
                board[row][col] = 'Q'
                solve(row + 1)
                board[row][col] = '.'
    
    solve(0)
    return solutions

print(solve_n_queens(4))`,
                        hint: "Use slicing [:] to create a deep copy of each row when storing solutions.",
                        points: 600
                    }
                ],
                branch: [
                    {
                        title: "0/1 Knapsack Branch & Bound Bug - Hard",
                        description: "Fix the bound calculation and max value update",
                        filename: "knapsack_bb.py",
                        buggyCode: `def knapsack_bb(capacity, weights, values, n):
    max_value = 0
    
    def bound(i, current_weight, current_value):
        if current_weight >= capacity:
            return 0
        
        bound_value = current_value
        remaining_capacity = capacity - current_weight
        
        for j in range(i, n):
            if remaining_capacity <= 0:
                break
            if weights[j] <= remaining_capacity:
                bound_value += values[j]
                remaining_capacity -= weights[j]
            else:
                bound_value += (remaining_capacity / weights[j]) * values[j]
                break
        
        return bound_value
    
    def solve(i, current_weight, current_value):
        nonlocal max_value
        
        if i == n:
            max_value = min(max_value, current_value)  # Wrong operation!
            return
        
        if bound(i, current_weight, current_value) <= max_value:
            return
        
        if current_weight + weights[i] <= capacity:
            solve(i + 1, current_weight + weights[i], current_value + values[i])
        
        solve(i + 1, current_weight, current_value)
    
    solve(0, 0, 0)
    return max_value

values = [60, 100, 120]
weights = [10, 20, 30]
print(knapsack_bb(50, weights, values, 3))`,
                        fixedCode: `def knapsack_bb(capacity, weights, values, n):
    max_value = 0
    
    def bound(i, current_weight, current_value):
        if current_weight >= capacity:
            return 0
        
        bound_value = current_value
        remaining_capacity = capacity - current_weight
        
        for j in range(i, n):
            if remaining_capacity <= 0:
                break
            if weights[j] <= remaining_capacity:
                bound_value += values[j]
                remaining_capacity -= weights[j]
            else:
                bound_value += (remaining_capacity / weights[j]) * values[j]
                break
        
        return bound_value
    
    def solve(i, current_weight, current_value):
        nonlocal max_value
        
        if i == n:
            max_value = max(max_value, current_value)  # Use max to update best value
            return
        
        if bound(i, current_weight, current_value) <= max_value:
            return
        
        if current_weight + weights[i] <= capacity:
            solve(i + 1, current_weight + weights[i], current_value + values[i])
        
        solve(i + 1, current_weight, current_value)
    
    solve(0, 0, 0)
    return max_value

values = [60, 100, 120]
weights = [10, 20, 30]
print(knapsack_bb(50, weights, values, 3))`,
                        hint: "Use max to update the maximum value found so far, not min.",
                        points: 600
                    }
                ],
                string: [
                    {
                        title: "Naive String Matching Bug - Easy",
                        description: "Fix the loop boundary in string matching",
                        filename: "naive_string.py",
                        buggyCode: `def naive_string_match(text, pattern):
    matches = []
    n, m = len(text), len(pattern)
    
    for i in range(n - m):  # Wrong boundary!
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1
        
        if j == m:
            matches.append(i)
    
    return matches

print(naive_string_match("ABABDABACDABABCABCABCABCABC", "ABABCAB"))`,
                        fixedCode: `def naive_string_match(text, pattern):
    matches = []
    n, m = len(text), len(pattern)
    
    for i in range(n - m + 1):  # Include the last possible position
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1
        
        if j == m:
            matches.append(i)
    
    return matches

print(naive_string_match("ABABDABACDABABCABCABCABCABC", "ABABCAB"))`,
                        hint: "Loop should go up to and include n - m to check the last possible position.",
                        points: 300
                    },
                    {
                        title: "KMP Algorithm Bug - Hard",
                        description: "Fix the LPS array computation in KMP",
                        filename: "kmp.py",
                        buggyCode: `def kmp_search(text, pattern):
    lps = compute_lps(pattern)
    matches = []
    i = j = 0
    
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == len(pattern):
            matches.append(i - j)
            j = lps[j - 1]
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return matches

def compute_lps(pattern):
    lps = [0] * len(pattern)
    length = 0
    i = 1
    
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length + 1]  # Wrong index!
            else:
                lps[i] = 0
                i += 1
    
    return lps

print(kmp_search("ABABDABACDABABCABCABCABCABC", "ABABCAB"))`,
                        fixedCode: `def kmp_search(text, pattern):
    lps = compute_lps(pattern)
    matches = []
    i = j = 0
    
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == len(pattern):
            matches.append(i - j)
            j = lps[j - 1]
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return matches

def compute_lps(pattern):
    lps = [0] * len(pattern)
    length = 0
    i = 1
    
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]  # Correct: use length - 1
            else:
                lps[i] = 0
                i += 1
    
    return lps

print(kmp_search("ABABDABACDABABCABCABCABCABC", "ABABCAB"))`,
                        hint: "In compute_lps, use lps[length - 1] to get the previous longest prefix suffix.",
                        points: 500
                    }
                ]
            }
        };
    }

    initializeGame() {
        this.updateDisplay();
        this.loadChallenge();
        this.bindEvents();
        
        // Debug: Log the first challenge
        console.log('Game initialized with:', this.challenges.python.sorting[0]);
    }

    bindEvents() {
        document.getElementById('check-btn').addEventListener('click', () => this.checkSolution());
        document.getElementById('next-btn').addEventListener('click', () => this.nextChallenge());
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('reset-btn').addEventListener('click', () => this.resetCode());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
        
        // Category selector
        document.getElementById('category-select').addEventListener('change', (e) => this.switchCategory(e.target.value));
        
        // Allow Enter key to check solution
        document.getElementById('code-input').addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.checkSolution();
            }
        });
    }

    switchCategory(category) {
        this.currentCategory = category;
        this.currentLevel = 0;
        this.loadChallenge();
        this.clearFeedback();
    }

    clearFeedback() {
        document.getElementById('feedback').textContent = '';
        document.getElementById('feedback').className = 'feedback';
        document.getElementById('hint-panel').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('check-btn').style.display = 'inline-block';
        document.getElementById('hint-btn').style.display = 'inline-block';
        document.getElementById('reset-btn').style.display = 'inline-block';
    }

    updateDisplay() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('level').textContent = this.currentLevel + 1;
        
        const heartsArray = ['❤️', '💔'];
        let livesDisplay = '';
        for (let i = 0; i < 3; i++) {
            livesDisplay += i < this.lives ? heartsArray[0] : heartsArray[1];
        }
        document.getElementById('lives').textContent = livesDisplay;
    }

    loadChallenge() {
        const challenges = this.challenges[this.currentLanguage][this.currentCategory];
        if (!challenges || this.currentLevel >= challenges.length) {
            this.gameComplete();
            return;
        }

        const challenge = challenges[this.currentLevel];
        
        document.getElementById('challenge-title').textContent = challenge.title;
        document.getElementById('challenge-description').textContent = challenge.description;
        document.getElementById('filename').textContent = challenge.filename;
        document.getElementById('code-input').value = challenge.buggyCode;
        
        // Clear feedback and hide hint
        this.clearFeedback();
    }

    checkSolution() {
        const userCode = document.getElementById('code-input').value.trim();
        const challenges = this.challenges[this.currentLanguage][this.currentCategory];
        const challenge = challenges[this.currentLevel];
        const expectedCode = challenge.fixedCode.trim();
        
        // Normalize whitespace for comparison
        const normalizeCode = (code) => {
            return code.replace(/\s+/g, ' ').replace(/\s*([{}();,])\s*/g, '$1');
        };
        
        const normalizedUserCode = normalizeCode(userCode);
        const normalizedExpectedCode = normalizeCode(expectedCode);
        
        const feedback = document.getElementById('feedback');
        
        if (normalizedUserCode === normalizedExpectedCode) {
            // Correct solution
            this.score += challenge.points;
            feedback.textContent = `🎉 Excellent! You found and fixed the bug! +${challenge.points} points`;
            feedback.className = 'feedback success';
            
            document.getElementById('check-btn').style.display = 'none';
            document.getElementById('next-btn').style.display = 'inline-block';
            
            this.updateDisplay();
        } else {
            // Incorrect solution
            this.lives--;
            
            if (this.lives <= 0) {
                feedback.textContent = '💀 Game Over! You ran out of lives. Try again!';
                feedback.className = 'feedback error';
                setTimeout(() => this.restartGame(), 2000);
            } else {
                feedback.textContent = `❌ Not quite right. Try again! Lives remaining: ${this.lives}`;
                feedback.className = 'feedback error';
            }
            
            this.updateDisplay();
        }
    }

    nextChallenge() {
        this.currentLevel++;
        document.getElementById('check-btn').style.display = 'inline-block';
        this.loadChallenge();
        this.updateDisplay();
    }

    showHint() {
        // Check if player has enough score for hint
        if (this.score <= 0) {
            const feedback = document.getElementById('feedback');
            feedback.textContent = '❌ You need points to use hints! Solve a challenge first.';
            feedback.className = 'feedback error';
            return;
        }

        const challenges = this.challenges[this.currentLanguage][this.currentCategory];
        const challenge = challenges[this.currentLevel];
        const hintPanel = document.getElementById('hint-panel');
        const hintText = document.getElementById('hint-text');
        
        hintText.textContent = challenge.hint;
        hintPanel.style.display = 'block';
        
        // Deduct points for using hint
        this.score = Math.max(0, this.score - 25);
        this.updateDisplay();
        
        const feedback = document.getElementById('feedback');
        feedback.textContent = '💡 Hint revealed! (-25 points)';
        feedback.className = 'feedback info';
    }

    resetCode() {
        const challenges = this.challenges[this.currentLanguage][this.currentCategory];
        const challenge = challenges[this.currentLevel];
        document.getElementById('code-input').value = challenge.buggyCode;
        
        const feedback = document.getElementById('feedback');
        feedback.textContent = '🔄 Code reset to original state';
        feedback.className = 'feedback info';
    }

    gameComplete() {
        document.querySelector('.challenge-area').style.display = 'none';
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('final-score').textContent = this.score;
    }

    restartGame() {
        this.currentLevel = 0;
        this.currentLanguage = 'python';
        this.currentCategory = 'sorting';
        this.score = 0;
        this.lives = 3;
        
        // Reset category selector
        document.getElementById('category-select').value = 'sorting';
        
        document.querySelector('.challenge-area').style.display = 'block';
        document.getElementById('game-over').style.display = 'none';
        document.getElementById('check-btn').style.display = 'inline-block';
        
        this.updateDisplay();
        this.loadChallenge();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new BugBustersGame();
});

// Add some fun console messages
console.log('🐛 Welcome to Bug Busters!');
console.log('💡 Tip: Use Ctrl+Enter to quickly check your solution!');
console.log('🎯 Find and fix the bugs to advance through the levels!');