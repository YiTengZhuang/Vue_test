<template>
  <div>
    <h1>I am so tired</h1>
    <PiePies />
    <Datepicker v-model="date" :previewFormat="format" />
    <p>day: {{d}}</p>
    <p>month: {{m}}</p>
    <p>year: {{y}}</p>
    <button @click="gd(date.getDate(), date.getMonth(), date.getFullYear())">Get date</button>
  </div>
</template>

<script>
  import PiePies from '@/components/epie.vue'
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  import {ref} from 'vue'
  export default{
    name: 'EpieView',
    data(){
      return{
        d: 'unknown',
        m: 'unknown',
        y: 'unknown'
      }
    },
    methods:{
      gd(day, month, year){
        this.d = day
        this.m = month + 1
        this.y = year
      }
    },
    setup(){
      const date = ref(new Date())

      const format = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `Selected date is ${day}/${month}/${year}`;
      }
      return{
        date,
        format
      }
    },
    components:{
      PiePies,
      Datepicker,
    }
  }
</script>