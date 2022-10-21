import React, { useState } from 'react'
import {useQuery} from '@apollo/client';
import { GET_ORDERS } from '../graphql/quaries';

type Props = {}

function useCustomerOrders({}: Props) {
    const {loading,error,data} = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([]);

  return (
    <div>
        
    </div>
  )
}

export default useCustomerOrders