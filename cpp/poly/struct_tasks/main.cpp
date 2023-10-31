#include <iostream>

enum class Status { NOT_STARTED, IN_PROGRESS, FINISHED };

struct Task
{
  int id = 0;
  char name[20];
  Status status;
};

bool process (Task &task) {
  if (task.status != Status::FINISHED) {
    return false;
  }
  
  task.status = static_cast<Status>(static_cast<int>(task.status) + 1);
  
  return true;
}

Task* find(Task tasks[], int size, int task_id)
{
  int i;
  for (i = 0; i < size; ++i) {
    if (static_cast<int>(tasks[i].status) == task_id) {
      return &tasks[i];
    }
  }
  return nullptr;
};

int main(int argc, const char * argv[]) {
  
  Task tasks[3] {
    { 1, "task1", Status::IN_PROGRESS },
    { 2, "task2", Status::IN_PROGRESS },
    { 3, "task3", Status::IN_PROGRESS }
  };
  
  ::process(tasks[1]);
  Task* t = find(tasks, 3, 2);
  
  
  std::cout << t->name << '\n';
}
