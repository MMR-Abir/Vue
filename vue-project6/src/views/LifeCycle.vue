<template>
    <h2>Component</h2>
    <p>This is the component</p>
    <p id="pResult">{{ text1 }}</p>
    <p id="pResult">{{ text2 }}</p>
</template>

<script>
export default {
	data() {
		return {
			text1: '...',
            text2: '...',
		}
	},
  beforeCreate() {
		this.text1 = 'initial text'; // This line has no effect
    console.log("beforeCreate: The component is not created yet.");
  },

  created() {
		this.text2 = 'rftgjhgth';
    console.log("created: The component just got created.");
  }
}
</script>