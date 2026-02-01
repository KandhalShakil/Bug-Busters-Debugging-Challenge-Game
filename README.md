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
