<<<<<<< HEAD
# 🐛 Bug Busters - Debugging Challenge Game

An educational debugging game where you find and fix bugs in algorithm implementations from your DAA (Design and Analysis of Algorithms) course!

## 🎮 Game Features

### Core Gameplay
- **10 Algorithm Challenges** covering major DAA topics
- **Find & Fix Bugs** in code implementations
- **Three Difficulty Levels**: Easy, Medium, and Hard
- **Hint System** - Get help when stuck (costs 10 points)
- **Streak System** - Build consecutive correct answers
- **Real-time Feedback** - Learn from your mistakes

### Covered Algorithms
1. 🔍 **Binary Search** - Array searching
2. 🔀 **Merge Sort** - Divide and conquer sorting
3. ⚡ **Quick Sort** - Partition-based sorting
4. 🔢 **Fibonacci (DP)** - Dynamic programming with memoization
5. 🗺️ **Dijkstra's Algorithm** - Shortest path finding
6. 🌲 **Depth-First Search** - Graph traversal
7. 📊 **Breadth-First Search** - Level-order traversal
8. 💰 **Knapsack Problem** - Dynamic programming optimization
9. 🗼 **Tower of Hanoi** - Recursive problem solving
10. 📝 **Longest Common Subsequence** - String DP algorithms

### Scoring System
- **Easy Bugs**: 50 points (75 without hints)
- **Medium Bugs**: 75 points (100 without hints)
- **Hard Bugs**: 100 points (125 without hints)
- **Hints**: -10 points
- **Wrong Answer**: -20 points
- **Streak Bonus**: Track consecutive correct answers

## 🚀 How to Play

1. Open [index.html](index.html) in your browser
2. Click **Start New Game** to begin
3. Read the buggy code carefully
4. Identify the bug and type/paste the corrected code
5. Click **Submit Answer** to check your solution
6. Use **Get Hint** if you're stuck
7. Move to the next challenge with **Next Challenge**

## 🎯 Game Modes

### Standard Mode (Current)
- 10 randomized challenges from all topics
- Mixed difficulty levels
- Learn while you play!

## 📋 Common Bug Types

The game teaches you to identify:
- **Off-by-one errors** (array indexing)
- **Missing parameters** in recursive calls
- **Incorrect variable usage** in loops
- **Wrong index calculations** in DP tables
- **Improper initialization** of data structures
- **Logic errors** in conditionals

## 🎓 Learning Outcomes

By playing this game, you will:
1. ✅ Improve debugging skills for algorithm implementations
2. ✅ Understand common pitfalls in algorithm coding
3. ✅ Reinforce DAA concepts through practical examples
4. ✅ Learn to read and analyze code critically
5. ✅ Develop attention to detail in programming

## 🏆 High Scores

The game tracks:
- **Total Score** - Based on challenges solved
- **Bugs Fixed** - Number of correct solutions
- **Best Streak** - Longest consecutive correct answers
- **Accuracy** - Percentage of challenges solved correctly
- **Date** - When the score was achieved

Scores are saved in your browser's local storage!

## 💡 Tips for Success

1. **Read Carefully** - Look at every line of code
2. **Understand the Algorithm** - Know what it should do
3. **Check Edge Cases** - Array bounds, base cases, etc.
4. **Test Mentally** - Walk through the code with an example
5. **Use Hints Wisely** - They cost points but help you learn
6. **Learn from Mistakes** - Read the explanations carefully

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Structure and layout
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Game logic (ES6+)
- **LocalStorage API** - Persistent high scores

### Code Structure
- **BugBustersGame Class** - Main game controller
- **Challenge Objects** - Contains buggy code, correct code, hints, and explanations
- **Validation System** - Compares user solutions with correct implementations
- **UI Management** - Dynamic updates and feedback

## 📚 Educational Value

Perfect for:
- **Computer Science Students** studying algorithms
- **Coding Interview Preparation** - Common bug patterns
- **Algorithm Course Practice** - DAA reinforcement
- **Self-learning Programmers** - Debugging skills
- **Teaching Tools** - Classroom demonstrations

