<script setup>
import Todo from './Todo.vue'
</script>

<template>

  <h2>Dynamisk Chart för min vue.js (nyhets)sida</h2>
  <p>ps. Börja clicka lite på checkmarks så kmr den rätta sig..</p>

  <canvas id="myChart" width="500" height="500"></canvas>

  <!-- <Todo @checkmark-incremented="onCheckmarkIncremented" /> -->
  <Todo @checkmark-incremented="checked = $event" />

</template>

<script>

import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      checked: 0,
      total: 23
    }
  },
  methods: {
    onCheckmarkIncremented(kravnummret) {
      console.log(`Värdet har ändrats till ${kravnummret}! och total är ${this.total} och krav är ${kravnummret}`)
      return kravnummret
    }
  },
  mounted() {

    // this.checkade = this.onCheckmarkIncremented()

    const data = {
      labels: [
        'Done',
        'not  Done'
      ],
      datasets: [{
        label: 'Uppnådda samt ej uppnådda Krav',
        data: [this.total, this.checked],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)'
        ],
        hoverOffset: 4
      }]
    };


    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
    });
    myChart;

    this.$watch('checked', (newValue, oldValue) => {
      myChart.data.datasets[0].data = [newValue, this.total - newValue];
      myChart.update();
    });
  }
}
</script>

<style scoped>
h2 {
  margin-top: 15vh;
  padding: 10px;
}

p {
  font-size: 0.7em;
  margin: 10px;
}

#myChart {
  max-width: 500px;
  max-height: 500px;
  display: flex;
  margin: 5px auto;
}
</style>
