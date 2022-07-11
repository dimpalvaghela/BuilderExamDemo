import React, { PureComponent } from 'react';
import UserData from './UserData';


interface props {
    navigation: any
}

type state = {
    page: number,
    lastPage: number,
    dataList: Array<UserData>,
    animatingSet : boolean,

}

export class ListController extends PureComponent<props, state>{

    constructor(props: any) {
        super(props)

        this.state = {
            page: 0,
            lastPage: 50,
            dataList: [],
            animatingSet: true,
        }
    }

    async componentDidMount() {
        this.callAPI()
        let myInterval = setInterval(() => {
            if (this.state.page < this.state.lastPage) {
                this.handleLoadMoreData();
            } else {
                console.log("Clear interval");
                clearInterval(myInterval);
                this.setState({
                    animatingSet:false
                })
        

            }
        }, 1000);

        
    }

    closeActivityIndicator = () => setTimeout(() => this.setState({  
        animatingSet: false }), 6000)  

    async callAPI() {
        let result = fetch(`https://reqres.in/api/users?page=${this.state.page}`,);
        console.log("loadMoreData1", this.state.page)
        let respJson = await (await result).json();
        console.warn("respJson", respJson);
        //this.dataList = respJson.data;

        this.setState({
          dataList :  this.state.page === 0 ? respJson.data : [...this.state.dataList,...respJson.data],
        
        }

        )

        console.log("newPage", this.state.page)
    };

    handleLoadMoreData = () => {
        console.log("loadMoreData2", this.state.page)
        this.setState({
            page: this.state.page + 1,
        }, () => {
            this.callAPI();
        });
    }


    openDetails = (item: UserData) => {
        this.props.navigation.navigate("ListComponent", { item: item })
    }


}