## 🎨 Features Highlight

- ✨ Clean, modern UI design
- 🎯 Interactive code debugging
- 🏆 Persistent leaderboard
- 💡 Context-sensitive hints
- 📊 Progress tracking
- 🎪 Difficulty progression
- 💯 Detailed explanations

## 🔧 Customization

You can easily modify:
- **Add new challenges** - Extend the `challenges` array
- **Change scoring** - Modify point values
- **Adjust difficulty** - Balance challenge distribution
- **Customize UI** - Update CSS styling
- **Add categories** - Group challenges by topic

## 📖 Challenge Format

Each challenge includes:
```javascript
{
    topic: "Algorithm Name",
    difficulty: "easy/medium/hard",
    description: "What to do",
    buggyCode: "Code with bug",
    correctCode: "Fixed code",
    bug: "Short description",
    hint: "Helpful clue",
    explanation: "Detailed explanation"
}
```

## 🎯 Perfect For

- 📘 **DAA Course Students** - Practice course concepts
- 🎓 **Interview Prep** - Common coding mistakes
- 👨‍💻 **Developers** - Sharpen debugging skills
- 👩‍🏫 **Educators** - Teaching tool for algorithms
- 🎮 **Gamified Learning** - Fun way to study

## 🌟 Future Enhancements

Potential additions:
- Multiple choice bug selection
- Timed mode for extra challenge
- Category-specific challenges
- Multiplayer competition
- Code execution testing
- More algorithm topics

## 📊 Statistics Tracked

- ✅ Total score
- ✅ Challenges completed
- ✅ Current streak
- ✅ Best streak
- ✅ Accuracy percentage
- ✅ Bugs fixed total
- ✅ Historical performance

---

**Learn algorithms while having fun! Start debugging now! 🐛🔍**
=======
# Algorithm Performance Analyzer

A comprehensive web-based debugging challenge game designed to help students master algorithm debugging skills through interactive Python challenges.

## 🎯 Overview

The Algorithm Performance Analyzer is an educational game that presents students with buggy Python algorithm implementations across multiple categories. Players must identify and fix bugs to advance through progressively challenging levels while earning points and maintaining lives.

## 🚀 Features

### 🐍 Python-Focused Learning
- **Pure Python Challenges**: All algorithm implementations use Python syntax and conventions
- **Real-World Bugs**: Common programming errors that students encounter in practice
- **Educational Hints**: Contextual hints to guide learning without giving away solutions

### 🎮 Gamification Elements
- **Scoring System**: Earn points for correct solutions (150-600 points per challenge)
- **Lives System**: 3 lives per game session with game over mechanics
- **Progressive Difficulty**: Easy → Medium → Hard challenges within each category
- **Hint System**: Strategic hint usage with point deduction (25 points)

### 📚 Algorithm Categories

1. **🔄 Sorting Algorithms** (6 challenges)
   - Sequential Search, Bubble Sort, Selection Sort, Insertion Sort, Merge Sort
   
2. **🔍 Searching Algorithms** (1 challenge)
   - Binary Search with boundary condition bugs
   
3. **🌐 Graph Algorithms** (3 challenges)
   - BFS (Breadth-First Search), DFS (Depth-First Search), Dijkstra's Algorithm
   
4. **💰 Greedy Algorithms** (2 challenges)
   - Activity Selection, Fractional Knapsack
   
5. **🔄 Dynamic Programming** (3 challenges)
   - Fibonacci with Memoization, Longest Common Subsequence, 0/1 Knapsack
   
6. **🔙 Backtracking** (1 challenge)
   - N-Queens Problem with solution storage bugs
   
7. **🌳 Branch & Bound** (1 challenge)
   - 0/1 Knapsack optimization with bound calculation errors
   
8. **🔤 String Matching** (2 challenges)
   - Naive String Matching, KMP Algorithm with LPS array bugs

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Modern CSS with Flexbox/Grid, Inter font family
- **Design**: Responsive design with glassmorphism effects
- **Icons**: Emoji-based UI elements and favicon

