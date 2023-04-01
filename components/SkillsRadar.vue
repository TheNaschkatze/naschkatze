<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'vue-chartjs';
import KatzeTypography from "~/components/Ui/KatzeTypography.vue";

const darkModeStore = useDarkModeStore()

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const chartData = {
  labels: [
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'Tailwind CSS',
    'SCSS',
    'PHP',
    'Laravel',
    'Symfony',
    'Node.js',
    'Nest.js',
  ],
  datasets: [
    {
      label: 'Frontend',
      data: [4, 3, 3, 2, 2, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(0, 124, 240, 0.2)',
      borderColor: 'rgba(0, 124, 240, 1)',
      pointBackgroundColor: 'rgba(0, 124, 240, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 124, 240, 1)',
    },
    {
      label: 'Backend',
      data: [0, 0, 0, 0, 0, 0.5, 0.5, 0.5, 0.5, 0.5],
      backgroundColor: 'rgba(121, 40, 202, 0.2)',
      borderColor: 'rgba(121, 40, 202, 1)',
      pointBackgroundColor: 'rgba(121, 40, 202, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(121, 40, 202, 1)',
    },
  ],
};
const chartOptions = ref({
  responsive: false,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: {
        color: darkModeStore.isEnabled ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.1)',
      },
      ticks: {
        color: darkModeStore.isEnabled ? 'white' : 'black',
      },
    },
  },
});
</script>

<template>
  <KatzeTypography element="h2">
    Coding Skills in years of experience
  </KatzeTypography>
  <Radar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>
