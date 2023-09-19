<template>
    <div>
        <h1>Home Page</h1>
        <md-dialog-alert
        :md-active.sync="first"
        md-content="Your post has been deleted!"
        md-confirm-text="Cool!" />

        <md-dialog-alert
        :md-active.sync="second"
        md-title="Post created!"
        md-content="Your post <strong>Material Design is awesome</strong> has been created." />

        <md-button class="md-accent md-raised" @click="first = true">Alert</md-button>
        <md-button class="md-primary md-raised" @click="second = true">Alert</md-button>

        <br /><a @click="restTest">Alert First A Tag</a>
        <br /><a @click="second = true">Alert Second A Tag</a>
    </div>
</template>

<script>
import { CommonRest } from '@/common/js/common';
import { apiPath } from '@/webPath';

const restTest = () => {
    const err = {};
    
    const restParams = {
            method: "post",
            url: apiPath.api_codes,
            data: {},
            err: err,
            callback: (res) => responsLogic(res),
        };

    CommonRest(restParams);

    const responsLogic = (res) => {
            console.log(res);
        };
}

export default {
    name: 'Home',
    data: () => ({
        first: false,
        second: false,
        restTest: restTest
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