## 📁 Project Structure

```
Algorithm-Performance-Analyzer/
├── index.html          # Main HTML structure
├── script.js           # Game logic and challenge data
├── styles.css          # Modern CSS styling
└── README.md           # Project documentation
```

## 🎯 Learning Objectives

Students will learn to:
- **Identify Common Bugs**: Recognize typical programming errors in algorithms
- **Debug Systematically**: Develop structured debugging approaches
- **Understand Algorithm Logic**: Grasp the core logic behind classic algorithms
- **Optimize Code**: Learn about algorithm efficiency and optimization
- **Problem-Solving Skills**: Enhance analytical thinking through guided challenges

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KandhalShakil/Algorithm-Performance-Analyzer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Algorithm-Performance-Analyzer
   ```

3. Open `index.html` in your web browser:
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

### Usage
1. **Select Category**: Choose an algorithm category from the dropdown
2. **Read Challenge**: Understand the bug description and examine the code
3. **Fix the Bug**: Edit the code to resolve the identified issue
4. **Check Solution**: Submit your fix and receive immediate feedback
5. **Use Hints Wisely**: Get help when needed (costs 25 points)
6. **Progress Through Levels**: Complete challenges to unlock harder ones

## 🎮 Game Mechanics

### Scoring System
- **Correct Solution**: +150 to +600 points (based on difficulty)
- **Hint Usage**: -25 points per hint
- **Hint Restriction**: Must have points to use hints

### Lives System
- **Starting Lives**: 3 lives per game
- **Life Loss**: Incorrect solution costs 1 life
- **Game Over**: When all lives are lost
- **Restart**: Full game reset available

### Challenge Progression
- **Linear Progression**: Complete current challenge to unlock next
- **Category Switching**: Switch between algorithm categories anytime
- **Difficulty Scaling**: Challenges get progressively harder within categories

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with Inter font
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Visual Feedback**: Color-coded success/error messages
- **Code Editor**: Syntax-highlighted textarea for code editing
- **Progress Tracking**: Real-time score, level, and lives display

## 🔧 Technical Implementation

### Code Normalization
- Whitespace-agnostic comparison for solution validation
- Flexible code formatting acceptance
- Robust string matching algorithms

### Challenge Structure
```javascript
{
    title: "Challenge Name",
    description: "Bug description",
    filename: "file.py",
    buggyCode: "// Buggy implementation",
    fixedCode: "// Correct implementation", 
    hint: "Helpful guidance",
    points: 300
}
```

### Event Handling
- Keyboard shortcuts (Ctrl+Enter for quick submission)
- Category switching with state management
- Dynamic UI updates based on game state

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-challenge`
3. **Add new challenges** or improve existing ones
4. **Test thoroughly** to ensure bugs are educational and fixable
5. **Submit a pull request** with detailed description

### Adding New Challenges
1. Follow the existing challenge structure in `script.js`
2. Ensure bugs are educational and represent common mistakes
3. Provide clear, helpful hints
4. Test both buggy and fixed code implementations
5. Assign appropriate point values based on difficulty

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kandhal Shakil**
- GitHub: [@KandhalShakil](https://github.com/KandhalShakil)
- Repository: [Algorithm-Performance-Analyzer](https://github.com/KandhalShakil/Algorithm-Performance-Analyzer)

## 🙏 Acknowledgments

- Inspired by the need for interactive algorithm learning tools
- Built for educational purposes to enhance debugging skills
- Designed with modern web development best practices

## 📊 Project Stats

- **Total Challenges**: 19 algorithm debugging challenges
- **Categories**: 8 different algorithm categories
- **Difficulty Levels**: Easy, Medium, Hard progression
- **Point Range**: 150-600 points per challenge
- **Languages**: Python-focused implementations

---

**Happy Debugging! 🐛→✅**
>>>>>>> fcb1cf1949ed4cb881dc687e22c0c29182f6dfe6
