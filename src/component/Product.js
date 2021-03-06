import React from "react";
import '../index.css'

class Product extends React.Component {

    constructor(props){
        super(props)
        this.doUpVote = this.doUpVote.bind(this);
    }


    doUpVote(){
        this.props.onUpVote(this.props.id);
    }

    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.image}/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.doUpVote}>
                            <i className='large caret up icon'/>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image' src={this.props.avatar}/>
                    </div>
                </div>
                <br></br>
            </div>

        );
    }

}

export default Product;