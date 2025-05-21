<script lang="ts">

    import type { PageProps } from './$types';
    let { data }: PageProps = $props();

</script>


<div class="h-full p-6 grid grid-cols-2 gap-6 grid-rows-[1fr_2fr_1fr]">
    <div class="col-span-2 card preset-filled-surface-100-900 p-6">
        <div class="font-heading-token text-2xl">Progress</div>
        Nothing is converting
    </div>

    <div class="card preset-filled-surface-100-900 p-6">
        <div class="font-heading-token text-2xl">Queue</div>
        Nothing is in the queue
    </div>

    <div class="card preset-filled-surface-100-900 p-6">
        <div class="font-heading-token text-2xl">History</div>
        No history
    </div>

    <div class="card preset-filled-surface-100-900 p-6">
        <div class="font-heading-token text-2xl">Converter</div>
        {#if data.ffmpeg}
            ffmpeg version { data.ffmpeg.version }<br />
            encode h264: { data.ffmpeg.h264 ? "yes" : "no" }<br />
            encode h265: { data.ffmpeg.h265 ? "yes" : "no" }<br />
        {:else}
            Unable to find ffmpeg. Make sure it is added to your path.
        {/if}
    </div>

    <div class="card preset-filled-surface-100-900 p-6">
        <div class="font-heading-token text-2xl">System Options</div>
        Input Location: <br />
        Output Location: <br />
        <button class="btn preset-filled-primary-500">Change</button>
    </div>
</div>