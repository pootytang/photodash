<script>
  import "../../app.css";
  let { children } = $props();
</script>

<div class="relative h-screen w-full overflow-hidden">
  <!-- Background Image -->
  <img
    src="/background.jpg"
    alt="Hero background"
    class="absolute inset-0 h-full w-full object-cover"
  />

  <!-- Overlay with Centered Text -->
  <div
    class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4"
  >
    {@render children()}
  </div>
</div>

<style>
  /* Add any custom styling here if needed */
</style>
