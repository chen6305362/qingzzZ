new Vue({
    el:"#outDiv",
    data:{
        click_rotate1:{"click":false},
        click_rotate2:{"click":true}
    },
    methods:{
        rotate(i){
            if(i==1){
            this.click_rotate1.click=true;
            this.click_rotate2.click=false;
            }else if(i==-1){
                this.click_rotate1.click=false;
                this.click_rotate2.click=true;
            }
        }
    }
})