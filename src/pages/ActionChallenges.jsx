import { useState } from "react";
import { Card, CardContent } from "/src/components/Card";
import { Button } from "/src/components/Button";
import { Progress } from "/src/components/Progress";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ActionChallenges() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Use reusable bags instead of plastic", completed: false, points: 10 },
    { id: 2, text: "Take public transport or cycle once a week", completed: false, points: 15 },
    { id: 3, text: "Reduce meat consumption for a week", completed: false, points: 20 },
    { id: 4, text: "Switch off appliances when not in use", completed: false, points: 5 },
    { id: 5, text: "Plant a tree", completed: false, points: 25 },
  ]);
  
  const [totalPoints, setTotalPoints] = useState(0);
  const [newChallenge, setNewChallenge] = useState("");
  const [newPoints, setNewPoints] = useState(0);

  const toggleCompletion = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        if (!task.completed) {
          setTotalPoints((prev) => prev + task.points);
        } else {
          setTotalPoints((prev) => prev - task.points);
        }
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const addChallenge = () => {
    if (newChallenge.trim() !== "" && newPoints > 0) {
      setTasks([...tasks, { id: tasks.length + 1, text: newChallenge, completed: false, points: newPoints }]);
      setNewChallenge("");
      setNewPoints(0);
    }
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 text-green-900 flex justify-center items-center !mt-15 !p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="max-w-4xl w-full bg-white rounded-3xl shadow-xl !p-8 border border-green-300"
      >
        <h1 className="text-4xl font-bold text-green-700 text-center !mb-4">🌱 Begin Your Green Journey</h1>
        <p className="text-lg text-green-600 text-center !mb-6">Complete challenges, reduce your carbon footprint, and earn points!</p>

        <Progress value={progress} className="!mb-6 bg-green-200 h-5 rounded-full" />

        <p className="text-2xl font-semibold text-green-700 text-center !mt-2 !mb-6">Total Points: {totalPoints}</p>

        <div className="!space-y-5">
          {tasks.map((task) => (
            <motion.div 
              key={task.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="!p-6 flex flex-col bg-green-50 border border-green-400 rounded-2xl shadow-md">
                <div className="flex justify-between items-center gap-4">
                  <CardContent className="!p-0 text-green-700 flex-1 text-lg">
                    {task.text} <span className="font-semibold">(Points: {task.points})</span>
                  </CardContent>
                  <Button
                    variant={task.completed ? "secondary" : "default"}
                    className={`w-full md:w-auto min-w-[120px] flex justify-center items-center transition-all duration-300 ${task.completed ? "bg-green-600 text-white" : "bg-green-500 text-white"}`}
                    onClick={() => toggleCompletion(task.id)}
                  >
                    {task.completed ? <CheckCircle className="text-white" /> : "Complete"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="!mt-8 text-center">
          <h2 className="text-2xl font-semibold text-green-700 !mb-4">Add a New Challenge</h2>
          <div className="!mt-6 text-center">
          <h2 className="text-xl font-semibold !mb-2 text-left">Add a New Challenge</h2>
          <input 
            type="text" 
            className="border !p-2 w-full !mb-2" 
            placeholder="Enter new challenge" 
            value={newChallenge} 
            onChange={(e) => setNewChallenge(e.target.value)}
          />
          <input 
            type="number" 
            className="border !p-2 w-full !mb-2" 
            placeholder="Enter points" 
            value={newPoints} 
            onChange={(e) => setNewPoints(Number(e.target.value))}
          />
          <Button onClick={addChallenge} className="bg-green-600 text-white w-full flex justify-center">Add Challenge</Button>
        </div>
        </div>
      </motion.div>
    </div>
  );
}
