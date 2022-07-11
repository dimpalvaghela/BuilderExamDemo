import { PureComponent } from "react";

interface props {
    route: any
}
interface state {
    username: string,
    email: string,

}

export default class HomeDesignController extends PureComponent<props, state>{

    constructor(props: any) {
        super(props)
        this.state = {

            username: this.props.route ? this.props.route.params.username : "",
            email: this.props.route ? this.props.route.params.email : "",

        }
    }


  
} 