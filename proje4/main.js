const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Görevleri yükle
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task));
}

// Görevi DOM'a ekle
function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.textContent = task;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Sil';
  deleteBtn.onclick = () => removeTask(task);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Görev ekle
addTaskBtn.onclick = () => {
  const task = taskInput.value.trim();
  if (task) {
    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = '';
  }
};

// Görevi kaydet
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Görevi sil
function removeTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  taskList.innerHTML = '';
  loadTasks();
}

loadTasks();