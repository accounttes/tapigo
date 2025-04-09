import { onMounted, ref, watch } from 'vue'
import type { Task } from './types'

const LOCAL_STORAGE_KEY = 'tapiga-tasks-12345'

export function useTasks() {
    const tasks = ref<Task[]>([])

    onMounted(async () => {
        const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY)

        if (localStorageData) {
            tasks.value = JSON.parse(localStorageData)
        } else {
            const res = await fetch('/src/tasks.json')
            tasks.value = await res.json()
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks.value))
        }
    })

    watch(
        tasks,
        newTasks => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
        },
        { deep: true },
    )

    return { tasks }
}
