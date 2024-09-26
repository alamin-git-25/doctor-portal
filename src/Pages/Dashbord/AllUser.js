import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loding from '../Sheared/Loding';

const AllUser = () => {
    const {data, isLoading} = useQuery({queryKey:['users'], queryFn:()=>fetch('http://localhost:5000/user').then(res=> res.json())});
    if(isLoading){
        return<Loding/>
    }
    return (
        <div>
            <h2>All Users : {data.length}</h2>
        </div>
    );
};

export default AllUser;