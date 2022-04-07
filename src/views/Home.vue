<template>
    <div>
        <Header2 />
        <Section2 />
        <Switch2 />
        <Section3 />
    </div>
</template>
<script>
    // eslint-disable-next-line
    import Header2 from '../layout/Header2.vue';
    import Section2 from '../layout/Section2.vue';
    import Switch2 from '../components/Switch2.vue';
    import Section3 from '../layout/Section3.vue';

    export default {
    name: 'Home',
    components: {
        Header2,
        Section2,
        Switch2,
        Section3
    }
}
</script>
<style>

</style>