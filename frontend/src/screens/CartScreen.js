import React, {useEffect} from 'react'
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { Col, ListGroup, Row } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions.'

const CartScreen = () => {
  let params =   useParams()
  let navigate = useNavigate()
  let location = useLocation()
  const dispatch = useDispatch()



    return (
       <Row>
           <Col md={8}>
           <h1>Shopping Cart</h1>
          
           </Col>
           <Col>

           </Col>
           <Col>

           </Col>
       </Row>
    )
}

export default CartScreen
