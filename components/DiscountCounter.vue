<template>
  <div class="">
    <div class="progress-user">
      <div
        class="relative flex items-center justify-center px-8 py-4 mx-8 rounded-lg progress-banner bg-colorSecondary dark:bg-darkColorSecondary text-end"
      >
        <div class="container">
          <div class="circular-progress">
            <span class="progress-value">0%</span>
          </div>
        </div>

        <p class="text-[0.75rem]">
          🎉 <strong class="font-medium">50% off</strong> on your first combo
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const circularProgress = document.querySelector('.circular-progress') as HTMLElement
  const progressValue = document.querySelector('.progress-value') as HTMLElement

  let progressStartValue = 0 // 0%
  const progressEndValue = 50 // 90%
  const speed = 100 // 100ms

  const progress = setInterval(():void => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#0059e0  ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`

    if (progressStartValue === progressEndValue) {
      clearInterval(progress)
    }
  }, speed)
})
</script>
<style lang="scss">

.container {
  width: 50px;
}
.circular-progress {
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: conic-gradient(#0059e0 3.6deg, #ededed 0deg);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dark .circular-progress {
  background: conic-gradient(#0059e0 3.6deg, #ededed 0deg);
}
.circular-progress::before {
  content: "";
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  @apply bg-colorSecondary
}
.dark .circular-progress::before {
  @apply bg-darkColorSecondary
}
.progress-value {
  position: relative;
  font-size: 10px;
  font-weight: 600;
  @apply text-text dark:text-darkText
}
.text {
  font-size: 30px;
  font-weight: 300;
  color: #fff;
}</style>
