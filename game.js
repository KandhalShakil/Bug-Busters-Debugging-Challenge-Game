// Bug Busters - Professional Algorithm Debugging Platform
class BugBustersGame {
    constructor() {
        this.score = 0;
        this.currentChallenge = 0;
        this.streak = 0;
        this.bugsFixed = 0;
        this.totalChallenges = 5;
        this.bestStreak = 0;
        this.correctAnswers = 0;
        this.hintUsed = false;
        this.editor = null;
        this.startTime = null;
        this.challengeStartTime = null;
        this.totalTime = 0;
        this.timerInterval = null;
        this.challengeTimes = [];
        
        // Epic roast messages for wrong submissions 🔥
        this.roastMessages = [
            { title: "Bhai Kya Kar Diya Tune? 😭", msg: "Tera code dekh ke toh compiler bhi rone lag gaya yaar!", gif: "https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif" },
            { title: "Are Bhai Bhai Bhai! 🤦", msg: "Itna toh mujhse bhi better code likh leta main", gif: "https://media.giphy.com/media/3xz2BLBOt13X9AgjEA/giphy.gif" },
            { title: "Kya Scene Hai Bro? 💀", msg: "Tera code toh Stack Overflow pe bhi reject ho jayega", gif: "https://media.giphy.com/media/9V8You0A1G64JmiBUi/giphy.gif" },
            { title: "Arey Yaar Seriously? 😂", msg: "Console.log() bhi tujhe support nahi kar raha ab", gif: "https://media.giphy.com/media/26tPnAAJxXTvpLwJy/giphy.gif" },
            { title: "Thoda Dimaag Lagao Bhai 🧠", msg: "404 Error: Brain.exe has stopped working", gif: "https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif" },
            { title: "Emotional Damage Ho Gaya! 💔", msg: "GitHub ne tera code dekh ke repo hi delete kar diya", gif: "https://media.giphy.com/media/ro08ZmQ1MeqZypzgDN/giphy.gif" },
            { title: "Kya Bakwas Hai Ye? 🤡", msg: "Mere paas words nahi hai is code ke liye", gif: "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif" },
            { title: "Arre Ram Ram! 🙏", msg: "Bhagwan hi bachaye ab tujhe, compiler toh haar gaya", gif: "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif" },
            { title: "Beta Maafi Maango! 😭", msg: "Python snake bhi tera code dekh ke dar gaya", gif: "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif" },
            { title: "Hatt Pagle Rulayega Kya? 😢", msg: "Tera code aise buggy hai jaise Delhi ki garmi mein bijli gayab", gif: "https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif" },
            { title: "Koi Nahi Bhai! 🤗", msg: "Sabke saath hota hai... lekin itna bura nahi 😂", gif: "https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif" },
            { title: "Abe Saale! 😠", msg: "Tera code toh production mein jaane se pehle hi mar gaya", gif: "https://media.giphy.com/media/RJAjTowsU0K1a/giphy.gif" },
            { title: "Bade Harami Ho Beta! 🎪", msg: "Semicolon toh laga deta kam se kam", gif: "https://media.giphy.com/media/l0IypeKl9NJhPFMrK/giphy.gif" },
            { title: "Bhaisaab Kamaal Kar Diya! 🔥", msg: "Ek hi try mein itna kharab code? Talent hai bhai!", gif: "https://media.giphy.com/media/3o7TKz9qcMVpfx6YdW/giphy.gif" },
            { title: "Are Waah Re Waah! 👏", msg: "Naya record bana diya tune - sabse zyada bugs in one code!", gif: "https://media.giphy.com/media/7rj2ZgttvgomY/giphy.gif" },
            { title: "Dhatt Teri Ki! 😤", msg: "Copy-paste bhi sahi se nahi kar sakta? Kya programmer banega re tu?", gif: "https://media.giphy.com/media/l41Ys1fQky5raqvMQ/giphy.gif" },
            { title: "Pagal Hai Kya? 🤪", msg: "Debugging tools ne tere code ko dekh ke quit kar diya", gif: "https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif" },
            { title: "Bachcha Hai Kya? 🍼", msg: "Hello World bhi better code tha isse toh", gif: "https://media.giphy.com/media/iJJ6E58EttmFqgLo96/giphy.gif" },
            { title: "Sharma Ji Ko Beta Dekh! 👦", msg: "Sharma ji ka beta toh pehli baar mein hi solve kar leta", gif: "https://media.giphy.com/media/a5viI92PAF89q/giphy.gif" },
            { title: "Chacha Vidhayak Hain Humare! 🎩", msg: "Lekin code toh fix nahi kar sakte na?", gif: "https://media.giphy.com/media/1guRIRW8QdSte01T6Du/giphy.gif" },
            { title: "Majak Hai Kya Bhai? 🎭", msg: "Ye code nahi, comedy show hai!", gif: "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" },
            { title: "Taubah Taubah! 😱", msg: "Itna ganda code toh maine kabhi nahi dekha", gif: "https://media.giphy.com/media/l4FGGafcOHmrlQxG0/giphy.gif" },
            { title: "Are Deva Re Deva! 🙏", msg: "Kisne sikhaaya tujhe programming?", gif: "https://media.giphy.com/media/l2JhpjWPccQhsAMfu/giphy.gif" },
            { title: "Bas Karo Bhai! ✋", msg: "Aur kitna torture karega compiler ko?", gif: "https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif" },
            { title: "Hadd Hai Yaar! 😩", msg: "Rubber duck bhi tereko debug karne se mana kar diya", gif: "https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif" },
            { title: "Kya Gazab Kar Diya! 🎪", msg: "Tera code toh meme material ban gaya bhai", gif: "https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif" },
            { title: "Oye Hoye! 🤦‍♂️", msg: "Ye code hai ya bugs ka mela?", gif: "https://media.giphy.com/media/3ohc19EK1gypvsYQgg/giphy.gif" },
            { title: "Chhodo Yaar! 👋", msg: "Isse achha toh main manually calculate kar lun", gif: "https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif" },
            { title: "Pakka Mazak Kar Raha Hai! 😆", msg: "Itna funny code toh standup comedian bhi nahi likhe", gif: "https://media.giphy.com/media/l0Iy69RBwtdmvwkIo/giphy.gif" },
            { title: "Thoda Aur Mehnat Kar Bhai! 💪", msg: "Random button dabane se code nahi banta", gif: "https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif" },
            { title: "Sach Bolu? 🤔", msg: "Tera code dekh ke AI bhi confused ho gaya", gif: "https://media.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif" },
            { title: "Lagta Hai Neend Mein Code Kiya! 😴", msg: "Uth ja bhai, ye kya ho gaya hai?", gif: "https://media.giphy.com/media/krP2NRkLqnKEg/giphy.gif" }
        ];
        
        // Epic success messages 🎉
        this.successMessages = [
            "Absolute Legend! 🎯",
            "Big Brain Time! 🧠✨",
            "You're Built Different! 💪",
            "Sheesh! Clean Code Energy! 🔥",
            "Gigachad Developer! 😎",
            "No Bugs Found, Only Features! ✅",
            "Hackerman Mode Activated! 👨‍💻",
            "Based and Debugged! 🎊",
            "POG Champion! 🏆",
            "That's What I Call Pro Gamer Move! 🎮",
            "Respect++ 📈",
            "CEO of Debugging! 💼",
            "W Developer Energy! 🔥",
            "Sigma Grindset Achieved! 💯",
            "Built Like a Stack Overflow Legend! 📚"
        ];
        
        // Skip messages
        this.skipMessages = [
            "Understandable, Have a Great Day 👋",
            "We Don't Talk About This One 🤫",
            "Strategic Retreat Accepted 🏃",
            "Living to Debug Another Day 🌅",
            "Task Failed Successfully... Wait, That's Not Right 🤔",
            "I'll Pretend I Didn't See That 🙈"
        ];
        
        this.challenges = [
            {
                id: 1,
                topic: "Binary Search",
                difficulty: "easy",
                description: "Implement a corrected version of binary search that properly handles array bounds. The current implementation causes an IndexError.",
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
    
    return -1`,
                correctCode: `def binary_search(arr, target):
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
    
    return -1`,
                testCases: [
                    { input: { arr: [1,2,3,4,5], target: 3 }, expected: 2, description: "Find element in middle" },
                    { input: { arr: [1,2,3,4,5], target: 5 }, expected: 4, description: "Find last element" },
                    { input: { arr: [1,2,3,4,5], target: 1 }, expected: 0, description: "Find first element" },
                    { input: { arr: [1,2,3,4,5], target: 6 }, expected: -1, description: "Element not found" }
                ],
                bug: "right initialized to len(arr) instead of len(arr) - 1",
                hint: "Check the initial value of the 'right' pointer. Remember that array indices are 0-based!",
                explanation: "The bug is in line 3. 'right' should be initialized to len(arr) - 1, not len(arr), because array indices range from 0 to length-1. When right = len(arr), accessing arr[mid] can cause an IndexError."
            },
            {
                id: 2,
                topic: "Merge Sort",
                difficulty: "medium",
                description: "Fix the merge function in this merge sort implementation. The function incorrectly handles array indices during merging.",
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
            result.append(right[i])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
                correctCode: `def merge_sort(arr):
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
    return result`,
                testCases: [
                    { input: { arr: [5,2,8,1,9] }, expected: [1,2,5,8,9], description: "Sort random array" },
                    { input: { arr: [1,2,3,4,5] }, expected: [1,2,3,4,5], description: "Already sorted" },
                    { input: { arr: [5,4,3,2,1] }, expected: [1,2,3,4,5], description: "Reverse sorted" }
                ],
                bug: "Using wrong index 'i' instead of 'j' when appending from right array",
                hint: "Look carefully at which array you're appending from in the else block. Are you using the correct index?",
                explanation: "The bug is on line 19. When appending from the 'right' array, it uses 'right[i]' and increments 'i', but it should use 'right[j]' and increment 'j'. This causes incorrect merging of the two sorted arrays."
            },
            {
                id: 3,
                topic: "Quick Sort",
                difficulty: "medium",
                description: "Fix the partitioning logic in this quicksort implementation that causes infinite recursion.",
                buggyCode: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi)
        quick_sort(arr, pi + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
                correctCode: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
                testCases: [
                    { input: { arr: [3,6,8,10,1,2,1] }, expected: [1,1,2,3,6,8,10], description: "Sort array with duplicates" },
                    { input: { arr: [10,7,8,9,1,5] }, expected: [1,5,7,8,9,10], description: "Sort random array" }
                ],
                bug: "Second recursive call uses 'pi' instead of 'pi - 1'",
                hint: "Check the boundaries passed to the recursive calls. Should the pivot index be included in the left partition?",
                explanation: "The bug is on line 4. The left recursive call should be quick_sort(arr, low, pi - 1), not quick_sort(arr, low, pi). Including the pivot in the left partition can cause infinite recursion when the pivot is the same as the leftmost element."
            },
            {
                id: 4,
                topic: "Dynamic Programming - Fibonacci",
                difficulty: "medium",
                description: "Fix the memoization in this Fibonacci implementation that doesn't properly cache results.",
                buggyCode: `def fibonacci(n, memo={}):
    if n <= 1:
        return n
    
    if n in memo:
        return memo[n]
    
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return memo[n]`,
                correctCode: `def fibonacci(n, memo={}):
    if n <= 1:
        return n
    
    if n in memo:
        return memo[n]
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]`,
                testCases: [
                    { input: { n: 5 }, expected: 5, description: "Fibonacci of 5" },
                    { input: { n: 10 }, expected: 55, description: "Fibonacci of 10" },
                    { input: { n: 0 }, expected: 0, description: "Base case n=0" }
                ],
                bug: "memo dictionary not passed to recursive calls",
                hint: "The memo dictionary needs to be passed along in the recursive calls. How do you ensure all recursive calls share the same cache?",
                explanation: "The bug is on line 8. The recursive calls fibonacci(n-1) and fibonacci(n-2) don't pass the memo dictionary, so each call creates its own new memo. The correct version passes memo to both recursive calls: fibonacci(n-1, memo) + fibonacci(n-2, memo)."
            },
            {
                id: 5,
                topic: "Graph - Dijkstra's Algorithm",
                difficulty: "hard",
                description: "Fix the shortest path calculation in this Dijkstra's algorithm implementation.",
                buggyCode: `import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_dist, current_node = heapq.heappop(pq)
        
        for neighbor, weight in graph[current_node]:
            distance = current_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`,
                correctCode: `import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_dist, current_node = heapq.heappop(pq)
        
        if current_dist > distances[current_node]:
            continue
        
        for neighbor, weight in graph[current_node]:
            distance = current_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`,
                testCases: [
                    { input: { graph: {0:[[1,4],[2,1]], 1:[[3,1]], 2:[[1,2],[3,5]], 3:[]}, start: 0 }, expected: {0:0, 1:3, 2:1, 3:4}, description: "Find shortest paths" }
                ],
                bug: "Missing check to skip outdated priority queue entries",
                hint: "When you pop a node from the priority queue, how do you know if this is the most recent/best distance for that node?",
                explanation: "The bug is the missing check after popping from the priority queue. Without checking if current_dist > distances[current_node], the algorithm may process outdated entries where a better path has already been found. This can lead to incorrect shortest paths and inefficiency."
            }
        ];
        
        this.init();
    }
    
    init() {
        this.initMonacoEditor();
        this.attachEventListeners();
        this.updateUI();
        
        // Initialize resizer
        this.initResizer();
    }
    
    initMonacoEditor() {
        require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
        
        require(['vs/editor/editor.main'], () => {
            this.editor = monaco.editor.create(document.getElementById('monaco-editor'), {
                value: '# Click "Start Game" to begin',
                language: 'python',
                theme: 'vs-dark',
                automaticLayout: true,
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollbar: {
                    verticalScrollbarSize: 10,
                    horizontalScrollbarSize: 10
                }
            });
        });
    }
    
    initResizer() {
        const resizer = document.querySelector('.resizer');
        const leftPanel = document.querySelector('.left-panel');
        const rightPanel = document.querySelector('.right-panel');
        
        let isResizing = false;
        
        resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            document.body.style.cursor = 'col-resize';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            
            const container = document.querySelector('.split-panel');
            const containerRect = container.getBoundingClientRect();
            const leftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
            
            if (leftWidth > 30 && leftWidth < 70) {
                leftPanel.style.width = leftWidth + '%';
                rightPanel.style.flex = '1';
            }
        });
        
        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.body.style.cursor = 'default';
        });
    }
    
    attachEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('run-tests-btn').addEventListener('click', () => this.runTests());
        document.getElementById('submit-solution-btn').addEventListener('click', () => this.submitSolution());
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('skip-challenge-btn').addEventListener('click', () => this.skipChallenge());
        document.getElementById('reset-code-btn').addEventListener('click', () => this.resetCode());
        document.getElementById('copy-buggy-btn').addEventListener('click', () => this.copyBuggyCode());
        document.getElementById('next-challenge-btn').addEventListener('click', () => this.nextChallenge());
        document.getElementById('play-again-btn').addEventListener('click', () => location.reload());
        document.getElementById('view-stats-btn').addEventListener('click', () => this.viewStats());
        
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });
        
        // Console tab switching
        document.querySelectorAll('.console-tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchConsoleTab(tab.dataset.console));
        });
        
        // Hint details tracking
        document.querySelector('.hint-details').addEventListener('toggle', (e) => {
            if (e.target.open && !this.hintUsed) {
                this.applyHintPenalty();
            }
        });
    }
    
    startGame() {
        this.score = 0;
        this.currentChallenge = 0;
        this.streak = 0;
        this.bugsFixed = 0;
        this.correctAnswers = 0;
        this.hintUsed = false;
        this.challengeTimes = [];
        
        // Hide start button, show game controls
        document.getElementById('start-btn').style.display = 'none';
        document.querySelectorAll('.btn').forEach(btn => btn.style.display = 'inline-flex');
        
        this.startTime = Date.now();
        this.startTimer();
        this.loadChallenge();
        this.updateUI();
        
        // Epic game start message 🎮
        alert("🔥 LET'S GOOOO! Time to catch some bugs! 🐞\n\nPro tip: Wrong answers = ROASTED 💀");
    }
    
    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            document.getElementById('nav-timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            if (this.challengeStartTime) {
                const challengeElapsed = Math.floor((Date.now() - this.challengeStartTime) / 1000);
                const challengeMinutes = Math.floor(challengeElapsed / 60);
                const challengeSeconds = challengeElapsed % 60;
                document.getElementById('challenge-timer').textContent = `${challengeMinutes}:${challengeSeconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }
    
    loadChallenge() {
        if (this.currentChallenge >= this.totalChallenges) {
            this.endGame();
            return;
        }
        
        const challenge = this.challenges[this.currentChallenge];
        this.hintUsed = false;
        this.challengeStartTime = Date.now();
        
        // Update challenge info
        document.getElementById('problem-title').textContent = `${challenge.id}. ${challenge.topic}`;
        document.getElementById('problem-description').textContent = challenge.description;
        document.getElementById('difficulty-badge').className = `badge badge-${challenge.difficulty}`;
        document.getElementById('difficulty-badge').textContent = challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1);
        document.getElementById('challenge-score').textContent = this.score;
        document.getElementById('challenge-timer').textContent = '0:00';
        
        // Load test cases
        this.loadTestCases(challenge.testCases);
        
        // Set hint
        document.getElementById('hint-display').textContent = challenge.hint;
        
        // Reset hint details
        const hintDetails = document.querySelector('.hint-details');
        if (hintDetails.open) hintDetails.open = false;
        
        // Set editor value
        if (this.editor) {
            this.editor.setValue(challenge.buggyCode);
        }
        
        // Reset console
        document.getElementById('results-body').innerHTML = '<div class="empty-state"><p>Run your code to see test results here</p></div>';
        this.switchConsoleTab('testcase');
        
        this.updateUI();
    }
    
    loadTestCases(testCases) {
        const container = document.getElementById('test-cases-list');
        container.innerHTML = testCases.map((tc, i) => `
            <div class="test-case">
                <div class="test-case-header">Example ${i + 1}: ${tc.description}</div>
                <div class="test-case-content">
                    <div class="test-input"><strong>Input:</strong> ${JSON.stringify(tc.input)}</div>
                    <div class="test-output"><strong>Expected Output:</strong> ${JSON.stringify(tc.expected)}</div>
                </div>
            </div>
        `).join('');
        
        // Update testcase panel
        const testcaseDisplay = document.getElementById('testcase-display');
        testcaseDisplay.innerHTML = testCases.map((tc, i) => `
            <div class="testcase-item">
                <strong>Case ${i + 1}:</strong> ${tc.description}<br>
                <span style="color: var(--text-secondary)">Input: ${JSON.stringify(tc.input)}</span>
            </div>
        `).join('');
    }
    
    applyHintPenalty() {
        if (this.hintUsed) return;
        this.score = Math.max(0, this.score - 10);
        this.hintUsed = true;
        this.updateUI();
        
        // Roast for using hint 😂
        console.log("🚨 HINT USED! -10 points. Skill issue detected! 😂");
    }
    
    switchConsoleTab(tabName) {
        document.querySelectorAll('.console-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.console === tabName);
        });
        document.querySelectorAll('.console-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `${tabName}-panel`);
        });
    }
    
    resetCode() {
        const challenge = this.challenges[this.currentChallenge];
        if (this.editor) {
            this.editor.setValue(challenge.buggyCode);
        }
    }
    
    copyBuggyCode() {
        const challenge = this.challenges[this.currentChallenge];
        if (this.editor) {
            this.editor.setValue(challenge.buggyCode);
        }
        this.switchTab('description');
    }
    
    showHint() {
        if (this.hintUsed) return;
        
        // Open the hint details
        const hintDetails = document.querySelector('.hint-details');
        if (!hintDetails.open) {
            hintDetails.open = true;
        }
    }
    
    runTests() {
        const userCode = this.editor.getValue();
        const challenge = this.challenges[this.currentChallenge];
        
        // Show loading state
        this.switchConsoleTab('result');
        document.getElementById('results-body').innerHTML = '<div class="empty-state"><p>Running tests...</p></div>';
        
        // Simulate test execution
        setTimeout(() => {
            const results = this.executeTests(userCode, challenge);
            this.displayTestResults(results, false);
        }, 500);
    }
    
    executeTests(userCode, challenge) {
        const results = {
            passed: 0,
            failed: 0,
            tests: []
        };
        
        // Normalize code for comparison
        const normalize = (code) => code.replace(/\s+/g, ' ').trim().toLowerCase();
        const userNormalized = normalize(userCode);
        const correctNormalized = normalize(challenge.correctCode);
        const buggyNormalized = normalize(challenge.buggyCode);
        
        const isCorrect = userNormalized === correctNormalized;
        const isBuggy = userNormalized === buggyNormalized;
        
        challenge.testCases.forEach((tc, i) => {
            const testResult = {
                id: i + 1,
                description: tc.description,
                input: tc.input,
                expected: tc.expected,
                passed: false,
                output: null,
                error: null
            };
            
            if (isCorrect) {
                testResult.passed = true;
                testResult.output = tc.expected;
                results.passed++;
            } else if (isBuggy) {
                testResult.passed = false;
                testResult.error = this.simulateBuggyOutput(challenge.bug);
                results.failed++;
            } else {
                // Partially correct or different bug
                testResult.passed = false;
                testResult.error = "Code doesn't match expected solution";
                results.failed++;
            }
            
            results.tests.push(testResult);
        });
        
        return results;
    }
    
    simulateBuggyOutput(bug) {
        if (bug.toLowerCase().includes('index')) return 'IndexError: list index out of range';
        if (bug.toLowerCase().includes('key')) return 'KeyError';
        if (bug.toLowerCase().includes('recursion')) return 'RecursionError: maximum recursion depth exceeded';
        return 'Incorrect output or runtime error';
    }
    
    displayTestResults(results, isSubmission) {
        const container = document.getElementById('results-body');
        const allPassed = results.failed === 0;
        
        let html = `
            <div class="result-summary">
                <div class="summary-text ${allPassed ? 'success' : 'error'}">
                    ${allPassed ? '✅ All Tests Passed!' : '❌ Some Tests Failed'}
                </div>
                <div class="summary-details">
                    ${results.passed} passed, ${results.failed} failed out of ${results.tests.length} tests
                </div>
            </div>
        `;
        
        results.tests.forEach(test => {
            html += `
                <div class="result-item">
                    <div class="result-header">
                        <div class="result-status ${test.passed ? 'success' : 'error'}">
                            ${test.passed ? '✅' : '❌'} Test ${test.id}: ${test.description}
                        </div>
                    </div>
                    <div class="result-details">
                        <div><span class="result-label">Input:</span> <span class="result-value">${JSON.stringify(test.input)}</span></div>
                        <div><span class="result-label">Expected:</span> <span class="result-value">${JSON.stringify(test.expected)}</span></div>
                        ${test.passed 
                            ? `<div><span class="result-label">Output:</span> <span class="result-value">${JSON.stringify(test.output)}</span></div>`
                            : `<div class="error"><span class="result-label">Error:</span> ${test.error}</div>`
                        }
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
        
        return allPassed;
    }
    
    submitSolution() {
        const userCode = this.editor.getValue();
        const challenge = this.challenges[this.currentChallenge];
        
        // Show loading state
        this.switchConsoleTab('result');
        document.getElementById('results-body').innerHTML = '<div class="empty-state"><p>Evaluating submission...</p></div>';
        
        setTimeout(() => {
            const results = this.executeTests(userCode, challenge);
            const allPassed = this.displayTestResults(results, true);
            
            if (allPassed) {
                this.handleCorrectSolution(challenge);
            } else {
                this.handleIncorrectSolution(challenge);
            }
        }, 500);
    }
    
    handleCorrectSolution(challenge) {
        const timeSpent = Math.floor((Date.now() - this.challengeStartTime) / 1000);
        this.challengeTimes.push(timeSpent);
        
        let points = { easy: 50, medium: 75, hard: 100 }[challenge.difficulty];
        if (!this.hintUsed) points += 25;
        if (timeSpent < 60) points += 10; // Speed bonus
        
        this.score += points;
        this.bugsFixed++;
        this.streak++;
        this.correctAnswers++;
        this.bestStreak = Math.max(this.bestStreak, this.streak);
        
        // Show transition modal with EPIC success message 🎉
        const successMsg = this.successMessages[Math.floor(Math.random() * this.successMessages.length)];
        document.getElementById('transition-icon').textContent = '🎉';
        document.getElementById('transition-title').textContent = successMsg;
        document.getElementById('transition-message').textContent = challenge.explanation;
        document.getElementById('points-earned').textContent = points;
        document.getElementById('time-taken').textContent = `${Math.floor(timeSpent / 60)}:${(timeSpent % 60).toString().padStart(2, '0')}`;
        document.getElementById('next-challenge-modal').style.display = 'flex';
        
        this.updateUI();
    }
    
    handleIncorrectSolution(challenge) {
        this.streak = 0;
        this.score = Math.max(0, this.score - 20);
        
        // ROAST THE USER WITH EPIC MEMES 🔥💀
        const roast = this.roastMessages[Math.floor(Math.random() * this.roastMessages.length)];
        
        document.getElementById('transition-icon').innerHTML = `<img src="${roast.gif}" style="width: 180px; height: 180px; object-fit: cover; border-radius: 10px; margin: 0;" alt="meme" />`;
        document.getElementById('transition-title').textContent = roast.title;
        document.getElementById('transition-message').innerHTML = `
            <center><div style="color: #ef4444; font-weight: 600; margin-bottom: 10px; font-size: 14px;">${roast.msg}</div>
            <div style="border-top: 2px solid #374151; margin: 12px 0;"></div>
            <div style="color: #9ca3af; font-size: 13px; line-height: 1.5;">${challenge.explanation}</div></center>
        `;
        document.getElementById('points-earned').textContent = '-20';
        document.getElementById('time-taken').textContent = 'Try Again!';
        document.getElementById('next-challenge-modal').style.display = 'flex';
        
        this.updateUI();
    }
    
    skipChallenge() {
        const challenge = this.challenges[this.currentChallenge];
        
        const skipMsg = this.skipMessages[Math.floor(Math.random() * this.skipMessages.length)];
        
        document.getElementById('transition-icon').textContent = '🏃';
        document.getElementById('transition-title').textContent = skipMsg;
        document.getElementById('transition-message').textContent = `Bug: ${challenge.bug}\n\n${challenge.explanation}`;
        document.getElementById('points-earned').textContent = '0';
        document.getElementById('time-taken').textContent = 'Skipped';
        document.getElementById('next-challenge-modal').style.display = 'flex';
        
        this.streak = 0;
        this.updateUI();
    }
    
    nextChallenge() {
        this.currentChallenge++;
        document.getElementById('next-challenge-modal').style.display = 'none';
        this.loadChallenge();
    }
    
    endGame() {
        clearInterval(this.timerInterval);
        this.totalTime = Math.floor((Date.now() - this.startTime) / 1000);
        
        const accuracy = Math.round((this.correctAnswers / this.totalChallenges) * 100);
        
        // Epic game over messages based on performance 🎮
        let gameOverTitle = "🎉 GG! You're Built Different!";
        if (accuracy === 100) {
            gameOverTitle = "🏆 PERFECT! Absolute Gigachad Energy! 💪";
        } else if (accuracy >= 80) {
            gameOverTitle = "🔥 Sheesh! Clean Run! 😎";
        } else if (accuracy >= 60) {
            gameOverTitle = "👍 Not Bad! Mid Tier Vibes 🎯";
        } else if (accuracy >= 40) {
            gameOverTitle = "😅 We Take Those... I Guess? 🤷";
        } else {
            gameOverTitle = "💀 Bruh... That Was Rough 😭";
        }
        
        document.getElementById('game-over-title').textContent = gameOverTitle;
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('final-bugs').textContent = this.bugsFixed;
        document.getElementById('final-streak').textContent = this.bestStreak;
        document.getElementById('final-accuracy').textContent = accuracy + '%';
        document.getElementById('final-time').textContent = `${Math.floor(this.totalTime / 60)}:${(this.totalTime % 60).toString().padStart(2, '0')}`;
        
        document.getElementById('game-over-modal').style.display = 'flex';
    }
    
    switchTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === tabName);
        });
    }
    
    updateUI() {
        document.getElementById('nav-score').textContent = this.score;
        document.getElementById('nav-challenge').textContent = `${this.currentChallenge + 1}/${this.totalChallenges}`;
        document.getElementById('nav-streak').textContent = this.streak;
        document.getElementById('challenge-score').textContent = this.score;
    }
    
    viewStats() {
        document.getElementById('game-over-modal').style.display = 'none';
        this.switchTab('submissions');
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    new BugBustersGame();
});
