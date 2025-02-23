// # React Task Tracker

import TaskCard from "./components/TaskCard"

// ## What I Learned:
// 1. **Props:** Used to pass task data into the TaskCard component. -Not Started
// 2. **Conditional Rendering:** Show ✅ or ❌ depending on task completion. - DONE
// 3. **List Rendering:** Used `.map()` to render tasks dynamically. -DONE
// 4. **Click Events:** Click to mark a task as done or delete it. - DONE
// 5. **useState Hooks:** Stored and updated the task list dynamically. -DONE
// 6. **onChange Events:** Captured user input to add new tasks. -DONE

function App() {



  return (
    <>
    <TaskCard/>
    </>
  )
}

export default App
