<script>
    import WhatsappEnquiry from "../../lib/ui/WhatsappEnquiry.svelte";
    import {locale} from "svelte-i18n";
    import Footer from "$lib/app-shelf/Footer.svelte";
    export let data
</script>

<slot></slot>

<div class="container">
    <div class="rounded-lg p-4 bg-amber-100 my-4">
        {#if $locale === 'cn'}
            <p>亚洲课堂的课程和海外留学服务查询、报名查询，请联系您的咨询服务机构：香港/海外留学服务与咨询机构</p>
            <br>
            <p>EHLA课堂账号支援服务：</p>
            <p>🌐微信服务号：EHLA HK</p>
            <p>🌐WhatsApp：(＋852) 9654 8680</p>
            <p>🌐Line: (＋852) 9654 8680</p>
        {:else}
            <WhatsappEnquiry/>
        {/if}
    </div>
</div>