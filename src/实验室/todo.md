---
title: Todo List

sidebar: false
article: false
breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false

backtotop: false
---

# Todo List

<div id="app" >
  <h1>任务表(*^▽^*)</h1>
  <input v-model="newTodo" @keyup.enter="addTodo" placeholder="写下小目标，然后回车" class="input-box"/>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.done }" class="todo-item">
      <input type="checkbox" v-model="todo.done" @change="toggleTodoDone(todo)" class="checkbox"/>
      <span>{{ todo.text }}</span>
      <button @click="removeTodo(todo)" class="remove-button">Remove</button>
    </li>
  </ul>

  <h2>已完成的任务(*^▽^*)</h2>
  <ul class="todo-list">
    <li v-for="todo in completedTodos" :key="todo.id" class="todo-item done">
      <input type="checkbox" v-model="todo.done" @change="toggleTodoDone(todo)" class="checkbox"/>
      <span>{{ todo.text }}</span>
      <button @click="removeTodo(todo)" class="remove-button">Remove</button>
    </li>
  </ul>

  <h1>番茄钟(*^▽^*)</h1>
  <div class="pomodoro-timer">
    <input v-model.number="customMinutes" placeholder="记录你的时间" class="input-box"/>
    <div class="progress-circle">
      <svg width="200" height="200">
        <circle cx="100" cy="100" r="90" stroke="#ccc" stroke-width="10" fill="none"/>
        <circle cx="100" cy="100" r="90" :stroke-dasharray="circumference" :stroke-dashoffset="progress" stroke="#42b983" stroke-width="10" fill="none" class="progress"/>
      </svg>
      <div class="timer-text">{{ minutes }}:{{ seconds }}</div>
    </div>
    <button @click="startTimer" :disabled="isRunning" class="btn">Start</button>
    <button @click="resetTimer" class="btn">Reset</button>
  </div>
  <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=365 height=210 src="//music.163.com/outchain/player?type=0&id=8934718801&auto=1&height=430"></iframe>
</div>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
      completedTodos: [],
      timer: null,
      customMinutes: 25, // default 25 minutes
      time: 1500, // 25 minutes in seconds
      isRunning: false
    };
  },
  watch: {
    customMinutes(newMinutes) {
      this.time = newMinutes * 60;
    }
  },
  computed: {
    minutes() {
      return Math.floor(this.time / 60).toString().padStart(2, '0');
    },
    seconds() {
      return (this.time % 60).toString().padStart(2, '0');
    },
    circumference() {
      return 2 * Math.PI * 90;
    },
    progress() {
      return this.circumference - (this.time / (this.customMinutes * 60)) * this.circumference;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === '') return;
      this.todos.push({ id: Date.now(), text: this.newTodo, done: false });
      this.newTodo = '';
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(t => t !== todo);
      this.completedTodos = this.completedTodos.filter(t => t !== todo);
    },
    toggleTodoDone(todo) {
      if (todo.done) {
        this.todos = this.todos.filter(t => t !== todo);
        this.completedTodos.push(todo);
      } else {
        this.completedTodos = this.completedTodos.filter(t => t !== todo);
        this.todos.push(todo);
      }
    },
    startTimer() {
      if (!this.isRunning) {
        this.time = this.customMinutes * 60;
        this.isRunning = true;
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--;
          } else {
            clearInterval(this.timer);
            this.isRunning = false;
            alert("时间到啦！要自律哦！");
          }
        }, 1000);
      }
    },
    resetTimer() {
      clearInterval(this.timer);
      this.time = this.customMinutes * 60;
      this.isRunning = false;
    }
  }
};
</script>

<style scoped>
#app {
  max-width: 700px;
  margin: 0 auto;
  padding: 1em;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 200px; /* Add this line */
}

h1 {
  color: #42b983;
  margin-bottom: 20px;
  font-size: 2em;
}

h2 {
  color: #42b983;
  margin-top: 20px;
  font-size: 1.5em;
}

.input-box {
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s;
}

.todo-item.done {
  background-color: #d4edda;
}

.todo-item.done span {
  text-decoration: line-through;
  color: #999;
}

.checkbox {
  margin-right: 10px;
}

.remove-button {
  background: #ff4d4f;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

.remove-button:hover {
  background: #ff7875;
}

.pomodoro-timer {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-circle {
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.progress {
  transition: stroke-dashoffset 1s linear;
}

.timer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  font-weight: bold;
  color: #333;
}

.btn {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #36a771;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
