<template>
    <div>
        <h2>Datasets</h2>
        <v-card
            class="mx-auto"
            max-width="300"
            tile
        >
            <v-list>
            <v-subheader>Keypoints</v-subheader>
            <v-list-item-group v-model="item" color="primary">
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
                <v-btn class="ma-2" color="secondary" v-on:click="test">Download</v-btn>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
      item: 1,
      items: [
        { text: '2074.csv', icon: 'mdi-file-delimited-outline' },
        { text: '2077.csv', icon: 'mdi-file-delimited-outline' },
        { text: '2083.csv', icon: 'mdi-file-delimited-outline' },
        { text: '2085.csv', icon: 'mdi-file-delimited-outline' },
        { text: '2096.csv', icon: 'mdi-file-delimited-outline' },
        { text: '2097.csv', icon: 'mdi-file-delimited-outline' },
        { text: '2100.csv', icon: 'mdi-file-delimited-outline' },
      ],
    }),
}
</script>