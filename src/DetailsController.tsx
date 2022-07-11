import { PureComponent } from "react";
import UserData from "./UserData";

interface props {
    route: any;
}

interface state {
    item : UserData;
}

export default class DetailsController extends PureComponent<props , state>{

    constructor(props: any){
        super(props)
        this.state = {
            item : this.props.route ? this.props.route.params.item : {}
        }
    }

}