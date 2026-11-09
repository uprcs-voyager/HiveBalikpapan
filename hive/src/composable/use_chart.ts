import { onMounted, onUnmounted, type Ref } from 'vue'
import Chart from 'chart.js/auto'

export function useChart(canvasRef: Ref<HTMLCanvasElement | null>, chartConfig: any) {
  let chartInstance: Chart | null = null

  onMounted(() => {
    if (!canvasRef.value) return
    chartInstance = new Chart(canvasRef.value, chartConfig)
  })

  onUnmounted(() => {
    if (chartInstance) {
      chartInstance.destroy()
    }
  })

  return { chartInstance }
}
