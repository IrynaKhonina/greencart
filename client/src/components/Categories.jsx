import {assets} from "../assets/assets.js";


export const Categories = () => {
    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl front-medium'>Categories</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6
        xl:grid-cols-7 mt-6 gap-6'>
                <div>
                    <img src={assets.box_icon} alt=''/>
                    <p>fruit</p>
                </div>
            </div>

        </div>
    );
};