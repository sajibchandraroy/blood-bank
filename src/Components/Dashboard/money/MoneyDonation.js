import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo from "../../Image/Donation/logo.jpg";
import Payment from './Payment';

const MoneyDonation = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [clickedItem, setClickedItem] = useState(false);
        const onSubmit = (e) => {
        console.log(e)
        setClickedItem(true)
    };
    console.log(clickedItem)

    return (
        <div> 
            {!clickedItem ?              
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={logo} alt="Card image cap" />
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Name</span>
                            <input type="text" ref={register} name="name" class="form-control" placeholder="FullName" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">BDT. </span>
                            <input type="text" ref={register} name="amount" class="form-control" aria-label="Amount (to the nearest dollar)" />
                            <span class="input-group-text">.00</span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Cell</span>
                            <span class="input-group-text">+88</span>
                            <input type="text" ref={register} name="cellPhone" class="form-control" aria-label="Amount (to the nearest dollar)" />                            
                        </div>
                        <input type="submit" />
                    </form>
                    
                </div>
            </div> 
            : <Payment/>
}
        </div>  
        
            
    );
};

export default MoneyDonation;