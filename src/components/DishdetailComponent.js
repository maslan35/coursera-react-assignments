import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';



    function RenderDish({dish}){
        if(dish != null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src ={this.props.dish.image} alt ={this.props.dish.name} /> 
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }else{
            return(<div></div>)
        }
    }

    function RenderComments({comments}){
        if(comments!=null){
            const cmmnts=comments.map(comment =>{
                return(
                    <li key={comments.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        {new Intl.DateTimeFormat("en-Us",{
                            year:"numeric",
                            month:"long",
                            day:"2-digit"
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cmmnts}
                    </ul>
                </div>
            )
        }
        else{
            <div></div>
        }
    }

        const DishDetail= (props)=> {
            const dish=props.dish
            if(dish==null){
               return(
                <div></div>
               ) 
            }
            const dishItem=<RenderDish dish={props.dish}/>
            const dishComment=<RenderComments dish={props.comments}/>

            return(
                <div className="row">
                    {dishItem}
                    {dishComment}
                </div>
            )
        }
        

export default DishDetail;