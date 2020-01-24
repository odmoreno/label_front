<template>
    <div>
        <v-subheader>Seleccione un rango de tiempo: </v-subheader>
        <v-range-slider thumb-label="always" v-model="value"></v-range-slider>
    </div>
</template>

<script>
export default {
    props: [],
    data: ()=> {
        value: [20,30]
    }
}
</script>