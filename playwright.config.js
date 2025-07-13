// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Запускать тесты только для Chrome
  projects: [
    {
      name: 'Chrome',
      use: { 
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        channel: 'chrome', // Использует стабильную версию Chrome
        launchOptions: {
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox' // Для работы в контейнерах
          ]
        }
      }
    }
  ],

  // Общие настройки
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  retries: 0,
  workers: 1, // Для последовательного выполнения
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],

  // Настройки веб-сервера (если нужно)
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI
  // },

  use: {
    headless: true, // Всегда headless в CI
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'http://localhost:3000' // Укажите ваш базовый URL
  }
});