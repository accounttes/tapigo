<script setup lang="ts">
import { useTasks } from './useTasks'

const { tasks } = useTasks()
</script>

<template>
    <main>
        <h1>Список задач</h1>
        <ul>
            <li v-for="task in tasks" :key="task.id" :class="{ active: task.done }">
                <h2>{{ task.title }}</h2>
                <input type="checkbox" v-model="task.done" />
            </li>
        </ul>
    </main>
</template>

<style scoped>
body {
    background: linear-gradient(135deg, #e0eafc, #cfdef3);
    font-family: 'Arial', sans-serif;
}

h1 {
    text-align: center;
    color: #4a4a4a;
    margin-bottom: 20px;
    font-size: 2.5rem;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px 20px;
    border-radius: 12px;
    border: 1px solid #b0c4de;
    width: 100%;
    max-width: 500px;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s, background-color 0.3s;
}

li:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

li.active {
    text-decoration: line-through;
    color: #aaa;
}

input {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

input[type="checkbox"] {
    accent-color: #6c63ff;
}
</style>
