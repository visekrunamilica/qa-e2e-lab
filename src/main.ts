import './style.css'

type UserRole = 'admin' | 'user'
type TaskStatus = 'todo' | 'done'

interface User {
  email: string
  password: string
  displayName: string
  role: UserRole
}

interface Task {
  id: number
  title: string
  status: TaskStatus
}

const demoUser: User = {
  email: 'qa@example.com',
  password: 'cypress123',
  displayName: 'QA Student',
  role: 'admin',
}

let currentUser: User | null = null
let tasks: Task[] = [
  { id: 1, title: 'Learn Cypress selectors', status: 'todo' },
  { id: 2, title: 'Compare Cypress and Playwright', status: 'done' },
]

const appRoot = document.querySelector<HTMLDivElement>('#app')

if (!appRoot) {
  throw new Error('App root element was not found')
}

const app: HTMLDivElement = appRoot

function renderLogin(): void {
  app.innerHTML = `
    <main class="page-shell">
      <section class="card" data-testid="login-card">
        <p class="eyebrow">QA E2E Lab</p>
        <h1>Login</h1>
        <p class="muted">Use the demo account to enter the practice app.</p>

        <form data-testid="login-form">
          <label>
            Email
            <input
              data-testid="email-input"
              name="email"
              type="email"
              autocomplete="username"
              value="qa@example.com"
            />
          </label>

          <label>
            Password
            <input
              data-testid="password-input"
              name="password"
              type="password"
              autocomplete="current-password"
              value="cypress123"
            />
          </label>

          <button data-testid="login-button" type="submit">Sign in</button>
          <p class="error" data-testid="login-error" role="alert"></p>
        </form>
      </section>
    </main>
  `

  const form = app.querySelector<HTMLFormElement>('[data-testid="login-form"]')
  const error = app.querySelector<HTMLParagraphElement>('[data-testid="login-error"]')

  form?.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('password') ?? '')

    if (email === demoUser.email && password === demoUser.password) {
      currentUser = demoUser
      renderDashboard()
      return
    }

    if (error) {
      error.textContent = 'Invalid email or password'
    }
  })
}

function renderDashboard(): void {
  if (!currentUser) {
    renderLogin()
    return
  }

  app.innerHTML = `
    <main class="page-shell">
      <section class="card wide" data-testid="dashboard">
        <div class="header-row">
          <div>
            <p class="eyebrow">QA E2E Lab</p>
            <h1 data-testid="welcome-message">Welcome, ${currentUser.displayName}</h1>
            <p class="muted">Role: <strong>${currentUser.role}</strong></p>
          </div>
          <button class="secondary" data-testid="logout-button" type="button">Log out</button>
        </div>

        <form class="task-form" data-testid="task-form">
          <label>
            New task
            <input data-testid="task-input" name="task" placeholder="e.g. Practice cy.intercept()" />
          </label>
          <button data-testid="add-task-button" type="submit">Add task</button>
        </form>

        <ul class="task-list" data-testid="task-list">
          ${tasks.map(renderTask).join('')}
        </ul>
      </section>
    </main>
  `

  app.querySelector<HTMLButtonElement>('[data-testid="logout-button"]')?.addEventListener('click', () => {
    currentUser = null
    renderLogin()
  })

  const taskForm = app.querySelector<HTMLFormElement>('[data-testid="task-form"]')
  taskForm?.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(taskForm)
    const title = String(formData.get('task') ?? '').trim()

    if (!title) return

    tasks = [...tasks, { id: Date.now(), title, status: 'todo' }]
    renderDashboard()
  })

  app.querySelectorAll<HTMLButtonElement>('[data-testid="toggle-task-button"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.taskId)
      tasks = tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'todo' ? 'done' : 'todo' }
          : task,
      )
      renderDashboard()
    })
  })
}

function renderTask(task: Task): string {
  return `
    <li data-testid="task-item" data-status="${task.status}">
      <span>${task.title}</span>
      <button
        class="secondary"
        data-testid="toggle-task-button"
        data-task-id="${task.id}"
        type="button"
      >
        ${task.status === 'todo' ? 'Mark done' : 'Reopen'}
      </button>
    </li>
  `
}

renderLogin()
