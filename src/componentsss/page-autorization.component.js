import { Component } from "../core/componemt.js";

export class PageAutorization extends Component {
    constructor(id) {
        super(id)


    }

    init() {
        this.singIn = new Component('sing-in')
        this.singIn = new Component('sing-up')
        this.links = this.component.querySelectorAll('.form-link')
        this.links.forEach(link => {
            console.log(link);
            link.addEventListener('click', onChangeFormHandler.bind(this))
            // привязали именно тот link при помощи bind

        })

    }
}



function onChangeFormHandler(event) {
    event.preventDefault();
    console.log(this)
    console.log('this.singIn')
    console.log('this.singUp')

    if (event.target.classList.contains('link-in')) {
        this.singIn.show();
        this.singUp.hide();
    } else if (event.target.classList.contains('link-up')) {
        this.singIn.hide();
        this.singUp.show();
    }
}