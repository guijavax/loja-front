/* eslint-disable no-console */
// import Vue from 'vue'
import axios from 'axios'

export const SERVICES =  {  
    get: (url, callbackSuccess) => {
        
        axios({method: 'GET', url: url}).then(res => {
            if(res.status == 200) {
                callbackSuccess(res.data)
            }
        }, error => {
            console.error(error);
        })
    }
}
