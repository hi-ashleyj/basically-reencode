<script lang="ts">
	import '../app.css';
	import { Navigation } from "@skeletonlabs/skeleton-svelte";
    import ReadinessScore from "@ajwdmedia/svelterial-symbols/Outlined/ReadinessScore.svelte";
    import EventList from "@ajwdmedia/svelterial-symbols/Outlined/EventList.svelte";
    import Files from "@ajwdmedia/svelterial-symbols/Outlined/Files.svelte";
	import { page } from "$app/state"; 

    import "@fontsource/roboto";
    import "@fontsource/comfortaa";
    import "@fontsource/inconsolata";
	
	let { children } = $props();
</script>

<div class="h-full grid grid-cols-[auto_1fr]">

    <Navigation.Rail>
        {#snippet tiles()}
            <Navigation.Tile href="/" label="Status" selected={page.route.id === "/"}><ReadinessScore fill={page.route.id === "/" ? "black" : "white"} size="2.5em" /></Navigation.Tile>
            <Navigation.Tile href="/queue" label="Queue" selected={page.route.id?.startsWith("/queue")}><EventList fill={page.route.id?.startsWith("/queue") ? "black" : "white"} size="2.5em" /></Navigation.Tile>
            <Navigation.Tile href="/files" label="Files" selected={page.route.id?.startsWith("/files")}><Files fill={page.route.id?.startsWith("/files") ? "black" : "white"} size="2.5em" /></Navigation.Tile>
        {/snippet}
    </Navigation.Rail>

    {@render children()}

</div>


