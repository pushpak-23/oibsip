<template>
  <div class="app">
    <main class="main">
      <h1 class="heading">Temperature Converter</h1>
      <div class="input-container">
        <input class="input" type="number" v-model="inputTemp" />
        <label for="temperature">Choose unit:</label>
        <select name="temp" id="units" v-model="targetUnit">
          <option value="fahrenheit">Fahrenheit</option>
          <option value="celsius">Celsius</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>
      <button class="btn" @click="convertTemperature">Convert</button>
      <div class="result-container">
        <p class="result">{{ convertedTemp }} {{ targetUnit }}</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTemp: 0,
      targetUnit: "fahrenheit",
      convertedTemp: 0,
    };
  },
  methods: {
    convertTemperature() {
      if (this.targetUnit === "fahrenheit") {
        this.convertedTemp = (this.inputTemp * 9) / 5 + 32;
      } else if (this.targetUnit === "celsius") {
        this.convertedTemp = ((this.inputTemp - 32) * 5) / 9;
      } else if (this.targetUnit === "kelvin") {
        this.convertedTemp = this.inputTemp + 273.15;
      }
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 100% of the viewport height */
  overflow: hidden; /* Disable scrolling */
}

.main {
  text-align: center;
}

.heading {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
}

.input[type="number"] {
  font-size: 20px;
  display: block;
  color: rgb(34, 34, 34);
  background: linear-gradient(
    142.99deg,
    rgba(217, 217, 217, 0.63) 15.53%,
    rgba(243, 243, 243, 0.63) 88.19%
  );
  box-shadow: 0px 12px 24px -1px rgba(0, 0, 0, 0.18);
  border-color: rgba(7, 4, 14, 0);
  border-radius: 50px;
  block-size: 20px;
  margin: 7px auto;
  padding: 18px 15px;
  outline: none;
  text-align: center;
  width: 200px;
  transition: 0.5s;
}

.input[type="number"]:hover {
  width: 240px;
}

.input[type="number"]:focus {
  width: 280px;
}

label {
  margin-top: 15px;
  padding-top: 10px;
}

.btn {
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
}

.btn:active {
  scale: 0.92;
}

.btn:hover {
  background: rgb(2, 29, 78);
  background: linear-gradient(
    270deg,
    rgba(2, 29, 78, 0.681) 0%,
    rgba(31, 215, 232, 0.873) 60%
  );
  color: rgb(4, 4, 38);
}

.result-container {
  margin-top: 20px;
  font-size: 24px;
}

.result {
  font-size: 24px;
  font-weight: bold;
}
</style>
