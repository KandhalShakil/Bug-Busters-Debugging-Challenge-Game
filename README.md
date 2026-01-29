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