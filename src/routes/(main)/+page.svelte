<script lang="ts">
  import { goto } from "$app/navigation";

  const gotoAuth = () => {
    goto("/auth/login");
  };
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->
<h1 class="text-4xl text-[#daac20] md:text-6xl mb-4">
  PHOTO<em>DASH</em>
</h1>
<p class="text-lg text-gray-300 md:text-xl mb-6">
  Your <span class="text-[#f97316] tracking-[2px] px-2 py-1 bg-black/50">
    1-Stop</span
  > Shop for organizing your galleries
</p>
<button onclick={gotoAuth} class="btn btn-outline btn-info">Get Started</button>
