<script lang="ts">

    import { Progress } from '@skeletonlabs/skeleton-svelte';
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();

</script>


<div class="h-full p-6 grid grid-cols-2 gap-6 grid-rows-[max-content_2fr_1fr]">
    <div class="col-span-2 card preset-filled-surface-100-900 p-6 grid gap-4 grid-rows-[max-content_1fr] items-end">
        <div class="w-full grid grid-cols-[1fr_max-content]">
            <div class="font-heading-token text-2xl font-heading">progress</div>
        </div>
        <div class="p-4 card preset-filled-surface-50-950 h-max">
            <Progress value={0.6} max={1} height="h-4" meterClasses="construction-gradient">21:27 / 34:57</Progress>
        </div>
    </div>

    <div class="card preset-filled-surface-100-900 p-6 grid gap-4 grid-rows-[max-content_1fr]">
        <div class="font-heading-token text-2xl font-heading">queue</div>
        <div class="grid card preset-filled-surface-50-950 place-items-center">
            <div>Nothing Queued</div>
        </div>
    </div>

    <div class="card preset-filled-surface-100-900 p-6 grid gap-4 grid-rows-[max-content_1fr]">
        <div class="font-heading-token text-2xl font-heading">history</div>
        <div class="grid card preset-filled-surface-50-950 place-items-center">
            <div>No History</div>
        </div>
    </div>

    <div class="card preset-filled-surface-100-900 p-6">
        <div class="font-heading-token text-2xl font-heading">converter</div>
        {#if data.ffmpeg}
            ffmpeg version { data.ffmpeg.version }<br />
            encode h264: { data.ffmpeg.h264 ? "yes" : "no" }<br />
            encode h265: { data.ffmpeg.h265 ? "yes" : "no" }<br />
        {:else}
            Unable to find ffmpeg. Make sure it is added to your path.
        {/if}
    </div>

    <div class="card preset-filled-surface-100-900 p-6">
        <div class="w-full grid grid-cols-[1fr_max-content]">
            <div class="font-heading-token text-2xl font-heading">system options</div>
            <button class="btn preset-filled-primary-500 font-heading">change</button>
        </div>
        <div class="grid grid-cols-[max-content_1fr]">
            <span>Input Location:</span>
            <span></span>
            <span>Output Location:</span>
            <span></span>
        </div>
    </div>
</div>

<style>

    @keyframes gradient-left {
        from { background-position-x: 0; }
        to { background-position-x: 100px; }
    }

    :global(.construction-gradient) {
        background-image: repeating-linear-gradient(-45deg, var(--color-primary-300) 0%, var(--color-primary-300) 25%, var(--color-primary-800) 25%, var(--color-primary-800) 50%);
        background-size: 100px 100px;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-name: gradient-left;
    }

</style>