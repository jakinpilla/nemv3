<template>
    <v-container>
        <v-btn @click="headerSend"> 헤더 전송 </v-btn>
        <v-btn @click="lsWrite"> 로컬 스토리지 저장 </v-btn>
        <v-btn @click="lsRead"> 로컬 스토리지 읽기 </v-btn>
        <v-btn @click="lsRemove"> 로컬 스토리지 지우기 </v-btn>
        <v-btn @click="lsClear"> 로컬 스토리지 전체삭제 </v-btn>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {

    mounted() {
        if (!window.localStorage) pop('지원하지 않아요')
    },

    methods: {
        headerSend () {
            axios.get(`${this.$apiRootPath}test`, { headers: { xxx:1234, yyy: 'string??' }})
            .then(r => console.log(r))
            .catch(e => console.log(e))
        },
        lsWrite () {
            localStorage.setItem('token', 123)
            localStorage.setItem('ㅌㅌ5455', 3333)
        },
        lsRead () {
            console.log(localStorage.getItem('token'))
        },
        lsRemove () {
            localStorage.removeItem('token')
        },
        lsClear () {
            localStorage.clear()
        }
    }    
}
</script>

