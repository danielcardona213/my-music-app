import React from 'react';


class User extends React.Component{
    render(){
        return(
            <div>
                <div className ="user">
                    <div  className="userName">
                    
                        <p>{this.props.name}</p>
                    </div>

                    <div className ="userAvatar">
                    <img src ={this.props.UserAvatar} />

                    </div>

                </div>
            </div>
            
        );
    }
}


export default User;